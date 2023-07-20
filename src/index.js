import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import proxy from "express-http-proxy";

const app = express();

app.use(
    "/api",
    proxy("http://react-ssr-api.herokuapp.com", {
        proxyReqOptDecorator(opts) {
            opts.headers["x-Forwarded-host"] = "localhost:3000";
            return opts;
        },
    })
);

app.use(express.static("public"));

app.get("*", async (req, res) => {
    const store = createStore(req);

    const wrapAndExecPromises = (loadData) => {
        return new Promise((resolve) => {
            loadData(store).then(resolve).catch(resolve);
        });
    };

    const promises = matchRoutes(Routes, req.path).map(({ route }) =>
        route.loadData ? wrapAndExecPromises(route.loadData) : null
    );

    Promise.all(promises).then(() => {
        const context = {};
        const content = renderer(req, store, context);

        if (context.url) return res.redirect(301, "/");
        if (context.pageNotFound) res.status(404);

        res.send(content);
    });
});

app.listen(3000, () => {
    console.log("running on port 3000");
});

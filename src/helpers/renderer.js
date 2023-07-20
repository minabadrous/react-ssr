import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serializeJavascript from "serialize-javascript";
import { Helmet } from "react-helmet";

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <html>
            <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${serializeJavascript(
                        store.getState()
                    )}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
};

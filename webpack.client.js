const path = require("path");
const merge = require("webpack-merge");
const basConfig = require("./webpack.base.js");

const config = {
    // Root file of client files
    entry: "./src/client/client.js",

    // Where to produce client bundle
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "public"),
    },
};

module.exports = merge(basConfig, config);

const path = require("path");
const merge = require("webpack-merge");
const basConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
    // Running in node, rather than browser
    target: "node",

    // Root file of server application
    entry: "./src/index.js",

    // Where to product bundle
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },

    externals: [webpackNodeExternals()],

    ...basConfig,
};

module.exports = merge(basConfig, config);

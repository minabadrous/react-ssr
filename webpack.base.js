module.exports = {
    // Base Rules
    module: {
        rules: [
            {
                // Every JS file
                test: /\.js$/,

                // loader to use
                loader: "babel-loader",

                // Ignore node modules
                exclude: /node_modules/,
                options: {
                    presets: [
                        "react",
                        // Later for some async code
                        "stage-0",

                        // Run transform rules needed to support latest 2 versions of all browsers
                        ["env", { target: { browsers: "last 2 versions" } }],
                    ],
                },
            },
        ],
    },
};

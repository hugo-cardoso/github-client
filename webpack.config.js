const path = require('path');

module.exports = {
    entry: {
        filename: './app.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        libraryTarget: "umd",
        filename: "github-api-client.js",
        library: "GithubApiClient"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
}
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const webpackCommonConfig = require('./webpack.common')
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                maketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJson.dependencies
        }),
    ]
}

module.exports = merge(webpackCommonConfig, devConfig)
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const packageJson = require('../package.json')
const webpackCommonConfig = require('./webpack.common')

const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry.js',
            exposes: {
                './MarketingApp' : './src/bootstrap'
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(webpackCommonConfig, devConfig)
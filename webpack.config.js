const path = require('path')
const vueLoaderPlugin = require('./node_modules/vue-loader/lib/plugin')


module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {test: /\.vue$/, use: 'vue-loader'},
            {
                test: /\.css$/,
                include: ['/node_modules/mint-ui/lib/'],
                use: ['style-loader','css-loader']
            },
            {test: /\.(sc|c|sa)ss$/, use: ['style-loader','css-loader','sass-loader']},
            {test: /\.(eot|woff|woff2|svg|ttf|png)$/, use: 'file-loader'},
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    devServer: {
        publicPath: "/dist"
    },
    plugins: [
        new vueLoaderPlugin()
    ]
}
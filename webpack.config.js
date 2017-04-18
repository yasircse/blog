const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const srcDir = resolve(__dirname,'src')

module.exports={
    entry:`${srcDir}/index.js`,
    output:{
        filename:'bundle.js'
    },

    devServer:{
        historyApiFallback:true
    },
    
    module:{
        rules:[{
            test:/\.js$/,
            loader:'babel-loader',
            exclude:'/node_modules/'
        },{
            test:/\.css$/,
            use:[{
                loader:'style-loader'
            },{
                loader:'css-loader',
                options:{
                    modules:true,
                    localIdentName:'[name]-[local]-[hash:base64:6]',
                    camelCase:true
                }
            }]
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:`${srcDir}/index.html`
        })
    ]
}
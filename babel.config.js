module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ]
    ],

    plugins: [  
        [
            require.resolve('babel-plugin-module-resolver'), 
            {
                root: ["./src"],
                alias: {
                    '@root': './src',
                    '@configs': './src/configs',
                    '@controller': './src/controller',
                    '@db': './src/db',
                    '@mid': './src/midllewares',
                    '@models': './src/model',
                    '@vars': './src/vars',
                    '@server': './src/server'
                }
            }
        ]
    ]
}
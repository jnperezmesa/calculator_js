const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: ['./scripts/calculator.js', './scripts/ui.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, '.'), // sirve tus archivos estáticos desde aquí
        watchContentBase: true, // observa los cambios en los archivos estáticos
        hot: true, // habilita hot reloading
        open: true // abre el navegador automáticamente
    }
};
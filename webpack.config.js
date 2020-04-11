//estos nos permite acceder haciendo donde estamos en las carpetas del proyecto
const path = require('path');
//Archivo necesario para trabajar con HTML y lo traemos del paquete que instalamos
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

//Vamos a crear un modulo para exportar donde esta la configuracion de lo que va a suceder
module.exports = {
    //punto de entrada, se pone esa carpeta porque es donde va a vivir el codigo y de donde vamos a empezar
    entry: './src/index.js',
    //el output es donde se a poner el proyecti ya terminado, compilado y listo para enviar a producción
    output:{
        //esto busca donde esta el archivo y donde sea que este el archivo, va a crear la carpeta de output
        path: path.resolve(__dirname, 'dist'),
        //Esto le da el nombre al archivo que se va a generar cuando se compile todo el proyecto
        filename: 'main.js',
    },
    //aqui vamos a configurar las extenciones que vamos a trabjar en el proyecto
    resolve: {
        extensions: ['.js'],
    },
    //Creamos un modulo con las reglas necesarias para empezar a trabajar
    module: {
        rules: [
            {   //Generamos la estructurade babel
                test: /\.js?$/,
                //excluimos la carpeta de node_modules
                exclude: /node_modules/,
                //aca decimos que vamos a usar una config establecida para trabajar nuestro codigo y es el babel-loader
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
    //vamos a configurar los plugin con los cuales vamos a trabajar
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                //donde va a vivir el template principal
                template: './public/index.html',
                //el nombre del archivo donde los vamos a evniar o guardar, este va a ser en la carpeta dist
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin([
            {
                from: './src/styles/styles.css',
                to: '',
            }
        ]),
    ]
}
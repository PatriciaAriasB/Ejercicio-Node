const Logger = require('logplease');
const logger = Logger.create('utils');
const numeros = require("./numeros.js");

// console.log(numeros.esPar(4));

// logger.info(numeros.esPar(2,100,202));

// logger.error(numeros.esPar(3,101));

const arrayNumeros = [2, 3, 101, 201, 202, 100]

const loggerNumber = () => {
    arrayNumeros.forEach(numero =>{
        if (numeros.esPar(numero) == true){
            logger.info(numero + 'número par');
        }else{
            logger.error(numero + 'número impar')
        }
    })
}
loggerNumber()
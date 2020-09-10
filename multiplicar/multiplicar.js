const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./');

// modele.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número.`)
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite ingresado ${limite} no es un número.`)
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }.txt`.green)
        });

    });
};

let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base ingresado ${base} no es un número.`)
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite ingresado ${limite} no es un número.`)
            return;
        }

        let data = '';
        data += '==============\n'.green;
        data += `tabla de ${ base }\n`.green;
        data += '==============\n'.green;

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base*i }\n`;
        }

        resolve(data)

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
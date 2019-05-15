'use strict';

const apickli = require('apickli');
const {Before, setDefaultTimeout} = require('cucumber');

Before(function() {
    this.apickli = new apickli.Apickli('http', '');
    this.apickli.addRequestHeader('Cache-Control', 'no-cache');
    this.apickli.setGlobalVariable('version', 'v1');
    this.apickli.setGlobalVariable('host', 'localhost:8000');
    this.apickli.setGlobalVariable('dominio', 'localhost:8000');
});

setDefaultTimeout(60 * 1000); // en milisegundos
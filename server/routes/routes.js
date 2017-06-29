var express = require('express');
const path = require('path');
var accounts = require('../controllers/accountsController.js');
var ajes = require('../controllers/ajeController.js');
var client = require('../controllers/clientController.js');
var admin = require('../controllers/adminController.js');

module.exports = function(app){



app.get('/accounts/get',accounts.getAccounts);

app.get('/ajes/get',ajes.getAjes);

app.get('/client/get', client.getClient);

app.get('/clients/get',admin.getDatabases);

}
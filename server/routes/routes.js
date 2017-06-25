var express = require('express');
const path = require('path');
var accounts = require('../controllers/accountsController.js');
var ajes = require('../controllers/ajeController.js');

module.exports = function(app){



app.get('/accounts/get',accounts.getAccounts);


app.get('/ajes/get',ajes.getAjes);

}
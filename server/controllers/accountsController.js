var MongoClient = require('mongodb').MongoClient;

exports.getAccounts = function(req,res){

 MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('accounts');
            collection.find().toArray(function (err, items) {
                res.json(items)
            })

    })
}
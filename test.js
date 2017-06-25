var MongoClient = require('mongodb').MongoClient
    
// this will be controller to close period and add new fiscal year

MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('accounts');
            collection.find().toArray(function (err, items) {
                console.log(items)
            })

    })
var MongoClient = require('mongodb').MongoClient;

exports.getAccounts = function(req,res){

 MongoClient.connect("mongodb://127.0.0.1:27017/", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var currdb = db.db(req.query.name)
            var collection = currdb.collection('accounts');
            collection.find().sort({csort:1,ssort:1} ).toArray(function (err, items) {
                res.json(items)
                 db.close()
            })

    })
}
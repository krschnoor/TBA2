var MongoClient = require('mongodb').MongoClient;

exports.getClient = function(req,res){

 MongoClient.connect("mongodb://127.0.0.1:27017/", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var currdb = db.db(req.query.name)
            var collection = currdb.collection('clientinfo');
            collection.find().toArray(function (err, items) {
                res.json(items);
                console.log(items)
                db.close()
            })

    })
}
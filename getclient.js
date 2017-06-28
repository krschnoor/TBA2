var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('clientinfo');
            collection.find().toArray(function (err, items) {
                //res.json(items);
                console.log(items)
                db.close()
            })

    })

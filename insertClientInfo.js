var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Chuck", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
            db.dropCollection("clientinfo");
           db.createCollection("clientinfo",function(err,coll){})           

            var collection = db.collection('clientinfo');
           
            var tbdt = new Date(2015,11,31)
            var tbdt2 = new Date(2016,11,31)

           collection.insertOne({name:"Chuck",fyes:[tbdt2,tbdt]})
           
             
                      
          })
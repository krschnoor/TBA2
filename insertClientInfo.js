var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
            
           db.createCollection("clientinfo",function(err,coll){})           

            var collection = db.collection('clientinfo');
           
            var tbdt = new Date(17+100,5,30)

           collection.insertOne({name:"Brad",fyes:[tbdt]})
           
             
                      
          })
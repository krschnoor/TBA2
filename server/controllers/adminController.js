var MongoClient = require('mongodb').MongoClient;

exports.getDatabases = function(req,res){

 MongoClient.connect("mongodb://127.0.0.1:27017/", function (err,db) {
           if (err) {
                return console.dir(err); }
                
            var adminDb = db.admin();
            // List all the available databases
             adminDb.listDatabases(function(err, result) {
             res.json(result)
             console.log(result.databases);
             db.close();
             });
            
    })
}
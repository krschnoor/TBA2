var MongoClient = require('mongodb').MongoClient;



 MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var adminDb = db.admin();
            // List all the available databases
             adminDb.listDatabases(function(err, result) {
             console.log(result.databases);
             db.close();
             });
            

})
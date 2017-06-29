var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Chuck", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
           db.dropCollection("entries")
           db.createCollection("entries",function(err,coll){})           

            var collection = db.collection('entries');
           
            var tbdt = new Date(2016,11,31)
             var tbdt2 = new Date(2015,11,31)

           collection.insertOne({aje:[{AcctId:"595102524aed3023242c9d6b",tbdate:tbdt,debit:12000,credit:0},
                               {AcctId:"595102524aed3023242c9d70",tbdate:tbdt,debit:12000,credit:0},
                                {AcctId:"595102524aed3023242c9d6a",tbdate:tbdt,debit:0,credit:7000},
                                {AcctId:"595102524aed3023242c9d64",tbdate:tbdt,debit:0,credit:5000} ]})
           
             
            collection.insertOne({aje:[{AcctId:"595102524aed3023242c9d61",tbdate:tbdt,debit:875.50,credit:0},
                               {AcctId:"595102524aed3023242c9d62",tbdate:tbdt,debit:0,credit:229.50},
                                {AcctId:"595102524aed3023242c9d66",tbdate:tbdt,debit:3500,credit:0},
                                {AcctId:"595102524aed3023242c9d64",tbdate:tbdt,debit:0,credit:5000} ]})


             collection.insertOne({aje:[{AcctId:"595102524aed3023242c9d61",tbdate:tbdt,debit:875.50,credit:0},
                               {AcctId:"595102524aed3023242c9d62",tbdate:tbdt,debit:0,credit:229.50},
                                {AcctId:"595102524aed3023242c9d66",tbdate:tbdt,debit:3500,credit:0},
                                {AcctId:"595102524aed3023242c9d64",tbdate:tbdt,debit:0,credit:5000} ]})

             collection.insertOne({aje:[{AcctId:"595102524aed3023242c9d61",tbdate:tbdt2,debit:875.50,credit:0},
                               {AcctId:"595102524aed3023242c9d62",tbdate:tbdt2,debit:0,credit:229.50},
                                {AcctId:"595102524aed3023242c9d66",tbdate:tbdt2,debit:3500,credit:0},
                                {AcctId:"595102524aed3023242c9d64",tbdate:tbdt2,debit:0,credit:5000} ]})
          })
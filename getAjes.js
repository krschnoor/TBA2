var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db("Chuck") //db.db(req.query.name)

 
 var collection = mydb.collection('entries');

 var dt = new Date(2015,11,31)
 
console.log(dt)

    collection.find().toArray(function(err, ajes) {
        if(!err){
        var retArr = [];
        
         for(var ctr = 0;ctr<ajes.length;ctr++) { 
                    
             for(ctr2=0;ctr2<ajes[ctr].aje.length;ctr2++) {
               if(+ajes[ctr].aje[ctr2].tbdate == +dt){
               retArr.push(ajes[ctr].aje[ctr2])}
             }
          }

        //res.json(retArr)
        console.log(retArr) //ajes comes here.
        db.close()}
    });    
 
})
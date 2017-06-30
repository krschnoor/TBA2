var MongoClient = require('mongodb').MongoClient;

exports.addEntry = function(req,res){
 
MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.body.client)

 var ajeObj = {aje:[]}

 ajeObj.aje = req.body.entry

 var collection = mydb.collection('entries');

 

 collection.insert(ajeObj,function(err,result){
           if(!err){
              console.log("inserted " + result)
              res.json(200,result);
              mydb.close()}

             else{res.send(err);
             mydb.close()}

              })
            
            
 
  
 })

}

exports.getAjes = function(req,res){
 
 MongoClient.connect("mongodb://127.0.0.1:27017/" , function(err,db){
 
 var mydb = db.db(req.query.name)
 var dt1 = new Date(req.query.fye)

 console.log(req.query.name + "---" + dt1)
 var collection = mydb.collection('entries');

 
    collection.find().toArray(function(err, ajes) {
        if(!err){
        var retArr = [];
        
         for(var ctr = 0;ctr<ajes.length;ctr++) { 
                    
             for(ctr2=0;ctr2<ajes[ctr].aje.length;ctr2++) {
               var dt2 = new Date(ajes[ctr].aje[ctr2].tbdate)
               console.log(dt1.getTime() + "--" + dt2.getTime())
               if( dt1.getTime() == dt2.getTime()){ 
               retArr.push(ajes[ctr].aje[ctr2])}
             }
          }


        res.json(retArr)
        console.log(retArr)
        // console.log(ajes) //ajes comes here.
        db.close()}
    });    
 
            
 
  
 })

}







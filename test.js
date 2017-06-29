var MongoClient = require('mongodb').MongoClient
    
// this will be controller to close period and add new fiscal year

MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
            var collection = db.collection('accounts');
            collection.find().toArray(function (err, items) {
                console.log(items)
            })

    })



    <h4 *ngFor="let account of accounts | tBClassified : 'CurrentAsset' " > 
         Account Name: {{account.name}}
     
          <h6 *ngFor="let balance of account.balances |  tBClassifiedBalance: 2018">
        {{ balance.tbmonth}}  {{ balance.tbday}}  {{ balance.tbyear}}</h6>
      
          <h6 *ngFor="let aje of entries ">{{aje.debit}} + " " + {{aje.credit}}" </h6>
    
       </h4>
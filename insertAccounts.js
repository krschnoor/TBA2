var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Brad", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
            
           db.createCollection("accounts",function(err,coll){})           

            var collection = db.collection('accounts');
            collection.insertOne({name:"Accounts Receivable",class:"CurrentAsset",subclass:"AccountsReceivable",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]})
           
             collection.insert({name:"Cash",class:"CurrentAsset",subclass:"Cash",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item) })


              collection.insert({name:"Other Current Receivables",class:"CurrentAsset",subclass:"OtherReceivables",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Due from Shareholder",class:"CurrentAsset",subclass:"OtherReceivables",csort:3,ssort:2,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Inventory",class:"CurrentAsset",subclass:"Inventory",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Investments",class:"CurrentAsset",subclass:"CurrentInvestments",csort:5,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Fixed Assets - Equipment",class:"FixedAssets",subclass:"Equipment",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Fixed Assets - Buildings",class:"FixedAssets",subclass:"Buildings",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})
     
             collection.insert({name:"Depreciation - Equipment",class:"FixedAssets",subclass:"DepreciationEquipment",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})
          
              collection.insert({name:"Depreciation - Buildings",class:"FixedAssets",subclass:"DepreciationBuildings",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Other Assets",class:"OtherAssets",subclass:"OtherAssets",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})
          
             collection.insert({name:"Accounts Payable",class:"CurrentLiabilities",subclass:"AccountsPayable",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

            collection.insert({name:"Due to Shareholder",class:"CurrentLiabilities",subclass:"OtherPayables",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})
 
           collection.insert({name:"Payroll Liabilities",class:"CurrentLiabilities",subclass:"OtherPayables",csort:2,ssort:2,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

           collection.insert({name:"Loans Payable",class:"CurrentLiabilities",subclass:"LoanPayables",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

           collection.insert({name:"Other payables",class:"CurrentLiabilities",subclass:"OtherPayables",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

          collection.insert({name:"Loans Payable",class:"LongTermLiabilities",subclass:"LoanPayables",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

         collection.insert({name:"Retained Earnings",class:"Equity",subclass:"RetainedEarnings",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})

         collection.insert({name:"Shareholder Draws",class:"Equity",subclass:"Draws",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbday:30,tbmonth:6,tbyear:17,adjbal:0}]},function(err,item){console.log(item)})
          db.close()

          })

   
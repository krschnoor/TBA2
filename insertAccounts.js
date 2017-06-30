var MongoClient = require('mongodb').MongoClient;


 MongoClient.connect("mongodb://127.0.0.1:27017/Chuck", function (err,db) {
            if (err) {
                return console.dir(err);
            }
           
           db.dropCollection("accounts");

           db.createCollection("accounts",function(err,coll){})           

           var dt = new Date(2016,11,31)
            var dt2 = new Date(2015,11,31)


            var collection = db.collection('accounts');
            collection.insertOne({name:"Accounts Receivable", category:"Asset", class:"CurrentAsset",subclass:"AccountsReceivable",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]})
           
             collection.insert({name:"Cash",category:"Asset",class:"CurrentAsset",subclass:"Cash",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item) })


              collection.insert({name:"Other Current Receivables",category:"Asset",class:"CurrentAsset",subclass:"OtherReceivables",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Due from Shareholder",category:"Asset",class:"CurrentAsset",subclass:"OtherReceivables",csort:3,ssort:2,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Inventory",category:"Asset",class:"CurrentAsset",subclass:"Inventory",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Investments",category:"Asset",class:"CurrentAsset",subclass:"CurrentInvestments",csort:5,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Fixed Assets - Equipment",category:"Asset",class:"FixedAssets",subclass:"Equipment",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Fixed Assets - Buildings",category:"Asset",class:"FixedAssets",subclass:"Buildings",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})
     
             collection.insert({name:"Depreciation - Equipment",category:"Asset",class:"FixedAssets",subclass:"DepreciationEquipment",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})
          
              collection.insert({name:"Depreciation - Buildings",category:"Asset",class:"FixedAssets",subclass:"DepreciationBuildings",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

             collection.insert({name:"Other Assets",class:"OtherAssets",category:"Asset",subclass:"OtherAssets",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})
          
             collection.insert({name:"Accounts Payable",category:"Liability",class:"CurrentLiabilities",subclass:"AccountsPayable",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

            collection.insert({name:"Due to Shareholder",category:"Liability",class:"CurrentLiabilities",subclass:"OtherPayables",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})
 
           collection.insert({name:"Payroll Liabilities",category:"Liability",class:"CurrentLiabilities",subclass:"OtherPayables",csort:2,ssort:2,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

           collection.insert({name:"Loans Payable",category:"Liability",class:"CurrentLiabilities",subclass:"LoanPayables",csort:3,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

           collection.insert({name:"Other payables",category:"Liability",class:"CurrentLiabilities",subclass:"OtherPayables",csort:4,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

          collection.insert({name:"Loans Payable",category:"Liability",class:"LongTermLiabilities",subclass:"LoanPayables",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

         collection.insert({name:"Retained Earnings",category:"Equity",class:"Equity",subclass:"RetainedEarnings",csort:1,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})

         collection.insert({name:"Shareholder Draws",category:"Equity",class:"Equity",subclass:"Draws",csort:2,ssort:1,balances:[
                               {unadjbal:0,tbdate:dt,adjbal:0},{unadjbal:0,tbdate:dt2,adjbal:0}]},function(err,item){console.log(item)})
          db.close()

          })

   
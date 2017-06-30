import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'total',
  templateUrl: './account-total.component.html',
  
})
export class AccountTotalComponent implements OnInit {
 
 @Input() account:any;
 @Input('entries') entries: any;
 @Output() balance: any;


  
  client;
  fye;

  constructor(private gs: GlobalService) { }

  ngOnInit() {
    
    this.client = this.gs.gv[0].name
    this.fye = this.gs.fye
   
    this.getTotal()
  }

  getTotal(){

  
   var total = 0;

    for(var ctr = 0;ctr<this.entries.length;ctr++){
    
       if(this.entries[ctr].AcctId ==this.account._id){
        
        if(this.account.category == 'Asset'){
        total += this.entries[ctr].debit
        total -= this.entries[ctr].credit}
        else{
        total -= this.entries[ctr].debit
        total += this.entries[ctr].credit}
      }
   
    }    
    
    this.balance = total
 }

}
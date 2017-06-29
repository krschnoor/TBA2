import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import {TBClassifiedPipe} from '../pipes/tbclassified.pipe';
import { GlobalService } from '../global.service';
import {TBClassifiedBalance} from '../pipes/tbclassified.pipe';
@Component({
  selector: 'app-class-tb',
  templateUrl: './class-tb.component.html',
  styleUrls: ['./class-tb.component.css'],
  providers:[TBClassifiedBalance]
  
})
export class ClassTBComponent implements OnInit {

  client;
  accounts;
  entries;
  fye;
  currenttbyear; 
  currenttbday;
  currenttbmonth;  
  private filteredData;

  constructor(private clientService: ClientService,private gs: GlobalService,private mypipe:TBClassifiedBalance) {

   }

  ngOnInit() {
   
   this.client = this.gs.gv[0].name
   this.fye = new Date(this.gs.fye)
   this.currenttbday = this.fye.getDate()
   this.currenttbyear = this.fye.getYear()
   this.currenttbmonth = this.fye.getMonth()

   this.clientService.getAccounts(this.gs.gv[0].name).subscribe(data => this.accounts = data);
   this.clientService.getAjes(this.client,this.fye).subscribe(data => this.entries = data);
   
      }


   getBalance(acct){
      return  this.mypipe.transform(acct.balances,this.currenttbyear,this.currenttbday,this.currenttbmonth)
   }

}

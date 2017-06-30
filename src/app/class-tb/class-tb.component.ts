import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import {TBClassifiedPipe} from '../pipes/tbclassified.pipe';
import { GlobalService } from '../global.service';
import {TBClassifiedBalance} from '../pipes/tbclassified.pipe';
import {AccountTotalComponent} from '../account-total/account-total.component'

@Component({
  selector: 'app-class-tb',
  templateUrl: './class-tb.component.html',
  styleUrls: ['./class-tb.component.css'],
  providers:[TBClassifiedBalance],
  
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
   this.fye = this.gs.fye
   
  
   this.clientService.getAjes(this.client,this.fye).subscribe(data => this.setEntries(data));
   this.clientService.getAccounts(this.gs.gv[0].name).subscribe(data => this.setAccounts(data));

   
      }


    setEntries(data){
    
    this.entries = data
    
   }

    setAccounts(data){
    
    this.accounts = data
     
   }



}

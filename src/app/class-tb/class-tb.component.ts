import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import {TBClassifiedPipe} from '../pipes/tbclassified.pipe';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-class-tb',
  templateUrl: './class-tb.component.html',
  styleUrls: ['./class-tb.component.css'],
  
})
export class ClassTBComponent implements OnInit {

  accounts;
  entries;
  

  constructor(private clientService: ClientService,private gs: GlobalService) { }

  ngOnInit() {
   
   this.clientService.getAccounts(this.gs.gv[0].name).subscribe(data => this.accounts = data);
   this.clientService.getAjes().subscribe(data => this.entries = data);
   
    }

}

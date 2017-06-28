import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import { Router } from "@angular/router";
import {Database} from '../database';
import { HomeComponent } from '../home/home.component';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.css'],
 
})

export class ClientlistComponent implements OnInit {

  clientlist: Database[];
  
  constructor(private clientService: ClientService,private router: Router, private gs: GlobalService  ) { }

      ngOnInit() {
   
         this.clientService.getClients().subscribe(data => this.clientlist = data.databases );
     
         
      }

   goToOpenClient(name) {
   
  
   this.clientService.getClient(name).subscribe(data => this.settemp( data)); 


   }


   settemp(data) {

  
   this.gs.gv= data
   this.router.navigate(['clientselect'])
   return

   }


  
  


}


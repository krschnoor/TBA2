import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../global.service';

@Component({
 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})

export class HomeComponent implements OnInit {

  private client; 

    constructor(private clientService: ClientService, private gs: GlobalService ) { }

     ngOnInit() {
     
      if (this.gs.gv != null){
      this.client =  this.gs.gv[0]}
     
     }

 
}

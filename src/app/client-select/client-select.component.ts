import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';
import { Router } from "@angular/router";
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-client-select',
  templateUrl: './client-select.component.html',
  styleUrls: ['./client-select.component.css']
})
export class ClientSelectComponent implements OnInit {

 fyes = []
  constructor(private clientService: ClientService,private router: Router, private gs: GlobalService ) { }

  ngOnInit() {
 
  this.fyes = this.gs.gv[0].fyes

 }

}

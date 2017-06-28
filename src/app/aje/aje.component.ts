import { Component, OnInit } from '@angular/core';
import {ClientService } from '../client.service';

@Component({
  selector: 'app-aje',
  templateUrl: './aje.component.html',
  styleUrls: ['./aje.component.css']
})
export class AjeComponent implements OnInit {

 
  
  constructor(private clientService: ClientService) { }

  ngOnInit() {
   
  }

}

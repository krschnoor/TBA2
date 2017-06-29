import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Database} from './database';

@Injectable()
export class ClientService {

  
 
  constructor (private http: Http) {
   
   }


  public getAccounts(name) {

   return  this.http.get(`/accounts/get`,{params:{name:name}})
    .map((res:Response) => res.json());
  }

  public getAjes(name,fye) {

    return this.http.get(`/ajes/get`,{params:{name:name,fye:fye}})
    .map((res:Response) => res.json());

  }


  public getClient(name) {

   return  this.http.get(`/client/get`,{params:{name:name}})
    .map((res:Response) => res.json());
  


  }

  

  public getClients()  {

    return this.http.get(`/clients/get`)
    .map((res:Response) => res.json());

   }
  
  
   

}
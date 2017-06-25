import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {

 

  constructor (
    private http: Http
  ) { }


 public getAccounts() {
    return   this.http.get(`/accounts/get`)
    .map((res:Response) => res.json());
  }

public getAjes() {
    return   this.http.get(`/ajes/get`)
    .map((res:Response) => res.json());
  }


}
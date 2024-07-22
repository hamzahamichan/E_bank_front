import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'

})
export class CompteService {

  constructor(private http: HttpClient) { }

  public getCompte(){
    return this.http.get("http://localhost:9090/compte/get_All");
  }
}

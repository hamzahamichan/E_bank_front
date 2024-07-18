import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }
  public geUsers(){
    return  this.http.get("http://localhost:9090/GET_All")
  }

}



import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users : any;
  constructor(private  http:HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:9090/GET_All").subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }


}

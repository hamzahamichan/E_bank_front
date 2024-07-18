import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users : any;
  constructor(private usersservice:UsersService) {
  }
  ngOnInit(): void {
    this.usersservice.geUsers().subscribe({
      next:(data)=>{
        this.users = data;
      },
      error : err => {
  console.log(err);
      }
    })
  }


}

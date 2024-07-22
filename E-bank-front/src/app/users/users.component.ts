import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UsersService} from "../services/users.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users : any;
  errorMessage ! : string;
  constructor(private usersservice:UsersService) {
  }
  ngOnInit(): void {
    this.usersservice.geUsers().subscribe({
      next:(data)=>{
        this.users = data;
      },
      error : err => {
     this.errorMessage=err.message;
      }
    });

  }



}

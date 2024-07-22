import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {NewUsersComponent} from "./new-users/new-users.component";
import {CompteComponent} from "./compte/compte.component";

const routes: Routes = [
  {path:"users",component:UsersComponent},
  {path :"compte",component:CompteComponent},
  {path:"new-users",component:NewUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

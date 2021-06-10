import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model'

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent  {

 userobj:User={username:"",dob:"",email:""}
 adduserdata(){
   console.log(this.userobj)
 }

}

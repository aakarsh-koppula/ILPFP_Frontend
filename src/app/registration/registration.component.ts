import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveMustMatch} from 'src/app/shared/must-match.validator';
import { GetUsersService } from 'src/app/services/get-users.service';

import { Router } from '@angular/router';
import { IUserData } from 'src/app/models/user';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public user: any;
  public isFormSubmitted: boolean;
  public userForm: FormGroup;
  constructor(private fb: FormBuilder, private router:Router, private getUsersService: GetUsersService) { 
    this.user = {};
    this.isFormSubmitted = false;
    this.userForm = {} as FormGroup;
  }

  ngOnInit(): void {
    this.initReactiveForm();
  }

  public initReactiveForm(){
    this.userForm = this.fb.group({
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required, Validators.minLength(6)]],
      confirmPass: ['', [Validators.required]],
      accept: ['', [Validators.required]]
    },{
      validator: ReactiveMustMatch('pass','confirmPass')
    })
  }

  get userFormControls(){
    return this.userForm.controls;
  }

  public onSubmit(){
    this.isFormSubmitted = true;
    this.user = this.userForm.getRawValue();

    if(this.userForm.controls['firstName'].status !== "INVALID" && this.userForm.controls['lastName'].status !== "INVALID" && this.userForm.controls['email'].status !== "INVALID" && this.userForm.controls['pass'].status !== "INVALID" && this.userForm.controls['confirmPass'].status !== "INVALID" && this.userForm.controls['accept'].status !== "INVALID"){
      this.router.navigate(['/login'])
      console.log("yayy");

      // get values from user
      let email = this.userForm.get('email')!.value;
      let password = this.userForm.get('pass')!.value;
      let firstname = this.userForm.get('firstName')!.value;
      let lastname = this.userForm.get('lastName')!.value;
    
      let body = new HttpParams()
        .set('email', email)
        .set('password', password)
        .set('firstname', firstname)
        .set('lastname', lastname);
      
      // get users from json-server
      this.getUsersService.createUser(body.toString()).toPromise()
        .then( (data: IUserData[]) => 
        {
          if (data !== null)
          {
            this.router.navigate(['home']);
          }  
          else
          {
            console.log(data);
          }
        })
        .catch(message => console.log('Error: ' + message.status + ' ' + message.statusText));
        
    }
    else{
      alert("Please complete all details");
    }

  }

}

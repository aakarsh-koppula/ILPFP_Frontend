import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/models/user';
import { GetUsersService } from 'src/app/services/get-users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public isFormSubmitted: Boolean;
  public users: IUserData[];
  public failedLogin: Boolean;

  constructor(private formBuilder: FormBuilder, private getUsersService: GetUsersService, private router: Router) 
  {
    this.form = {} as FormGroup ;
    this.isFormSubmitted = false;
    this.users = [];
    this.failedLogin = false;
  }

  ngOnInit(): void 
  {
    this.initializeLoginForm();
  }

  public initializeLoginForm()
  {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  get userFormControls()
  {
    return this.form.controls;
  }

  public onSubmit()
  {
    this.isFormSubmitted = true;
    
    // get values from user
    let email = this.form.get('email')!.value;
    let password = this.form.get('password')!.value;

    // put email in a cookie so all our components can use it
    document.cookie = "email=" + email + "; path=/";

    let body = new HttpParams()
      .set('email', email)
      .set('password', password);
    
    // get users from json-server
    this.getUsersService.verifyUser(body.toString()).toPromise()
      .then( (data: IUserData[]) => 
      {
        this.users = data;
      
        if (this.users !== null)
        {
          this.router.navigate(['home']);
        }  
        else
        {
          this.failedLogin = true;
        }
      })
      .catch(message => console.log('Error: ' + message.status + ' ' + message.statusText));

     
  } 
}

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { IUserData } from 'src/app/models/user';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public formfirstname!: String;
  public formlastname!: String;
  public formphone!: String;
  public formstreet!: String;
  public formcity!: String;
  public formstate!: String;
  public formzip!: String;
  public profileForm: FormGroup;
  public isEditable: boolean;
  public fullname: string;
  public emailid: String;
  public user: IUserData[];
  public updatedUser: any;
  public isFormActive: boolean;
  constructor(private fb: FormBuilder, private userdata:UserDataService, private http: HttpClient) {
    this.isEditable = false;
    this.fullname = "";
    this.emailid = "";
    this.profileForm = {} as FormGroup;
    this.user = [];
    this.isFormActive = false;
    this.updatedUser = {} ;
   }

  ngOnInit(): void {
    //this.profileForm = this.fb.group({});
    this.initializeUserData();
    this.initReactiveForm();
  }

  /* public initializeUserData(){
    this.userdata.getUserData().toPromise()
    .then((response:IUserData[])=>{
      this.user = response;
      console.log(this.user[0])
  
    })
    .catch()
  } */
  public initializeUserData(){
  this.userdata.getUserData('Thor@avengers.com').toPromise()
    .then( (data: IUserData[]) => 
    {
    this.user = data;
    console.log(this.user[0]);
    this.fullname = this.user[0].firstname + ' '+ this.user[0].lastname;
    this.emailid = this.user[0].email;
    this.formfirstname = this.user[0].firstname;
    this.formlastname = this.user[0].lastname;
    this.formphone = this.user[0].phone;
    this.formstreet = this.user[0].street;
    this.formcity = this.user[0].city;
    this.formstate = this.user[0].state;
    this.formzip = this.user[0].zip;
    })
    .catch(message => console.log('Error: ' + message.status + ' ' + message.statusText));
  }

  public initReactiveForm(){
    this.profileForm = this.fb.group({
      firstName:[" ",[Validators.required]],
      lastName:[" ",[Validators.required]],
      //email: [" ", [Validators.required, Validators.email]],
      phone: [" ", [Validators.required, Validators.minLength(10)]],
      interests: [" ", [Validators.required]],
      street: [" ", [Validators.required]],
      city: [" ", [Validators.required]],
      state: [" ", [Validators.required]],
      zip: [" ", [Validators.required]],
      disabled:[false]
    })

    this.fullname = this.profileForm.controls['firstName'].value + ' '+ this.profileForm.controls['lastName'].value
    this.emailid = this.profileForm.controls['email'].value
  }


  public onEdit(){
    this.isEditable = true;
    this.isFormActive = true;
    
  }
  public onCancel(){
    this.isEditable = true;
    this.isFormActive = false;
    
  }

  public onUpdate(){
    
    this.formfirstname = this.profileForm.controls['firstName'].value;
    this.formlastname = this.profileForm.controls['lastName'].value;
    this.formphone = this.profileForm.controls['phone'].value;
    this.formstreet = this.profileForm.controls['street'].value;
    this.formcity = this.profileForm.controls['city'].value;
    this.formstate = this.profileForm.controls['state'].value;
    this.formzip = this.profileForm.controls['zip'].value;

    this.updatedUser.firstname = this.formfirstname;
    this.updatedUser.lastname = this.formlastname;
    this.updatedUser.phone = this.formphone;
    this.updatedUser.email = this.emailid;
    this.updatedUser.street = this.formstreet;
    this.updatedUser.city = this.formcity;
    this.updatedUser.state = this.formstate;
    this.updatedUser.zip = this.formzip;

    this.fullname = this.formfirstname + ' '+ this.formlastname
    this.isFormActive = false;
    

    this.http.post<any>('http://localhost:3600/users/update-user', this.updatedUser).subscribe(data => {
        console.log("data");
    })

    this.initializeUserData();
  }

}

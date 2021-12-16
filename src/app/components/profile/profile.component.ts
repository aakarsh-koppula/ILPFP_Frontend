import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public isEditable: boolean;
  public userObj: any;
  public fullname: string;
  public emailid: string;
  constructor(private fb: FormBuilder) {
    this.isEditable = false;
    this.fullname = "";
    this.emailid = "";
    this.profileForm = {} as FormGroup;
    this.userObj = {
      firstname : "King",
      lastname : "kong",
      email : "king@SIsland.com",
      phone: "9999999999",
      interests: "tiny people, fighting monsters",
      street: "Unknown",
      city: "none",
      state: "none",
      zip: "00000"
    }
   }

  ngOnInit(): void {
    this.initReactiveForm();
  }

  public initReactiveForm(){
    this.profileForm = this.fb.group({
      firstName:['King',[Validators.required]],
      lastName:['Kong',[Validators.required]],
      email: ['king@SIsland.com', [Validators.required, Validators.email]],
      phone: ['9999999999', [Validators.required, Validators.minLength(10)]],
      interests: ['tiny people, fighting monsters', [Validators.required]],
      street: ['Unknown', [Validators.required]],
      city: ['Unknown', [Validators.required]],
      state: ['Unknown', [Validators.required]],
      zip: ['00000', [Validators.required]],
      disabled:[false]
    })

    this.fullname = this.profileForm.controls['firstName'].value + ' '+ this.profileForm.controls['lastName'].value
    this.emailid = this.profileForm.controls['email'].value
  }


  public onEdit(){
    this.isEditable = true;
    this.profileForm.controls['disabled'].setValue(true);
  }

  public onUpdate(){
    this.fullname = this.profileForm.controls['firstName'].value + ' '+ this.profileForm.controls['lastName'].value
    this.emailid = this.profileForm.controls['email'].value
    this.profileForm.controls['disabled'].setValue(false);
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISignInInterface} from "../interface/sign-in.interface";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.min(3),
        Validators.max(20),
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.min(8),
      ]),
      cpassword: new FormControl(null, [
        Validators.required,
        Validators.min(8),
      ])
    })
  }


  public submit(): void {

    const formSubmit: ISignInInterface = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
    }

    console.log(formSubmit);

  }
}

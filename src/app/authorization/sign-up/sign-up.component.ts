import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ISignUpInterface} from "../interface/sign-up.interface";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.min(3),
        Validators.max(20)
      ]),
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

    const formSubmit: ISignUpInterface = {
      title: this.form.controls['title'].value,
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value,
      cpassword: this.form.controls['cpassword'].value,
    }

    console.log(formSubmit);

  }

}

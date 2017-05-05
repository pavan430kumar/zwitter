import { getTestBed } from '@angular/core/testing';
import { FirebaseService } from './../firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from "angularfire2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = { code: '', message: '' };
  loginForm: FormGroup;

  constructor(private af: AngularFire, private router: Router, private fb: FormBuilder, private fireService: FirebaseService) {
    this.createLoginForm();
    console.log(this.error)
  }

  ngOnInit() {
  }



  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    let form = this.loginForm.value;
    console.log(form.email, form.password);
    this.fireService.Userlogin(form.email, form.password);
    this.anyErrors();
  }

  anyErrors() {
    this.fireService.errorRecived.subscribe(err => {
      switch (err.code) {
        case "auth/user-not-found":
          console.log("user not found");
          this.error.message = "User not found";
          break;

        case "auth/invalid-email":
          console.log("Wrong formatted email");
          this.error.message = "The email address is badly formatted";
          break;

        case "auth/wrong-password":
          console.log("wrong password");
          this.error.message = "Password is invalid";
          break;

        default:
          break;
      }
    });
  }
}

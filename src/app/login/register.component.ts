import { FirebaseService } from './../firebase.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthMethods } from 'angularfire2';
import { AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';
import { AngularFire } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  error = {code:'', message:''};

  constructor(private af: AngularFire, private router: Router, private fb: FormBuilder, private fireService: FirebaseService) {
    this.registerForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  signUp() {
    let form = this.registerForm.value;
    console.log(form);
    this.fireService.UserEmailSignUp(form.email, form.password);
    this.anyErrors();
  }

  anyErrors(){
    this.fireService.errorRecived.subscribe(err => {
      switch (err.code) {
        case "auth/email-already-in-use":
          console.log("User already registered");
          this.error.message = "User already exist";
          break;

        case "auth/invalid-email":
          console.log("Wrong formatted email");
          this.error.message = "The email address is badly formatted";
          break;

         case "auth/weak-password":
          console.log("Weak password");
          this.error.message = "Password should be at least 6 characters";
          break;

        default:
          break;
      }
      console.log(err);
    })
  }

}

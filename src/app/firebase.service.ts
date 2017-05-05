import { Injectable, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseAuthState, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class FirebaseService {

  localUser: FirebaseAuthState;
  public errorRecived = new EventEmitter<any>();

  constructor(private af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if (auth) {
        this.localUser = auth;
        router.navigate(['']);
      }
      else {
        router.navigate(['login']);
      }
    });
  }

  CurrentUser() {
    return this.localUser != null ? this.localUser.auth.email : null;
  }

  Userlogout() {
    this.af.auth.logout();
    console.log(this.af.auth);
    this.router.navigate(['/login'])
  }

  Userlogin(email, password) {
    this.af.auth.login({
      email: email,
      password: password
    },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }
    ).catch(error => {
      this.errorRecived.emit(error);
    });
  }

  UserEmailSignUp(email, password) {
    this.af.auth.createUser({
      email: email,
      password: password
    }).catch(
      error => {
        this.errorRecived.emit(error);
      }
      );
  }
}

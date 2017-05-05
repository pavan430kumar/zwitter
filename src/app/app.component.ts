import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private isLoggedIn: Boolean;
  private user_email: String;

  constructor(public af : AngularFire, private router: Router) {
    // af.auth.subscribe(
    //   (auth) => {
    //     if(auth == null){
    //       console.log("Logged out");
    //       this.isLoggedIn = false;
    //       this.user_email = '';
    //       this.router.navigate(['login']);
    //     }
    //     else {
    //       this.isLoggedIn = true;
    //       this.user_email = auth.auth.email;
    //       console.log("Logged in");
    //       console.log(auth);
    //       this.router.navigate(['']);
    //     }
    //   }
    // );
    
    
  }
}

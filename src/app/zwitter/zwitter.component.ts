import { FirebaseService } from './../firebase.service';
import { Zweet } from './zweet';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable, FirebaseAuthState } from 'angularfire2';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zwitter',
  templateUrl: './zwitter.component.html',
  styleUrls: ['./zwitter.component.css']
})
export class ZwitterComponent implements OnInit {

  // zweets : FirebaseListObservable<Zweet[]>;
  zweets: FirebaseListObservable<any[]>;
  localUser: FirebaseAuthState;

  constructor(private fireService: FirebaseService, private af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => {
      if (auth) {
        this.localUser = auth;
        console.log(this.localUser);
        console.log
        router.navigate(['']);
      }
      else {
        router.navigate(['login']);
      }
    });
    this.zweets = af.database.list('/');
    this.getCurrentUser();
  }

  getCurrentUser(){
    return this.fireService.CurrentUser();
  }

  ngOnInit() {
  }

  logout() {
    this.fireService.Userlogout();
  }

  add(field) {
    this.zweets.push(new Zweet(
      field.value, this.localUser.auth.email
    ));

    field.value = '';
  }

  remove($key: string) {
    this.zweets.remove($key);
  }

  like($key: string, count: number) {
    this.zweets.update($key, { likes: count + 1 });
  }
}

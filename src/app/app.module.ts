import { MapsConfig } from './app.router';
import { RouterModule } from '@angular/router';
import { FirebaseService } from './firebase.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing } from "app/app.router";
import {AngularFireModule} from 'angularfire2';
import { LoginComponent } from './login/login.component';
import { ZwitterComponent } from './zwitter/zwitter.component';
import { HeaderComponent } from './header.component';
import { RegisterComponent } from './login/register.component';
import { AboutUsComponent } from './about-us/about-us.component'


export const firebaseConfig = {
    apiKey: "AIzaSyDU-gSbfKW1P561tKuY_nsCronuWFy2s1M",
    authDomain: "zwitter-102cb.firebaseapp.com",
    databaseURL: "https://zwitter-102cb.firebaseio.com",
    projectId: "zwitter-102cb",
    storageBucket: "zwitter-102cb.appspot.com",
    messagingSenderId: "183301078305"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZwitterComponent,
    HeaderComponent,
    RegisterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    Routing,
    AngularFireModule.initializeApp(firebaseConfig),
    MapsConfig
    //AgmCoreModule.forRoot({apiKey:'AIzaSyDU-gSbfKW1P561tKuY_nsCronuWFy2s1M'})
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

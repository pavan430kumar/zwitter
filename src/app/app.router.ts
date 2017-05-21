import { AboutUsComponent } from './about-us/about-us.component';
import { RegisterComponent } from './login/register.component';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from "app/app.component";
import { ZwitterComponent } from "app/zwitter/zwitter.component";
import { LoginComponent } from "app/login/login.component";
import {AgmCoreModule} from 'angular2-google-maps/core';

const APP_ROUTES : Routes = [
    {path:'',component:ZwitterComponent},
    {path:'zwitter',component:ZwitterComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent},
    {path:'aboutus', component:AboutUsComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);


//maps api module
export const MapsConfig = AgmCoreModule.forRoot({apiKey:'AIzaSyDU-gSbfKW1P561tKuY_nsCronuWFy2s1M'});
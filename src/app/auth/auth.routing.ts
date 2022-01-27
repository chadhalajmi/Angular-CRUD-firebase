import { SignupComponent } from './signup/signup.component';
import {Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
const appRoutes: Routes = [
  {
    path:'auth',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  }


];
export default appRoutes ;

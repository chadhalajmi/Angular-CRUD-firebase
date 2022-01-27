import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "../app-routing.module";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import appRoutes from './auth.routing';
@NgModule({
  declarations: [SigninComponent,SignupComponent],
  exports: [SigninComponent,SignupComponent],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
})
export class authModule{}

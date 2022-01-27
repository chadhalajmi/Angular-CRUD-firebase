import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { environment } from "src/environments/environment";
import { AppRoutingModule } from "../app-routing.module";
import { BookFormComponent } from "./book-form/book-form.component";
import { BookListComponent } from "./book-list/book-list.component";
import appRoutes from "./book.routing";
import { SingleBookComponent } from "./single-book/single-book.component";
@NgModule({
  declarations: [BookFormComponent,BookListComponent,SingleBookComponent],
  exports: [BookFormComponent,BookListComponent,SingleBookComponent],
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
export class bookModule{}

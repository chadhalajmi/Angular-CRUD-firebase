import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/core/guards/auth-guard';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BookFormComponent } from './Book/book-form/book-form.component';
import { BookListComponent } from './Book/book-list/book-list.component';
import { SingleBookComponent } from './Book/single-book/single-book.component';

// const routes: Routes = [
//   { path: 'auth/signup', component: SignupComponent },
//   { path: 'auth/signin', component: SigninComponent },
//   { path: 'books', canActivate: [AuthGuardService], component: BookListComponent },
//   { path: 'books/new', canActivate: [AuthGuardService], component: BookFormComponent },
//   { path: 'books/view/:id', canActivate: [AuthGuardService], component: SingleBookComponent },
//   { path: '', redirectTo: 'books', pathMatch: 'full' },
//   { path: '**', redirectTo: 'books' }
// ];
const routes:Routes=[
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

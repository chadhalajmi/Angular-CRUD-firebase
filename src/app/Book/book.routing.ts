import { AuthGuardService } from '../../core/guards/auth-guard';
import { Routes } from "@angular/router";
import { AppComponent } from '../app.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './single-book/single-book.component';

const appRoutes: Routes = [
  {
        path: 'books/new',
        component: BookFormComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'book-list',
        component: BookListComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: 'books/view/:id',
        component: SingleBookComponent,
        canActivate: [AuthGuardService],
      }
];
export default appRoutes ;

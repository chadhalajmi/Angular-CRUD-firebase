import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import { Book } from 'src/core/entities/Book.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  booksSubject = new Subject<Book[]>();
  constructor() {
    this.getBooks();
}

  emitBooks() {
    this.booksSubject.next(this.books);
  }
  saveBooks(){
    //ref c'est la node auquelle va etre enregistrĂ©
    firebase.database().ref('/books').set(this.books);
  }
  getBooks() {
    //on si on veut recuperer plusieurs fois
    firebase.database().ref('/books')
      .on('value', (data) => {
          this.books = data.val() ? data.val() : [];
          this.emitBooks();
        }
      );
  }

  getSingleBook(id: number) {
    //once si on veut recuperer une fois
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/books/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error: any) => {
            reject(error);
          }
        );
      }
    );
  }
  createNewBook(newBook: Book) {
    this.books.push(newBook);
    this.saveBooks();
    this.emitBooks();
  }

  removeBook(book: Book) {
    if(book.photo) {
      const storageRef = firebase.storage().refFromURL(book.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
          console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const bookIndexToRemove = this.books.findIndex(
      (k)=> {
        if(k === book) {
          return true;
        }else{
          return false;
              }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
  }
  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargementâ€¦');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
}
}

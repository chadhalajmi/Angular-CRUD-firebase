import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth) { }
  createNewUser(email: string, password: string) {
    return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(res => {
      resolve(res);
      },
      err => reject(err));
      });
}
signInUser(email: string, password: string) {
  return new Promise<any>((resolve, reject) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
    resolve(res);
    },
    err => reject(err));
    });
}
signOutUser() {
  return new Promise<any>(async (resolve, reject) => {
    if (await this.fireAuth.currentUser) {
      firebase.auth().signOut()
    .then(res => {
    console.log('Déconnexion');
    resolve(res);
    },
    err => reject(err));
    }
    });
}
}

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }


  async signInWithEmail(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }


  logout() {
    this.afAuth.signOut();
  }


 async createUserWithEmailAndPassword (email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  
}




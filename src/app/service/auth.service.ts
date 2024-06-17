import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminEmail: string = 'admin@admin.com';
  public isAdmin: boolean = false;

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

  
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isAdmin = (email === this.adminEmail);
      this.router.navigate(['/perfila']);
    } catch (error) {
      console.log('Login error: ', error);
    }
  }

}
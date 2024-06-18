import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private adminEmails: string[] = ['admin@admin.com', 'projetounialm@gmail.com'];
  public isAdmin: boolean = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 

    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAdmin = this.adminEmails.includes(user.email?.toLowerCase() || '');
      } else {
        this.isAdmin = false;
      }
    });
  }
  

  logout() {
    this.afAuth.signOut().then(() => {
      this.isAdmin = false;  //Redefinir o status do administrador ao sair
      this.router.navigate(['/home']);
    });
  }

  async signInWithEmail(email: string, password: string) {
    return await this.afAuth.signInWithEmailAndPassword(email, password);
  }//Autenticação do Login
  
 async createUserWithEmailAndPassword (email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password); 
  } //Autenticação do Cadastro

  
  async login(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isAdmin = this.adminEmails.includes(email.toLowerCase());
      console.log('Login bem-sucedido. É admin: ', this.isAdmin); // Debug log
      if (this.isAdmin) {
        this.router.navigate(['/perfila']);
      } else {
        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.log('Login error: ', error);
    }
  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string='';
  password: string='';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.signInWithEmail(this.email, this.password);
      this.router.navigate(['servico']);
    } catch (error) {
      this.router.navigate(['/failure']);
    }
  }

  async loginWithGoogle() {
    try {
      await this.authService.signInWithGoogle();
      this.router.navigate(['/servico']);
    } catch (error) {
      this.router.navigate(['/failure']);
    }
  }
}
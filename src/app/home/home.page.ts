import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string='';
  password: string='';



  constructor(private authService: AuthService, private router: Router) {}
 
  async login() {
    try {
      await this.authService.signInWithEmail(this.email, this.password);
      this.router.navigate(['/servico']);
    } catch (error) {
      this.router.navigate(['/failure']);
    }
  }

}


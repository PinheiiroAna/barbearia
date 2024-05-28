import { Component, OnInit } from '@angular/core';
import { AuthService } from '..services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  name: string = '';
  email: string = '';
  cel: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.cadastro(this.name, this.email, this.cel, this.password)
  }

  googleLogin()
    this.authService.googleCadastro();
}

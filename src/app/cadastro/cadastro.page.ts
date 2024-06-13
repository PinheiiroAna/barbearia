import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  async registrar() {
    try { 
  await this.authService.createUserWithEmailAndPassword(this.email, this.password);
  this.router.navigate(['/home']);
  console.log('Cadastro efetuado com Sucesso!');
  
  } catch(error) {
    console.error('Erro ao Cadastrar:', error);
//Mostra a página de erro quando o cadastro não é efetuado
  }
}
}
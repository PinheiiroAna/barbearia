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
  cadastroEfetuado: boolean = false;
  mensagemErro: string = '';

  constructor(
    private authService: AuthService, 
    private router: Router) {}

  async registrar() {
    if (this.password.length < 8 || this.password.length > 10) {
      this.mensagemErro = 'A senha deve conter entre 8 e 10 caracteres.';
      return;
    }
    try {
      await this.authService.createUserWithEmailAndPassword(this.email, this.password);
      this.cadastroEfetuado = true;  // Exibir mensagem de sucesso
      console.log('Cadastro efetuado com Sucesso!');

      // Opcional: Redirecionar após um breve atraso
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 2000);

    } catch (error) {
      this.router.navigate(['/failure']);
    
        this.cadastroEfetuado = false;  // Certifique-se de que a mensagem de sucesso não apareça
        this.mensagemErro = 'Ocorreu um erro ao efetuar o cadastro. Tente novamente.';
        // Redirecionar para a página de falha, se necessário
        // this.router.navigate(['/failure']);
      // Mostra a página de erro quando o cadastro não é efetuado
    }
  }
}

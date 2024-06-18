import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { BarbeirosService, Barbeiro } from '../service/barbeiro.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfila',
  templateUrl: './perfila.page.html',
  styleUrls: ['./perfila.page.scss'],
})
export class PerfilaPage implements OnInit {

   barbeiros: Barbeiro[] = [];
  barbeiroEdit: Barbeiro | null = null;

  constructor(
    private navCtrl: NavController,
    private barbeirosService: BarbeirosService
  ) { }

  ngOnInit() {
    this.barbeirosService.barbeiros$.subscribe(barbeiros => {
      this.barbeiros = barbeiros;
    });
  }

  adicionarBarbeiro() {
    const novoBarbeiro: Barbeiro = { id: this.barbeiros.length + 1, nome: 'Novo Barbeiro' };
    this.barbeirosService.adicionarBarbeiro(novoBarbeiro);
  }

  editarBarbeiro(barbeiro: Barbeiro) {
    // Define o barbeiro para edição
    this.barbeiroEdit = { ...barbeiro };
  }

  salvarEdicao() {
    if (this.barbeiroEdit) {
      this.barbeirosService.atualizarBarbeiro(this.barbeiroEdit);
      this.barbeiroEdit = null; // Limpa o objeto barbeiroEdit
    }
  }

  excluirBarbeiro(id: number) {
    this.barbeirosService.excluirBarbeiro(id);
  }

  sair() {
    this.navCtrl.navigateBack('/');
  }

}
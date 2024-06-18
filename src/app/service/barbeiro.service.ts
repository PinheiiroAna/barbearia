// barbeiros.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Barbeiro {
  id: number;
  nome: string;
}

@Injectable({
  providedIn: 'root'
})
export class BarbeirosService {

  private barbeiros: Barbeiro[] = [
    { id: 1, nome: 'Barbeiro 1' },
    { id: 2, nome: 'Barbeiro 2' },
    { id: 3, nome: 'Barbeiro 3' }
  ];

  private barbeirosSubject: BehaviorSubject<Barbeiro[]> = new BehaviorSubject<Barbeiro[]>(this.barbeiros);

  barbeiros$ = this.barbeirosSubject.asObservable();

  constructor() { }

  adicionarBarbeiro(barbeiro: Barbeiro) {
    this.barbeiros.push(barbeiro);
    this.barbeirosSubject.next([...this.barbeiros]);
  }

  atualizarBarbeiro(barbeiro: Barbeiro) {
    const index = this.barbeiros.findIndex(b => b.id === barbeiro.id);
    if (index !== -1) {
      this.barbeiros[index].nome = barbeiro.nome;
      this.barbeirosSubject.next([...this.barbeiros]);
    }
  }

  excluirBarbeiro(id: number) {
    const index = this.barbeiros.findIndex(b => b.id === id);
    if (index !== -1) {
      this.barbeiros.splice(index, 1);
      this.barbeirosSubject.next([...this.barbeiros]);
    }
  }
}

import { IonAlertCustomEvent,OverlayEventDetail } from '@ionic/core';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {
setResult($event: IonAlertCustomEvent<OverlayEventDetail<any>>) {
throw new Error('Method not implemented.');
}

  events: any[] = []; // Inicializando a propriedade events como um array vazio
  selectedCalendarId: string = ''; 
  calendars: any[] = [];
alertButtons: any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    const calendarId = 'AIzaSyB89y-AHu7XJW8CTKaiAhpMCHOajnqFdD0'; 

    this.apiService.getEvents(calendarId).subscribe((response) => {
      if (response && response.items) {
        this.events = response.items;
      } else {
        console.log('Nenhum evento encontrado.');
        this.events = [];
      }
    }, (error) => {
      console.error('Erro ao carregar eventos:', error);
    });
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.googleapis.com/calendar/v3/calendars/';
  private accessToken = '380513040182-chfs7elu90uo2nuk0rpmgo5npmgivrp2.apps.googleusercontent.com'; // Coloque o token de acesso aqui

  constructor(private http: HttpClient) { }

  getEvents(calendarId: string): Observable<any> {
    const url = `${this.apiUrl}/${calendarId}/events`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.accessToken}`
    });
    return this.http.get(url, { headers });
  }
}


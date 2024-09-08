import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTicketsService {

  private apiUrl = 'http://localhost/ApiPhp/api/gettickets'; // URL de la API

  constructor(private http: HttpClient) { }

  getTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addTicket(){
    
  }
}

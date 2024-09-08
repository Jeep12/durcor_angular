import { Component, OnInit } from '@angular/core';
import { ServiceTicketsService } from 'src/app/services/service-tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  tickets: any[] = [];
  selectedTicket: any | null = null;

  constructor(private serviceTickets: ServiceTicketsService) { }

  ngOnInit(): void {
    this.serviceTickets.getTickets().subscribe(
      (data: any[]) => {
        this.tickets = data;
      },
      (error) => {
        console.error('Error fetching tickets', error);
      }
    );
  }

  showDetails(ticket: any): void {
    this.selectedTicket = ticket;
  }

  hideDetails(): void {
    this.selectedTicket = null;
  }
}

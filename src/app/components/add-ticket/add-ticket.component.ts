import { Component } from '@angular/core';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent {
  isPanelOpen = false; // Controla el estado del acordeón
  newTicket = {
    date: '',
    customer: '',
    address: '',
    total: 0
  };



  addTicket(): void {
    // Implementar la lógica para agregar la factura
    console.log('Agregar factura:', this.newTicket);
    this.resetForm();
  }

  resetForm(): void {
    this.newTicket = {
      date: '',
      customer: '',
      address: '',
      total: 0
    };
    this.isPanelOpen = false; // Opcional: cerrar el acordeón después de agregar la factura
  }

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
}

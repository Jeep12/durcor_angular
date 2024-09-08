import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  isPanelOpen = false;
  users = [
    { nombre: 'John', apellido: 'Doe', email: 'john.doe@example.com', rol: 'Admin' },
    { nombre: 'Jane', apellido: 'Smith', email: 'jane.smith@example.com', rol: 'User' }
  ];

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  editUser(user: any) {
    // Implementar edición de usuario
  }

  deleteUser(user: any) {
    // Implementar eliminación de usuario
  }
}

// email-scheduler.component.ts
import { Component } from '@angular/core';

interface Email {
  recipient: string;
  subject: string;
  body: string;
  schedule: string;
  status?: string; // Opcional para los correos programados
}

@Component({
  selector: 'app-email-scheduler',
  templateUrl: './email-scheduler.component.html',
  styleUrls: ['./email-scheduler.component.css']
})
export class EmailSchedulerComponent {
  isPanelOpen = false;
  email: Email = {
    recipient: '',
    subject: '',
    body: '',
    schedule: ''
  };
  scheduledEmails: Email[] = [];

  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }

  scheduleEmail() {
    if (this.email.recipient && this.email.subject && this.email.body && this.email.schedule) {
      this.scheduledEmails.push({
        ...this.email,
        status: 'Programado'
      });
      this.email = {
        recipient: '',
        subject: '',
        body: '',
        schedule: ''
      };
    }
  }
}

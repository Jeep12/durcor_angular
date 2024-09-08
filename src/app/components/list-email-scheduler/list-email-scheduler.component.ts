import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-email-scheduler',
  templateUrl: './list-email-scheduler.component.html',
  styleUrls: ['./list-email-scheduler.component.css']
})
export class ListEmailSchedulerComponent implements OnInit {
  month: string = '';
  year: number = 0;
  days: any[] = [];

  private currentMonth: number = new Date().getMonth();
  private currentYear: number = new Date().getFullYear();
  private today: Date = new Date();
  isPanelOpen = false;
  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
  ngOnInit() {
    this.initializeCalendar();
  }

  initializeCalendar() {
    this.updateCalendar(this.currentYear, this.currentMonth);
  }

  previousMonth() {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateCalendar(this.currentYear, this.currentMonth);
  }

  nextMonth() {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateCalendar(this.currentYear, this.currentMonth);
  }

  private updateCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();
    const days: any[] = [];

    this.month = new Intl.DateTimeFormat('default', { month: 'long' }).format(new Date(year, month));
    this.year = year;

    for (let i = 0; i < firstDay; i++) {
      days.push({ date: '', isToday: false });
    }

    for (let i = 1; i <= lastDay; i++) {
      const isToday = this.today.getFullYear() === year &&
                      this.today.getMonth() === month &&
                      this.today.getDate() === i;
      days.push({ date: i, isToday });
    }

    this.days = days;
  }
}

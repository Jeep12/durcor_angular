import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSchedulerComponent } from './email-scheduler.component';

describe('EmailSchedulerComponent', () => {
  let component: EmailSchedulerComponent;
  let fixture: ComponentFixture<EmailSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

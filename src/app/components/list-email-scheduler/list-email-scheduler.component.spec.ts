import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmailSchedulerComponent } from './list-email-scheduler.component';

describe('ListEmailSchedulerComponent', () => {
  let component: ListEmailSchedulerComponent;
  let fixture: ComponentFixture<ListEmailSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmailSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmailSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

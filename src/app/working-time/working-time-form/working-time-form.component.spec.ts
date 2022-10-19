import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTimeFormComponent } from './working-time-form.component';

describe('WorkingTimeFormComponent', () => {
  let component: WorkingTimeFormComponent;
  let fixture: ComponentFixture<WorkingTimeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingTimeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

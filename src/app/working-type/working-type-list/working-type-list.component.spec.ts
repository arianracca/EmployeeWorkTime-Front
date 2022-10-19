import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTypeListComponent } from './working-type-list.component';

describe('WorkingTypeListComponent', () => {
  let component: WorkingTypeListComponent;
  let fixture: ComponentFixture<WorkingTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

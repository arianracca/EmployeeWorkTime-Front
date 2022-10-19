import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingTimeEditorComponent } from './working-time-editor.component';

describe('WorkingTimeEditorComponent', () => {
  let component: WorkingTimeEditorComponent;
  let fixture: ComponentFixture<WorkingTimeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkingTimeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingTimeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

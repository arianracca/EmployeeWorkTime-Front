import { TestBed } from '@angular/core/testing';

import { WorkingTypeService } from './working-type.service';

describe('WorkingTypeService', () => {
  let service: WorkingTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FormfieldcontrolService } from './formfieldcontrols.service';

describe('FormfieldcontrolsService', () => {
  let service: FormfieldcontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormfieldcontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

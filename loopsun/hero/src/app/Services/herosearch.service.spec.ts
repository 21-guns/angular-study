/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HerosearchService } from './herosearch.service';

describe('HerosearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HerosearchService]
    });
  });

  it('should ...', inject([HerosearchService], (service: HerosearchService) => {
    expect(service).toBeTruthy();
  }));
});

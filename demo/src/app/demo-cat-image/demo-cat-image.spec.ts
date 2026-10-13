import { TestBed } from '@angular/core/testing';
import { DemoCatImage } from './demo-cat-image';

describe('DemoCatImage', () => {
  let service: DemoCatImage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoCatImage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PeerClientService } from './peer-client.service';

describe('PeerClientService', () => {
  let service: PeerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { PeerServerService } from './peer-server.service';

describe('PeerServerService', () => {
  let service: PeerServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeerServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

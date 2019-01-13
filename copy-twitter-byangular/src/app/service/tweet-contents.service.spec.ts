import { TestBed } from '@angular/core/testing';

import { TweetContentsService } from './tweet-contents.service';

describe('TweetContentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TweetContentsService = TestBed.get(TweetContentsService);
    expect(service).toBeTruthy();
  });
});

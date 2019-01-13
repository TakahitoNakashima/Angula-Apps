import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TweetContents } from '../tweet-contents';
import { TWEETCONTENTS } from '../mock-data/mock-tweet-contents';

@Injectable({
  providedIn: 'root'
})
export class TweetContentsService {

  constructor() { }

  getTweetContents(): Observable<TweetContents[]> {
    return of(TWEETCONTENTS);
  }

  setTweetContents(newTweetContents: string, newFile: string): void {
    TWEETCONTENTS.push({id: 1, user: '@taka', contents: newTweetContents, file: newFile});
  }
}

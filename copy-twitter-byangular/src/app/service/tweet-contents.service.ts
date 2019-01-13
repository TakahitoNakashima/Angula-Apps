import { Injectable } from '@angular/core';
import { TweetContents } from '../tweet-contents';
import { TWEETCONTENTS } from '../mock-data/mock-tweet-contents';

@Injectable({
  providedIn: 'root'
})
export class TweetContentsService {

  constructor() { }

  getTweetContents(): TweetContents[] {
    return TWEETCONTENTS;
  }
}

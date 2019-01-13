import { Component, OnInit } from '@angular/core';
import { TweetContents } from '../../tweet-contents';
import { TWEETCONTENTS } from '../../mock-data/mock-tweet-contents';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {

  // tweetContents: TweetContents = {
  //   id: 1,
  //   contents: 'Hello Contents'
  // };

  tweetContents = TWEETCONTENTS;

  constructor() { }

  ngOnInit() {
  }

}

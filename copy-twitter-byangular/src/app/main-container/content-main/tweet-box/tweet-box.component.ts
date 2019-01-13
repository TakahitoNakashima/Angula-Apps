import { Component, OnInit } from '@angular/core';
import { TweetContents } from '../../../tweet-contents';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  tweetContents: TweetContents = {
    id: 1,
    contents: 'hello'
  };

  constructor() { }

  ngOnInit() {
  }

}

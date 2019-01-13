import { Component, OnInit } from '@angular/core';
import { TweetContents } from '../../../tweet-contents';

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.css']
})
export class StreamContainerComponent implements OnInit {

  tweetContents: TweetContents = {
    id: 1,
    contents: 'Hello Contents'
  };

  constructor() { }

  ngOnInit() {
  }

}

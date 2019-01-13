import { Component, OnInit } from '@angular/core';
import { TweetContents } from '../../tweet-contents';
import { TweetContentsService } from '../../service/tweet-contents.service';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {

  newTweetContents = '';

  tweetContents: TweetContents[];

  constructor(private tweetContentsService: TweetContentsService) { }

  ngOnInit() {
    this.getTweetContents();
  }

  getTweetContents(): void {
    this.tweetContentsService.getTweetContents()
      .subscribe(tweetContents => this.tweetContents = tweetContents);
  }

  setTweetContents(newTweetContents: string, newFile: string): void {
    if (newTweetContents) {
      this.tweetContentsService.setTweetContents(newTweetContents, newFile);
      this.newTweetContents = '';
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { TweetContents } from '../../../tweet-contents';
import { TweetContentsService } from '../../../service/tweet-contents.service';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  model = new TweetContents(1, '@Taka', '' , '');
  reader = new FileReader();
  fileUrl = '';
  submitted = false;

  constructor(private tweetContentsService: TweetContentsService) { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  setTweetContents(): void {
    if (this.model.contents) {
      this.tweetContentsService.setTweetContents(this.model.contents, this.fileUrl);
      this.prepareNewTweet();
    }
  }

  private prepareNewTweet() {
    this.model = new TweetContents(1, '@taka', '', '');
  }

  onChangeInput(evt) {
    const file = evt.target.files[0];
    this.reader.onload = ((e) => {
      this.fileUrl = e.target['result'];
    });
    this.reader.readAsDataURL(file);
  }

}

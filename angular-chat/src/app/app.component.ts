import { Component } from '@angular/core';

import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '竹井　堅持', message: 'お疲れ様です！' },
  { name: '竹井　堅持', message: 'この間の件ですが、どうなりましたか？' },
  { name: '五十川　洋平', message: 'お疲れ様です！' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}

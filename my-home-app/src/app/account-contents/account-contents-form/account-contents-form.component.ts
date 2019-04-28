import { Component, OnInit, Input } from '@angular/core';

import { AccountContent } from '../../account-content';
import { ACCOUNTCONTENTS } from '../../account-contents';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-account-contents-form',
  templateUrl: './account-contents-form.component.html',
  styleUrls: ['./account-contents-form.component.less']
})
export class AccountContentsFormComponent implements OnInit {

  constructor(private accountService: AccountService) { }
  @Input() accountContent: AccountContent;

  submitted = false;

  onSubmit() { this.submitted = true; }

  getDateStr(dt: Date): string {
    let str = dt.getFullYear().toString();
    str = str + '-' + this.zeroPadding((dt.getMonth() + 1), 2);
        str = str + '-' + this.zeroPadding(dt.getDate(), 2);
        return str;
  }

  zeroPadding(n: number, d: number) {
    return (Array(d).join('0') + n).slice(-d);
  }

  // TODO: Remove this when we're done
  // get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

import { ACCOUNTCONTENTS } from '../../account-contents';

@Component({
  selector: 'app-account-content-detail',
  templateUrl: './account-content-detail.component.html',
  styleUrls: ['./account-content-detail.component.less']
})
export class AccountContentDetailComponent implements OnInit {

  constructor() { }

  accountContents = ACCOUNTCONTENTS;

  ngOnInit() {
  }

}

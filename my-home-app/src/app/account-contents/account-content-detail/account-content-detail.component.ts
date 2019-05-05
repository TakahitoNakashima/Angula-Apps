import { Component, OnInit, Input } from '@angular/core';

import { AccountContent } from '../../account-content';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-account-content-detail',
  templateUrl: './account-content-detail.component.html',
  styleUrls: ['./account-content-detail.component.less']
})
export class AccountContentDetailComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  accountContents: AccountContent[];

  getAccountContents(): void {
    this.accountService.getAccountContents()
      .subscribe(accountContents => this.accountContents = accountContents);
  }

  ngOnInit() {
    this.getAccountContents();
  }

}

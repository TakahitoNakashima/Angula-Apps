import { Component, OnInit } from '@angular/core';

import { AccountContent } from '../account-content';

@Component({
  selector: 'app-account-contents-form',
  templateUrl: './account-contents-form.component.html',
  styleUrls: ['./account-contents-form.component.less']
})
export class AccountContentsFormComponent implements OnInit {

  model = new AccountContent(new Date(), 1000, '唐揚げ弁当');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
  }

}

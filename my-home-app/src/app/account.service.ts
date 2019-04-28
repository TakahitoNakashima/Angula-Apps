import { Injectable } from '@angular/core';

import { AccountContent } from './account-content';
import { ACCOUNTCONTENTS } from './account-contents';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  getAccountContents(): AccountContent[] {
    return ACCOUNTCONTENTS;
  }
}

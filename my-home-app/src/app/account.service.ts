import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { AccountContent } from './account-content';
import { ACCOUNTCONTENTS } from './account-contents';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private accountContentsUrl = 'api/accountContents';

  getAccountContents(): Observable<AccountContent[]> {
    return this.http.get<AccountContent[]>(this.accountContentsUrl)
  }
}

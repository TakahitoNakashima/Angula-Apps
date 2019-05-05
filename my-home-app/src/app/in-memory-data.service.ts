import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AccountContent } from './account-content';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const accountContents = [
      { date: '2019-04-09', amount: 1250, title: '和幸' },
      { date: '2019-04-09', amount: 800, title: '唐揚げ弁当' },
      { date: '2019-04-08', amount: 1100, title: '担々麺' },
      { date: '2019-04-08', amount: 800, title: '唐揚げ弁当' }
    ];
    return { accountContents };
  }
}

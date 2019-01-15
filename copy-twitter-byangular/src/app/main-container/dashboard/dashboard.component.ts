import { Component, OnInit } from '@angular/core';
import { UserInfo } from '../../user-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  model = new UserInfo(1, '@Taka', '', 'よろしくおねがいします！', Date.now(), 1, 1);

  constructor() { }

  ngOnInit() {
  }

}

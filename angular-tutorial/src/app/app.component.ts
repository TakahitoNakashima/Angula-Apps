import { Component } from '@angular/core';

export class Member {
  id: number;
  name: string;
}

const MEMBERS: Member[] = [
  { id: 11, name : '竹山　岳'},
  { id: 12, name : '西山　景'},
  { id: 13, name : '富沢　堅固'},
  { id: 14, name : '田中　泰治'},
  { id: 15, name : '富田　恵子'},
  { id: 16, name : '砂糖　隆'},
  { id: 17, name : '小林　純一'},
  { id: 18, name : '真子　工事'},
  { id: 19, name : '田中　雄大'},
  { id: 20, name : '鈴木　隆'},
  { id: 21, name : '小池　あこ'},
]

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>社員一覧</h2>
        <ul class="members">
          <li *ngFor="let member of members" (click)="onSelect(member)" [class.selected]="member === selectedMember">
            <span class="badge">{{member.id}}</span> {{member.name}}
          </li>
        </ul>
        <div *ngIf="selectedMember">
          <h2>{{selectedMember.name}}</h2>
          <div><label>id: </label>{{selectedMember.id}}</div>
          <div>
            <label>name: </label>
            <input type="text" [(ngModel)]="selectedMember.name" placeholder="名前">
          </div>
        </div>
        `,
    styles : [ `
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .members {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .members li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .members li.selected:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .members .text {
        position: relative;
        top: -3px;
      }
      .members .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `
    ]
})
export class AppComponent {
　title = '自社社員名簿';
  members = MEMBERS;
  selectedMember: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}

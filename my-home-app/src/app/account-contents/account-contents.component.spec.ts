import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountContentsComponent } from './account-contents.component';

describe('AccountContentsComponent', () => {
  let component: AccountContentsComponent;
  let fixture: ComponentFixture<AccountContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

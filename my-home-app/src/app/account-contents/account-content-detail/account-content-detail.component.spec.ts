import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountContentDetailComponent } from './account-content-detail.component';

describe('AccountContentDetailComponent', () => {
  let component: AccountContentDetailComponent;
  let fixture: ComponentFixture<AccountContentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountContentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

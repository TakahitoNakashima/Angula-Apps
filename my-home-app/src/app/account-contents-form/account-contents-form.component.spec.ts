import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountContentsFormComponent } from './account-contents-form.component';

describe('AccountContentsFormComponent', () => {
  let component: AccountContentsFormComponent;
  let fixture: ComponentFixture<AccountContentsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountContentsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountContentsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

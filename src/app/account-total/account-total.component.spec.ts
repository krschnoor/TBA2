import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTotalComponent } from './account-total.component';

describe('AccountTotalComponent', () => {
  let component: AccountTotalComponent;
  let fixture: ComponentFixture<AccountTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

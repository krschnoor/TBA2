import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjeComponent } from './aje.component';

describe('AjeComponent', () => {
  let component: AjeComponent;
  let fixture: ComponentFixture<AjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

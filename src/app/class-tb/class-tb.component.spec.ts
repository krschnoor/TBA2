import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTBComponent } from './class-tb.component';

describe('ClassTBComponent', () => {
  let component: ClassTBComponent;
  let fixture: ComponentFixture<ClassTBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassTBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

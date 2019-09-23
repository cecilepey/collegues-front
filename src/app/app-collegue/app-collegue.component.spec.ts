import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCollegueComponent } from './app-collegue.component';

describe('AppCollegueComponent', () => {
  let component: AppCollegueComponent;
  let fixture: ComponentFixture<AppCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

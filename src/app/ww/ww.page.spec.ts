import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WwPage } from './ww.page';

describe('WwPage', () => {
  let component: WwPage;
  let fixture: ComponentFixture<WwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

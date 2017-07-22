/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HerosearchComponent } from './herosearch.component';

describe('HerosearchComponent', () => {
  let component: HerosearchComponent;
  let fixture: ComponentFixture<HerosearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaList2Component } from './aerolinea-list2.component';

describe('AerolineaList2Component', () => {
  let component: AerolineaList2Component;
  let fixture: ComponentFixture<AerolineaList2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaList2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

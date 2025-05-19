/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AerolineaList1Component } from './aerolinea-list1.component';

describe('AerolineaList1Component', () => {
  let component: AerolineaList1Component;
  let fixture: ComponentFixture<AerolineaList1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerolineaList1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AerolineaList1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

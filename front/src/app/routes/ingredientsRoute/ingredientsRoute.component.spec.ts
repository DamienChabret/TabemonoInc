/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngredientsRouteComponent } from './ingredientsRoute.component';

describe('IngredientsRouteComponent', () => {
  let component: IngredientsRouteComponent;
  let fixture: ComponentFixture<IngredientsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

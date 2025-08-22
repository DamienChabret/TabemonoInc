/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RecipesRouteComponent } from './recipesRoute.component';

describe('RecipesRouteComponent', () => {
  let component: RecipesRouteComponent;
  let fixture: ComponentFixture<RecipesRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

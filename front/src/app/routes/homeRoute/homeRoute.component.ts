import { Component, OnInit } from '@angular/core';
import { RecipesComponent } from '@components/recipes/Recipes/Recipes.component';

@Component({
  selector: 'app-homeRoute',
  templateUrl: './homeRoute.component.html',
  styleUrls: ['./homeRoute.component.css'],
  imports: [ RecipesComponent ],
  standalone: true
})
export class HomeRouteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

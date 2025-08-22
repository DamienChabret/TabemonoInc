import { Injectable } from "@angular/core";
import { Recipe } from "@models/Recipe";

@Injectable()
export class RecipesService {
   public getAll() : Recipe[] {
      return [];
   }
   
   public getAllByUser() : Recipe[] {
      return [];
   }
}
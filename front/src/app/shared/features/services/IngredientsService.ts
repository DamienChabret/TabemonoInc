import { Injectable } from "@angular/core";
import { Ingredient } from "@models/Ingredient";

@Injectable()
export class IngredientsService {
   public getAll() : Ingredient[] {
      return [];
   }

   public getAllByUser() : Ingredient[] {
      return [];
   }
}
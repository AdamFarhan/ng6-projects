import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg"),
    new Recipe("Another Test Recipe", "This is simply a test", "https://www.tasteofhome.com/wp-content/uploads/2017/10/Healthier-than-Egg-Rolls_EXPS_SDON17_55166_C06_23_6b-696x696.jpg")
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  getRecipes() {
    //we use .slice to return a copy of our array
    //so we don't accidentally break something :)
    return this.recipes.slice();
  }
}

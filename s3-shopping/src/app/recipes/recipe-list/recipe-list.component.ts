import { Component, OnInit } from '@angular/core';

//import the Recipe Object from our typescript file
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  //create an array of Recipe objects
  //(name, description, imagePath)
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://api.norecipes.com/wp-content/uploads/2018/08/teriyaki-chicken-recipe_007.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }
}

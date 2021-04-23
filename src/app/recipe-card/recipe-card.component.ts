import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
})
export class RecipeCardComponent implements OnInit {
  recipes: any = [];
  constructor(private recipeData: RecipeService) {}

  ngOnInit(): void {
    this.recipeData.getRecipes();
    this.recipes = this.recipeData.recipes;
    console.log(this.recipes);
  }
}

import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css'],
})
export class SavedRecipesComponent implements OnInit {
  userRecipes: any = [];
  constructor(private recipeData: RecipeService) {}

  ngOnInit(): void {
    this.userRecipes = this.recipeData.getSavedUserRecipes();
  }

  deleteUserRecipe(userRecipe) {
    this.recipeData.deleteUserRecipes(userRecipe);
    this.ngOnInit();
  }
}

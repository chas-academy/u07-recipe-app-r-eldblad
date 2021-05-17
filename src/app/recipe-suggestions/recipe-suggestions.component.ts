import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
@Component({
  selector: 'app-recipe-suggestions',
  templateUrl: './recipe-suggestions.component.html',
  styleUrls: ['./recipe-suggestions.component.css'],
})
export class RecipeSuggestionsComponent implements OnInit {
  recipes: any = [];
  allRecipes: any = [];
  constructor(private recipeData: RecipeService) {}
  ngOnInit(): void {
    this.recipes = this.recipeData.getSavedRecipes();
    this.allRecipes = [...this.recipeData.getSavedRecipes()];
    //console.log('Saved recipes');
    //console.log(this.allRecipes);
  }
  getRecipes() {
    if (this.recipes.length === 0) {
      this.recipeData.getRecipes().subscribe((data) => {
        this.recipeData.saveRecipes(data);
        this.ngOnInit();
      });
    }
  }
  saveUserRecipe(userRecipe) {
    //console.log(userRecipe);
    this.recipeData.saveUserRecipes(userRecipe);
  }
  resetFilters() {
    this.recipes.recipes = [...this.allRecipes.recipes];
    console.log(this.allRecipes.recipes);
    console.log(this.recipes.recipes);
  }
  filterRecipes(x) {
    // filtrera this.recipes så att enbart recept med this.recipes.dishTypes (array) inkluderar x
    this.allRecipes.recipes = [...this.recipes.recipes];
    console.log(this.allRecipes.recipes);
    this.recipes.recipes = [
      ...this.recipes.recipes.filter((recipe) => recipe.dishTypes.includes(x)),
    ];
    //console.log(this.recipes.recipes);
  }
}

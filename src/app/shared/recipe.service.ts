import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: any = [];
  userRecipes: any = [];
  recipeUrl: string = `https://api.spoonacular.com/recipes/random?number=100&apiKey=b492684e487f4ca9a1e8a11b288e4239`;
  constructor(private http: HttpClient) {}
  getRecipes(): Observable<object> {
    return this.http.get<any[]>(this.recipeUrl);
  }
  saveRecipes(recipes) {
    if (!this.recipes.length) {
      this.recipes = recipes;
    }
  }
  getSavedRecipes(): Array<object> {
    return this.recipes;
  }

  saveUserRecipes(userRecipe) {
    // spara ner userRecipe i en specifik array där anävndaren EGENSPARADE recept finns
    this.userRecipes.push(userRecipe);
    console.log(this.userRecipes);
  }
  getSavedUserRecipes() {
    return this.userRecipes;
  }
  deleteUserRecipes(userRecipe) {
    // scanna this.userRecipes efter ett id som matchar userRecipe.id
    // ta bort detta recept
    // uppdatera sparade recept
    const tempUserRecipes = this.userRecipes.filter(
      (recipe) => !(recipe.id === userRecipe.id)
    );
    this.userRecipes = tempUserRecipes;
  }
}

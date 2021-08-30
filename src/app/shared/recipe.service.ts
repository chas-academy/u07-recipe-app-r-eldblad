import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: any = [];
  userRecipes: any = [];
  recipeId: number;
  recipeUrl: string = `https://api.spoonacular.com/recipes/random?number=100&apiKey=${process.env.API_KEY}`;

  constructor(private http: HttpClient) {}

  getRecipe(id: number): Observable<object> {
    return this.http.get<any[]>(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`
    );
  }

  getRecipes(): Observable<object> {
    return this.http.get<any[]>(this.recipeUrl);
  }

  saveRecipes(data) {
    if (!this.recipes.length) {
      this.recipes = data.recipes;
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
    return this.userRecipes ? this.userRecipes : [];
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

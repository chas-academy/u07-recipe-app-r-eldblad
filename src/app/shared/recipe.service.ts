import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipes: any = [];
  constructor(private http: HttpClient) {}
  apiKey: string = 'b492684e487f4ca9a1e8a11b288e4239';
  recipeUrl: string = `https://api.spoonacular.com/recipes/random?number=20&apiKey=${this.apiKey}`;

  getRecipesFromApi(): Observable<any[]> {
    return this.http.get<any[]>(this.recipeUrl);
  }
  saveRecipes() {
    this.getRecipesFromApi().subscribe((recipes) => {
      this.recipes = Array.of(recipes);
    });
  }
  getRecipes(): Array<object> {
    if (this.recipes) {
      this.getRecipesFromApi();
    }
    return this.recipes;
  }
}

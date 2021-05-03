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
  apiKey: string;
  constructor(private http: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  recipeUrl: string = `https://api.spoonacular.com/recipes/random?number=20&apiKey=${this.apiKey}`;

  getRecipesFromApi(): Observable<any[]> {
    return this.http.get<any[]>(this.recipeUrl);
  }
  getRecipes(): Observable<object> {
    return this.getRecipesFromApi().pipe(shareReplay());
  }
}

/* getRecipes(): Array<object> {
  if (!this.recipes.length) {
    this.getRecipesFromApi().subscribe((recipes) => {
      this.recipes = Array.of(recipes);
    });
  }
  return this.recipes;
} */

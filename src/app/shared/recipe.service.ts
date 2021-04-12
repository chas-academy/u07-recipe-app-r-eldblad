import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}

  recipeUrl: string = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;

  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(this.recipeUrl);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  renderAllRecipes = environment.GET_ALL_RECIPE_LISTS;
  createListUrl = environment.CREATE_NEW_RECIPE_LIST;
  recipeLists$: Observable<any> | undefined;

  constructor(private http: HttpClient) {}

  getRecipeLists(): Observable<any> {
    return this.http.get<any>(this.renderAllRecipes);
  }

  createList(title: string): Observable<any> {
    return this.http.post<any>(this.createListUrl, { title: title });
  }
}

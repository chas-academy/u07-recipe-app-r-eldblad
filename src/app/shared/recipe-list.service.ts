import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  getAllRecipeLists = environment.GET_ALL_RECIPE_LISTS;
  fetchRecipeList = environment.GET_RECIPE_LIST;
  createListUrl = environment.CREATE_RECIPE_LIST;
  deleteListUrl = environment.DELETE_RECIPE_LIST;
  updateListUrl = environment.UPDATE_RECIPE_LIST;

  constructor(private http: HttpClient) {}

  getRecipeLists(): Observable<any> {
    return this.http.get(this.getAllRecipeLists);
  }

  getRecipeList(id: number): Observable<any> {
    return this.http.get(this.fetchRecipeList + '/' + id);
  }

  createList(title: string): Observable<any> {
    return this.http.post<any>(this.createListUrl, { title: title });
  }

  updateList(title: string, recipe_ids: string, id: number): Observable<any> {
    return this.http.put<any>(this.updateListUrl + '/' + id, {
      title: title,
      recipe_ids: recipe_ids,
    });
  }

  deleteList(id: number): Observable<any> {
    return this.http.delete<any>(this.deleteListUrl + '/' + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  renderAllRecipeLists = environment.GET_ALL_RECIPE_LISTS;
  createListUrl = environment.CREATE_NEW_RECIPE_LIST;

  constructor(private http: HttpClient) {}

  getRecipeLists(): Observable<any> {
    return this.http.get(this.renderAllRecipeLists);
  }

  createList(title: string): Observable<any> {
    return this.http.post<any>(this.createListUrl, { title: title });
  }
}

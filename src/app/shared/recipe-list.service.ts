import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  constructor(private http: HttpClient) {}

  getRecipeLists() {}

  /* storeRecipeList() {
      return this.http.post()
  } */
}

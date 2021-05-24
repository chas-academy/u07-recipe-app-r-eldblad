import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecipeSuggestionsComponent } from './recipe-suggestions/recipe-suggestions.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: RecipeSuggestionsComponent },
  { path: 'suggestions', component: RecipeSuggestionsComponent },
  { path: 'recipes', component: SavedRecipesComponent },
  { path: 'recipe/:id', component: RecipeInfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

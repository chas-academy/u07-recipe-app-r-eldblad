import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecipeSuggestionsComponent } from './recipe-suggestions/recipe-suggestions.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';

const appRoutes: Routes = [
  { path: '', component: RecipeSuggestionsComponent },
  { path: 'suggestions', component: RecipeSuggestionsComponent },
  { path: 'recipes', component: SavedRecipesComponent },
  { path: 'recipe/:id', component: RecipeInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavedRecipesComponent,
    RecipeSuggestionsComponent,
    RecipeInfoComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

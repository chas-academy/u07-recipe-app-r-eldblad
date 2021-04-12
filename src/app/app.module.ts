import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeSuggestionsComponent } from './recipe-suggestions/recipe-suggestions.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';

const appRoutes: Routes = [
  { path: '', component: RecipeSuggestionsComponent },
  { path: 'suggestions', component: RecipeSuggestionsComponent },
  { path: 'recipes', component: SavedRecipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeSuggestionsComponent,
    SavedRecipesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

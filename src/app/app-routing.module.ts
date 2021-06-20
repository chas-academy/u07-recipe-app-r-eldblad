import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { RecipeSuggestionsComponent } from './recipe-suggestions/recipe-suggestions.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/suggestions', pathMatch: 'full' },
  { path: 'suggestions', component: RecipeSuggestionsComponent },
  { path: 'recipes', component: SavedRecipesComponent },
  { path: 'recipe/:id', component: RecipeInfoComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

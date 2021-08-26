import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SavedRecipesComponent } from '../components/saved-recipes/saved-recipes.component';
import { RecipeSuggestionsComponent } from '../components/recipe-suggestions/recipe-suggestions.component';
import { RecipeInfoComponent } from '../components/recipe-info/recipe-info.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { UserProfileComponent } from '../auth/user-profile/user-profile.component';
import { RecipeListsComponent } from '../components/recipe-lists/recipe-lists.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/suggestions', pathMatch: 'full' },
  { path: 'suggestions', component: RecipeSuggestionsComponent },
  { path: 'recipes', component: SavedRecipesComponent },
  { path: 'recipe/:id', component: RecipeInfoComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'recipe-lists', component: RecipeListsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

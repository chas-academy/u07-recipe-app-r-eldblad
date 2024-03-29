import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../components/header/header.component';
import { SavedRecipesComponent } from '../components/saved-recipes/saved-recipes.component';
import { RecipeSuggestionsComponent } from '../components/recipe-suggestions/recipe-suggestions.component';
import { RecipeInfoComponent } from '../components/recipe-info/recipe-info.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { UserProfileComponent } from '../auth/user-profile/user-profile.component';

import { AuthInterceptor } from '../auth/auth.interceptor';
import { RecipeListsComponent } from '../components/recipe-lists/recipe-lists.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListDetailComponent } from '../components/recipe-list-detail/recipe-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SavedRecipesComponent,
    RecipeSuggestionsComponent,
    RecipeInfoComponent,
    PageNotFoundComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,
    RecipeListsComponent,
    RecipeListDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

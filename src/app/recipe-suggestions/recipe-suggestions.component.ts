import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../auth/auth-state.service';
import { RecipeListService } from '../shared/recipe-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-suggestions',
  templateUrl: './recipe-suggestions.component.html',
  styleUrls: ['./recipe-suggestions.component.css'],
})
export class RecipeSuggestionsComponent implements OnInit {
  recipes: any = [];
  allRecipes: any = [];
  recipeId: number;
  isSignedIn: boolean;
  allRecipeLists: any = [];
  recipeListIds: any = [];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private recipeListService: RecipeListService,
    private router: Router,
    private auth: AuthStateService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getSavedRecipes();
    this.allRecipes = [...this.recipeService.getSavedRecipes()];
    this.auth.userAuthState.subscribe((val) => {
      this.isSignedIn = val;
    });

    this.subscription = this.recipeListService
      .getRecipeLists()
      .subscribe((data: any) => {
        this.allRecipeLists = data;
        console.log(this.allRecipeLists);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  createRecipeList() {}

  getRecipes() {
    if (this.recipes.length === 0) {
      this.recipeService.getRecipes().subscribe((data) => {
        this.recipeService.saveRecipes(data);
        this.ngOnInit();
      });
    }
  }
  saveUserRecipe(userRecipe) {
    //console.log(userRecipe);
    this.recipeService.saveUserRecipes(userRecipe);
  }
  resetFilters() {
    this.recipes = [...this.allRecipes];
  }
  filterByDishTypes(dishType) {
    // filtrera this.recipes så att enbart recept med this.recipes.dishTypes (array) inkluderar x
    this.resetFilters();
    this.recipes = [
      ...this.recipes.filter((recipe) => recipe.dishTypes.includes(dishType)),
    ];
    //console.log(this.recipes.recipes);
  }

  filterByVegan() {
    this.resetFilters();
    this.recipes = [...this.recipes.filter((recipe) => recipe.vegan)];
  }

  filterByGluten() {
    this.resetFilters();
    this.recipes = [...this.recipes.filter((recipe) => recipe.glutenFree)];
  }

  filterByDairy() {
    this.resetFilters();
    this.recipes = [...this.recipes.filter((recipe) => recipe.dairyFree)];
  }

  onSelect(userRecipe) {
    this.router.navigate(['/recipe', userRecipe]);
  }

  addRecipeListId(id: number) {
    this.recipeListIds.push(id);
    console.log(this.recipeListIds);
  }
}

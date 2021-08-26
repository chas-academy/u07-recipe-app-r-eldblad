import { Component, OnInit, AfterContentInit } from '@angular/core';
import { RecipeService } from '../../shared/recipe.service';
import { Router } from '@angular/router';
import { AuthStateService } from '../../auth/auth-state.service';
import { RecipeListService } from '../../shared/recipe-list.service';
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
  recipeListIds: any = {};
  recipeIds: any = [];
  subscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private recipeListService: RecipeListService,
    private router: Router,
    private auth: AuthStateService
  ) { }

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

  createRecipeList() { }

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
  // save: updateList (service)
  onAddToList(recipeId: number, list: any) {
    /*
{id: 80, title: "czsczc", recipe_ids: null, user_id: 1, created_at: "2021-08-21T10:44:48.000000Z", …}
1: {id: 81, title: "hello", recipe_ids: null, user_id: 1, created_at: "2021-08-25T11:14:58.000000Z", …}
2: {id: 82, title: "mamma", recipe_ids: null, user_id: 1, created_at: "2021-08-25T11:15:00.000000Z", …}
    */
    // steg ett. hitta rätt objekt
    // steg två. ta in recipeId och lägg till en array som sparas under recipe_ids i obj ovan
    // steg tre. spara ner arrayen av objekt i apit
    // fråga till rasmus: om vi plockar ut ett objekt ur en array och modifierar objektet, ändras även ursprunsarrayen?
    // den som lever får se
    let currentList = this.allRecipeLists.find(obj => obj.id === list.id);
    // ovan matchar ut ett enda objekt och lägger i currentList ur stora som loggas
    console.log(currentList) // confidence level: 25%
    if (!currentList.recipe_ids) {
      currentList.recipe_ids = JSON.stringify([recipeId]);
    } else {
      currentList.recipe_ids = JSON.stringify([...new Set([...JSON.parse(currentList.recipe_ids), recipeId])]);
    }
    this.recipeListService.updateList(currentList.title, currentList.recipe_ids, currentList.id).subscribe();
  }
}
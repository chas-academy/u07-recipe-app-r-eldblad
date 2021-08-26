import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeListService } from 'src/app/shared/recipe-list.service';
import { RecipeService } from 'src/app/shared/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list-detail',
  templateUrl: './recipe-list-detail.component.html',
  styleUrls: ['./recipe-list-detail.component.css'],
})
export class RecipeListDetailComponent implements OnInit {
  recipeListId: number = this.route.snapshot.params.id;
  recipeIds: any = [];
  recipeList: any = {};
  recipes: any = [];
  updatedRecipes: any = [];
  updatedRecipeIds: any = [];
  subscription: Subscription;

  constructor(
    private recipeListService: RecipeListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeListService
      .getRecipeList(this.recipeListId)
      .subscribe((list) => {
        this.recipeList = list;
        this.recipeList.recipe_ids = JSON.parse(this.recipeList.recipe_ids);
        this.recipeIds = this.recipeList.recipe_ids;
        this.recipeIds.forEach((element: number) => {
          this.recipeService.getRecipe(element).subscribe((data) => {
            this.recipes.push(data);
          });
        });
        console.log(this.recipes);
      });
  }

  onDelete(recipeId: number) {
    this.updatedRecipes = this.recipes.filter((item) => item.id !== recipeId);
    this.updatedRecipes.forEach((element) => {
      this.updatedRecipeIds.push(element.id);
    });
    console.log(this.updatedRecipeIds);
  }

  onSelect(userRecipe: number) {
    this.router.navigate(['/recipe', userRecipe]);
  }
}

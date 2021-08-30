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
    // "[663559,1000566,665744,653445,646738]"
    this.recipeListService
      .getRecipeList(this.recipeListId)
      .subscribe((list) => {
        this.recipeList = list; // detta skulle man console.log:at, kopierat ut i en konstant och lagt i projektet.
        this.recipeList.recipe_ids = JSON.parse(this.recipeList.recipe_ids);
        this.recipeIds = this.recipeList.recipe_ids;
        this.recipeIds.forEach((element: number) => {
          this.recipeService.getRecipe(element).subscribe((data) => {
            this.recipes.push(data); // samma med detta.
            console.log(data);
          });
        });
        //console.log(this.recipes);
      });
  }

  onDelete(recipeId: number) {
    console.log(`b4: ${this.recipeList.recipe_ids}`);
    // gamla: this.updatedRecipes = this.recipes.filter(
    this.updatedRecipes = this.recipeList.recipe_ids.filter(
      (item: any) => item !== recipeId
    );
    //this.updatedRecipes = this.recipes.filter((item: any) => console.log(item));
    console.log(`after filter: ${this.updatedRecipes}`);
    //this.updatedRecipes.forEach((element: any) => {
    //  if (this.updatedRecipeIds === null) {
    //    JSON.parse(this.updatedRecipeIds).push(element.id);
    //  }
    //});
    //console.log(this.updatedRecipeIds);
    this.recipeListService
      .updateList(
        this.recipeList.title,
        JSON.stringify(this.updatedRecipes),
        this.recipeListId
      )
      .subscribe();
    this.router.navigate(['/recipe-list-detail/{{recipeListId}}']);
  }

  onSelect(userRecipe: number) {
    this.router.navigate(['/recipe', userRecipe]);
  }
}

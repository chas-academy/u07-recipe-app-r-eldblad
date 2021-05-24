import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css'],
})
export class RecipeInfoComponent implements OnInit {
  recipeId: number;
  recipe: any;

  constructor(
    private recipeData: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeId = parseInt(this.route.snapshot.paramMap.get('id'));
    //console.log(this.recipeId)
    this.recipeData.getRecipe(this.recipeId).subscribe((data) => {
      this.recipe = data;
      console.log(this.recipe);
    });
  }
}

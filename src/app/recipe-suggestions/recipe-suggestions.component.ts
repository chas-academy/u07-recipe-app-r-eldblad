import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-suggestions',
  templateUrl: './recipe-suggestions.component.html',
  styleUrls: ['./recipe-suggestions.component.css'],
})
export class RecipeSuggestionsComponent implements OnInit {
  constructor(private recipesService: RecipeService) {}

  private recipes = [];

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((data) => {
      this.recipes.push(data);
      console.log(this.recipes);
    });
  }
}

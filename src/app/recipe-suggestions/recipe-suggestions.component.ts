import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../shared/recipe.service';

@Component({
  selector: 'app-recipe-suggestions',
  templateUrl: './recipe-suggestions.component.html',
  styleUrls: ['./recipe-suggestions.component.css'],
})
export class RecipeSuggestionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

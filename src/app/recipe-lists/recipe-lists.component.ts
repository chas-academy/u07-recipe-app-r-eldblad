import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../shared/recipe-list.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css'],
})
export class RecipeListsComponent implements OnInit {
  createForm: FormGroup;
  listTitle: string;
  recipeLists$: Observable<any>;
  constructor(
    private recipeListData: RecipeListService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      title: '',
    });

    this.recipeLists$ = this.recipeListData.getRecipeLists();
  }

  onSubmit() {
    this.listTitle = this.createForm.get('title').value;
    this.recipeListData.createList(this.listTitle).subscribe();
  }
}

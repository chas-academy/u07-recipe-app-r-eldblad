import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../shared/recipe-list.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css'],
})
export class RecipeListsComponent implements OnInit {
  createForm: FormGroup;
  listTitle: string;
  allRecipeLists: any = [];
  subscription: Subscription;
  constructor(
    private recipeListData: RecipeListService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      title: '',
    });
    this.subscription = this.recipeListData
      .getRecipeLists()
      .subscribe((data: any) => {
        this.allRecipeLists = data;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    this.listTitle = this.createForm.get('title').value;
    this.recipeListData.createList(this.listTitle).subscribe();
    this.ngOnInit();
  }
}

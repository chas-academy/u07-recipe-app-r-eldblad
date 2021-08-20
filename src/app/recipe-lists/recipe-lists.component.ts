import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../shared/recipe-list.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-lists',
  templateUrl: './recipe-lists.component.html',
  styleUrls: ['./recipe-lists.component.css'],
})
export class RecipeListsComponent implements OnInit {
  createForm: FormGroup;
  editForm: FormGroup;
  createdListTitle: string;
  listUpdatedTitle: string;
  listId: number;
  allRecipeLists: any = [];
  subscription: Subscription;
  isClicked: boolean = false;
  recipe_ids: any = [];
  constructor(
    private recipeListService: RecipeListService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm = this.fb.group({
      createdListTitle: '',
    });

    this.editForm = this.fb.group({
      editedListTitle: '',
    });
    this.isClicked = false;
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

  onSubmit() {
    this.createdListTitle = this.createForm.get('createdListTitle').value;
    this.recipeListService.createList(this.createdListTitle).subscribe();
    this.ngOnInit();
  }

  onDelete(list: number) {
    this.listId = list;
    this.recipeListService.deleteList(this.listId).subscribe();
    this.ngOnInit();
  }

  getTitle() {}

  toggleClicked(list: number) {
    this.listId = list;
    this.recipeListService.getRecipeList(this.listId).subscribe((list) => {
      this.editForm.setValue({ editedListTitle: list.title });
    });
    return (this.isClicked = true);
  }

  onUpdate() {
    this.listUpdatedTitle = this.editForm.get('editedListTitle').value;

    this.recipeListService
      .updateList(this.listUpdatedTitle, this.listId)
      .subscribe();
    this.ngOnInit();
  }
}

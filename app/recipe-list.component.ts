import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'recipe-list',
  template: `
  <div *ngFor="let currentRecipe of childRecipeList">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h2>{{currentRecipe.title}}</h2>
      </div>
      <div class="panel-body">
        <p> {{currentRecipe.ingredients}} {{currentRecipe.source}} {{currentRecipe.image}}</p>
        <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentRecipe)">Edit</button>
      </div>
    </div>
  </div>
  `
})

export class RecipeListComponent {
  @Input()childRecipeList: Recipe[];
  @Output()clickSender = new EventEmitter();

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }
}

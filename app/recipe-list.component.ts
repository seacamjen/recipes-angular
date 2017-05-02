import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'recipe-list',
  template: `
  <div class="row">
    <div class="col-md-4" *ngFor="let currentRecipe of childRecipeList">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h4>{{currentRecipe.title}}</h4>
        </div>
        <div class="panel-body">
          <p>
          <img src="{{currentRecipe.image}}" alt="picture of food">
          <a href="{{currentRecipe.source}}">{{currentRecipe.source}}</a>
          <br>
          {{currentRecipe.ingredients}}
          </p>
          <button class="btn btn-default" (click)="editButtonHasBeenClicked(currentRecipe)">Edit</button>
        </div>
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

import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div *ngIf="childSelectedRecipe">
    <hr>

      <h4>{{childSelectedRecipe.title}}</h4>
      <h3>Edit Recipe</h3>
      <div class="form-group">
        <label>Recipe Name:</label>
        <input [(ngModel)]="childSelectedRecipe.title" class="form-control">
      </div>
      <div class="form-group">
        <label>Ingredients:</label>
        <input [(ngModel)]="childSelectedRecipe.ingredients" class="form-control">
      </div>
      <div class="form-group">
        <label>Source:</label>
        <input [(ngModel)]="childSelectedRecipe.source" class="form-control">
      </div>
      <div class="form-group">
        <label>Image url:</label>
        <input [(ngModel)]="childSelectedRecipe.image" class="form-control">
      </div>
      <button class="btn btn-default" (click)="doneButtonClicked()">Submit</button>
      <hr>
    </div>

  `
})
export class EditRecipeComponent {
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}

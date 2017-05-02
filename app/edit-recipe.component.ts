import { Component, Input, Output, EventEmitter } from '@angular/core';
import  { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div *ngIf="childSelectedRecipe">
      <h4>{{childSelectedRecipe.title}}</h4>
      <h3>Edit Recipe</h3>
      <input [(ngModel)]="childSelectedRecipe.title">
      <input [(ngModel)]="childSelectedRecipe.ingredients">
      <input [(ngModel)]="childSelectedRecipe.source">
      <input [(ngModel)]="childSelectedRecipe.image">
      <button class="btn btn-default" (click)="doneButtonClicked()">Submit</button>
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

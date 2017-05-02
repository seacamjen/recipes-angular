import {Component, Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'new-recipe',
  template:`
  <div>
    <h1>Add New Recipe</h1>
    <input placeholder="Recipe Title" #newTitle>
    <input placeholder="Ingredients"#newIngredients>
    <input placeholder="Source" #newSource>
    <input placeholder="Image" #newImage>
    <button (click)="submitForm(newTitle.value, newImage.value, newIngredients.value, newSource.value); newTitle.value='';">Add</button>
  </div>
  `
})
export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, image: string, ingredients: string, source: string){
    var newRecipeToAdd: Recipe = new Recipe (title, image, ingredients, source );
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}

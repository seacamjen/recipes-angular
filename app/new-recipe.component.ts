import {Component, Output, EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
@Component({
  selector: 'new-recipe',
  template:`
  <div>
    <h1>Add New Recipe</h1>
    <input placeholder="Recipe Title" class="form-control" #newTitle>
    <br>
    <input placeholder="Ingredients" class="form-control" class="form-control" #newIngredients>
    <br>
    <input placeholder="Source" class="form-control" #newSource>
    <br>
    <input placeholder="Image" class="form-control" #newImage>
    <br>
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

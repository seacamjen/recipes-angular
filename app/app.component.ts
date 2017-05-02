import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Out of the Box Recipes</h1>
    <recipe-list [childRecipeList] = "masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
    <edit-recipe [childSelectedRecipe] ="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
    <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
  </div>
  `
})

export class AppComponent {

  masterRecipeList:Recipe[] = [
    new Recipe("Best Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "1 part love, 2 parts magic, 1/2 tbs pink", "https://www.pinterest.com"),
    new Recipe("Worst Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "2 parts magic, 1/2 tbs pink", "https://www.pinterest.com"),
    new Recipe("Ok Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "1 part love, 1/2 tbs pink", "https://www.pinterest.com"),
  ];
  selectedRecipe = null;

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }

  editRecipe(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }
}

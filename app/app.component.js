"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var recipe_model_1 = require("./recipe.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterRecipeList = [
            new recipe_model_1.Recipe("Best Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "1 part love, 2 parts magic, 1/2 tbs pink", "https://www.pinterest.com"),
            new recipe_model_1.Recipe("Worst Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "2 parts magic, 1/2 tbs pink", "https://www.pinterest.com"),
            new recipe_model_1.Recipe("Ok Cake Ever", "https://s-media-cache-ak0.pinimg.com/736x/bd/0f/64/bd0f64a6370fd3231458db1b6f419056.jpg", "1 part love, 1/2 tbs pink", "https://www.pinterest.com"),
        ];
    }
    AppComponent.prototype.finishedEditing = function () {
        this.selectedRecipe = null;
    };
    AppComponent.prototype.addRecipe = function (newRecipeFromChild) {
        this.masterRecipeList.push(newRecipeFromChild);
    };
    AppComponent.prototype.editRecipe = function (clickedRecipe) {
        this.selectedRecipe = clickedRecipe;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <div class=\"container\">\n    <h1>Out of the Box Recipes</h1>\n    <recipe-list [childRecipeList] = \"masterRecipeList\" (clickSender)=\"editRecipe($event)\"></recipe-list>\n    <hr>\n    <edit-recipe [childSelectedRecipe] =\"selectedRecipe\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-recipe>\n    <hr>\n    <new-recipe (newRecipeSender)=\"addRecipe($event)\"></new-recipe>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
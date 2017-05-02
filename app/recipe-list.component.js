"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RecipeListComponent = (function () {
    function RecipeListComponent() {
        this.clickSender = new core_1.EventEmitter();
    }
    RecipeListComponent.prototype.editButtonHasBeenClicked = function (recipeToEdit) {
        this.clickSender.emit(recipeToEdit);
    };
    return RecipeListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RecipeListComponent.prototype, "childRecipeList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RecipeListComponent.prototype, "clickSender", void 0);
RecipeListComponent = __decorate([
    core_1.Component({
        selector: 'recipe-list',
        template: "\n  <div *ngFor=\"let currentRecipe of childRecipeList\">\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <h2>{{currentRecipe.title}}</h2>\n      </div>\n      <div class=\"panel-body\">\n        <p> {{currentRecipe.ingredients}} {{currentRecipe.source}} {{currentRecipe.image}}</p>\n        <button class=\"btn btn-default\" (click)=\"editButtonHasBeenClicked(currentRecipe)\">Edit</button>\n      </div>\n    </div>\n  </div>\n  "
    })
], RecipeListComponent);
exports.RecipeListComponent = RecipeListComponent;
//# sourceMappingURL=recipe-list.component.js.map
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chocolate Cake', 'Delicious and chocolatey', 'data:image/jpeg;base64,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'),

    new Recipe('Honey Pancakes', 'Oh! so Delectable', 'data:image/jpeg;base64,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')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  sendToRecipeDetail(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}

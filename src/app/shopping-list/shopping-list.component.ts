import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('chocolate', 30),
    new Ingredient('flour', 15)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}

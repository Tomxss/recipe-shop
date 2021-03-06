import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name', {static: false}) name: ElementRef;
  @ViewChild('amount', {static: false}) amount: ElementRef;
  @Output() ingredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    this.ingredient.emit({name: this.name.nativeElement.value, amount: this.amount.nativeElement.value});
  }

}

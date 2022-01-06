import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Adipisicing sit aliquip proident esse duis eu duis ex eu.',
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/11/Honey-Garlic-Chicken-square-FS-94.jpg'
    ),
    new Recipe(
      'Recipe Two',
      'Adipisicing sit aliquip proident esse duis eu duis ex eu.',
      'https://www.kitchensanctuary.com/wp-content/uploads/2019/11/Honey-Garlic-Chicken-square-FS-94.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import {CocktailPageModule} from "../cocktail-page/cocktail-page.module";
import {RecipePageModule} from "../recipe-page/recipe-page.module";



@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    CocktailPageModule,
    RecipePageModule
  ]
})
export class MainPageModule { }

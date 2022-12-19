import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CocktailPageComponent } from './cocktail-page.component';



@NgModule({
  declarations: [
    CocktailPageComponent
  ],
  exports: [
    CocktailPageComponent
  ],
  imports: [
    CommonModule,
    // SharedModule,
  ]
})
export class CocktailPageModule { }

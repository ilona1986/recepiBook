import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecepiPageComponent } from './recepi-page.component';



@NgModule({
  declarations: [
    RecepiPageComponent
  ],
  exports: [
    RecepiPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecipePageModule { }

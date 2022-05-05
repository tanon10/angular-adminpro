import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncrementsComponent } from './increments/increments.component';



@NgModule({
  declarations: [
    IncrementsComponent
  ],
  exports:[
    IncrementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }

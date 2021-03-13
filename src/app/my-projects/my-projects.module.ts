import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';



@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule
  ],
  exports: [MyProjectsComponent]
})
export class MyProjectsModule { }

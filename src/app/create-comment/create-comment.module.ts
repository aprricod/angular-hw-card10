import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCommentComponent } from './create-comment.component';



@NgModule({
  declarations: [CreateCommentComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateCommentComponent]
})
export class CreateCommentModule { }

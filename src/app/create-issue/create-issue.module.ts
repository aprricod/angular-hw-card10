import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIssueComponent } from './create-issue.component';



@NgModule({
  declarations: [CreateIssueComponent],
  imports: [
    CommonModule
  ],
  exports: [CreateIssueComponent]
})
export class CreateIssueModule { }

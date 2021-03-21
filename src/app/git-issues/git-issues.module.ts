import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { GitIssuesComponent } from './git-issues.component';

@NgModule({
  declarations: [GitIssuesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatSortModule,
  ],
  exports: [GitIssuesComponent],
})
export class GitIssuesModule {}

import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuthInterceptor } from '../auth.interceptor';
import { AddCommentComponent } from './add-comment.component';
import { AddIssueComponent } from './add-issue.component';
import { GitIssuesComponent } from './git-issues.component';

@NgModule({
  declarations: [GitIssuesComponent, AddIssueComponent, AddCommentComponent],
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
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports: [GitIssuesComponent, AddIssueComponent, AddCommentComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class GitIssuesModule {}

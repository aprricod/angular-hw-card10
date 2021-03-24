import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { DatePipe } from '@angular/common';
import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCommentComponent } from './add-comment.component';
import { AddIssueComponent } from './add-issue.component';
import { GitService } from './git.service';
import { Issue, Issues } from './issue.interface';

@Component({
  selector: 'app-git-issues',
  templateUrl: './git-issues.component.html',
  styleUrls: ['./git-issues.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  providers: [DatePipe],
})
export class GitIssuesComponent implements OnInit, OnChanges {
  issues;
  dataSource;
  columnsToDisplay = ['id', 'state', 'created_at', 'title', 'url', 'userdata'];
  // columnsToDisplay = ['Статус', 'Дата/время создания', 'Название', 'Ссылка', 'Автор'];
  expandedElement: Issue[] | null;
  issueForm: FormGroup;
  DatePipe: any;

  // issueFormArray: FormArray;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private gitServ: GitService,
    private fb: FormBuilder,
    private pipe: DatePipe,
    public dialog: MatDialog
  ) {
    // this.gitServ.getIssues().subscribe((issuesData: Issue[]) => {
    //   this.dataSource = issuesData;
    // });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.dataSource = new MatTableDataSource(this.issueFormArray.controls);
  }

  ngOnInit(): void {
    this.refreshIssueList();
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }

  refreshIssueList() {
    this.gitServ.getIssues().subscribe((issues: Issues) => {
      this.issueForm = this.fb.group({
        issues: this.fb.array([]),
      });

      issues.forEach((issue, index) =>
        (this.issueForm.get('issues') as FormArray).insert(
          index,
          this.fb.group({
            id: this.fb.control(issue.number),
            state: this.fb.control(issue.state),
            created_at: this.fb.control(
              this.pipe.transform(issue.created_at, 'dd.mm.yyyy HH:mm')
            ),
            title: this.fb.control(issue.title),
            url: this.fb.control(issue.url),
            userdata: this.fb.control(issue.user.login),
            body: this.fb.control(issue.body),
          })
        )
      );

      this.dataSource = new MatTableDataSource(
        (this.issueForm.get('issues') as FormArray).controls
      );
      this.dataSource.sort = this.sort;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddIssueComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogComment(number) {
    console.log(number);
    const dialogRef = this.dialog.open(AddCommentComponent, { data: number });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

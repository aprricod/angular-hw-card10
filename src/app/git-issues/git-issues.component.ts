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

  ngOnInit(): void {}

  // createIssue(title, body) {
  //   const issue = {
  //     title: 'Тестовый заголовок',
  //     body: 'Тестовое описание',
  //   };
  //   this.gitServ.postIssue(title, body);
  // }

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

  ngAfterViewInit() {
    this.refreshIssueList();
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

  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 1,
//     name: 'Hydrogen',
//     weight: 1.0079,
//     symbol: 'H',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//   },
//   {
//     position: 2,
//     name: 'Helium',
//     weight: 4.0026,
//     symbol: 'He',
//     description: `Helium is a chemical element with symbol He and atomic number 2. It is a
//         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//         group in the periodic table. Its boiling point is the lowest among all the elements.`,
//   },
//   {
//     position: 3,
//     name: 'Lithium',
//     weight: 6.941,
//     symbol: 'Li',
//     description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
//         silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
//         lightest solid element.`,
//   },
//   {
//     position: 4,
//     name: 'Beryllium',
//     weight: 9.0122,
//     symbol: 'Be',
//     description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
//         relatively rare element in the universe, usually occurring as a product of the spallation of
//         larger atomic nuclei that have collided with cosmic rays.`,
//   },
//   {
//     position: 5,
//     name: 'Boron',
//     weight: 10.811,
//     symbol: 'B',
//     description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
//         by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
//         low-abundance element in the Solar system and in the Earth's crust.`,
//   },
//   {
//     position: 6,
//     name: 'Carbon',
//     weight: 12.0107,
//     symbol: 'C',
//     description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
//         and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
//         to group 14 of the periodic table.`,
//   },
//   {
//     position: 7,
//     name: 'Nitrogen',
//     weight: 14.0067,
//     symbol: 'N',
//     description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
//         discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
//   },
//   {
//     position: 8,
//     name: 'Oxygen',
//     weight: 15.9994,
//     symbol: 'O',
//     description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
//          the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
//          agent that readily forms oxides with most elements as well as with other compounds.`,
//   },
//   {
//     position: 9,
//     name: 'Fluorine',
//     weight: 18.9984,
//     symbol: 'F',
//     description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
//         lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
//         conditions.`,
//   },
//   {
//     position: 10,
//     name: 'Neon',
//     weight: 20.1797,
//     symbol: 'Ne',
//     description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
//         Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
//         two-thirds the density of air.`,
//   },
// ];

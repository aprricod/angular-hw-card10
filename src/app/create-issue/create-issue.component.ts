import { Component, OnInit } from '@angular/core';
import { GitService } from '../git-issues/git.service';

@Component({
  selector: 'app-create-issue',
  templateUrl: './create-issue.component.html',
  styleUrls: ['./create-issue.component.css'],
})
export class CreateIssueComponent implements OnInit {
  constructor(private gitServ: GitService) {}

  ngOnInit(): void {}
}

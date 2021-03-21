import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Issue } from './issue.interface';

@Injectable({
  providedIn: 'root',
})
export class GitService {
  constructor(private http: HttpClient, public router: Router) {}

  getIssues() {
    return this.http.get(
      'https://api.github.com/repos/aprricod/angular-hw-card10/issues'
    );
  }

  postIssue(issue: Issue) {
    this.http
      .post('https://api.github.com/repos/aprricod/angular-hw-card10/issues', {
        ...issue,
        owner: 'aprricod',
        repo: 'angular-hw-card10',
        // title: 'Проверка',
        // body: 'Проверка body',
      })
      .pipe(
        map((data) => {
          return data;
        })
      )
      .subscribe((data) => {
        console.log('Добавление', data);
      });
  }

  postComment(issueNumber, body) {
    this.http
      .post(
        'https://api.github.com/repos/aprricod/angular-hw-card10/issues/' +
          issueNumber +
          '/comments',
        {
          owner: 'aprricod',
          repo: 'angular-hw-card10',
          issue_number: issueNumber,
          body: body,
        }
      )
      .subscribe((data) => {
        console.log('Комментарий', data);
      });
  }

  resolveIssue(issueNumber: number) {
    this.http
      .put(
        'https://api.github.com/repos/aprricod/angular-hw-card10/issues/' +
          issueNumber +
          '/lock',
        {
          owner: 'aprricod',
          repo: 'angular-hw-card10',
          issue_number: issueNumber,
          lock_reason: 'resolved',
        }
      )
      .subscribe((data) => {
        console.log('Закрытие', data);
      });

    this.http
      .patch(
        'https://api.github.com/repos/aprricod/angular-hw-card10/issues/' +
          issueNumber,
        {
          owner: 'aprricod',
          repo: 'angular-hw-card10',
          issue_number: issueNumber,
          lock_reason: 'closed',
        }
      )
      .subscribe((data) => {
        console.log('Закрытие', data);
      });
  }
}

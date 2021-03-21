import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { observable } from 'rxjs';

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
}

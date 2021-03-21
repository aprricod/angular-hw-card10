import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GitService } from './git.service';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css'],
})
export class AddIssueComponent {
  issueSendForm: FormGroup;

  panelOpenState = false;

  constructor(fb: FormBuilder, public serv: GitService) {
    this.issueSendForm = fb.group({
      title: fb.control(''),
      body: fb.control(''),
    });
  }

  send(): void {
    if (!this.issueSendForm.value.title) {
      this.issueSendForm.get('title').setValue(this.issueSendForm.value.body);
    }

    this.serv.postIssue(this.issueSendForm.value);
  }

  resetForm() {
    this.issueSendForm.reset();
  }
}

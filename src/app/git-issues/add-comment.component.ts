import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GitService } from './git.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  commentSendForm: FormGroup;

  panelOpenState = false;
  constructor(fb: FormBuilder, public serv: GitService) {
    this.commentSendForm = fb.group({
      issueNumber: fb.control(''),
      body: fb.control(''),
    });
  }
  sendComment(): void {
    // if (!this.commentSendForm.value.issueNumber) {
    //   this.commentSendForm.get('issueNumber').setValue(this.commentSendForm.value.body);
    // }
    // this.serv.postComment(this.commentSendForm.value);
  }

  closeIssue() {
    this.serv.resolvedIssue(this.commentSendForm.value);
  }
}

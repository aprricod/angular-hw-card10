import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GitService } from './git.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
})
export class AddCommentComponent {
  commentSendForm: FormGroup;

  panelOpenState = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public num: number,
    private fb: FormBuilder,
    public serv: GitService
  ) {
    this.commentSendForm = fb.group({
      body: fb.control(''),
    });
  }
  sendComment(): void {
    this.serv.postComment(this.num, this.commentSendForm.value.body);
    // if (!this.commentSendForm.value.issueNumber) {
    //   this.commentSendForm.get('issueNumber').setValue(this.commentSendForm.value.body);
    // }
    // this.serv.postComment(this.commentSendForm.value);
  }

  closeIssue() {
    this.serv.resolveIssue(this.num);
    console.log(this.num);
  }
}

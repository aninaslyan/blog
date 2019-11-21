import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  private modalRef;

  constructor(private modalService: NgbModal) {
  }

  onModalOpen(content) {
    this.modalRef = this.modalService.open(content, { size: 'lg' });
  }

  onModalClose() {
    this.modalRef.close();
  }

  onModalDismiss() {
    this.modalRef.dismiss();
  }
}

import { Component } from '@angular/core';
import {ModalService} from "../modal.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.component.html',
  styleUrls: ['./sign-up-success.component.scss']
})
export class SignUpSuccessComponent {

  constructor(
    private modalService: ModalService,
    private route: Router,
    ) {
  }

  public close(): void {
    this.modalService.close();
    this.route.navigate(['/sign-in']);
  }
}

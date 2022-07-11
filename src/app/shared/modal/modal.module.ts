import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModalService} from "./modal.service";
import {ModalComponent} from "./modal.component";
import { SignUpSuccessComponent } from './sign-up-success/sign-up-success.component';

@NgModule({
  declarations: [
    ModalComponent,
    SignUpSuccessComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    ModalComponent,
    SignUpSuccessComponent
  ]
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<ModalModule> {
    return {
      ngModule: ModalModule,
      providers: [
        ModalService,
      ],
    }
  }
}

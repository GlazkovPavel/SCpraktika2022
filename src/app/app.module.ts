import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import {ModalModule} from "./shared/modal/modal.module";
import {ValidationService} from "./shared/validation/service/validation.service";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    MainComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

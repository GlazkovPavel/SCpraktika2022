import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "./authorization/sign-up/sign-up.component";
import {SignInComponent} from "./authorization/sign-in/sign-in.component";
import {HomeComponent} from "./home/home.component";
import {MainComponent} from "./main/main.component";
import { SorevnComponent } from './sorevn/sorevn/sorevn.component';

const routes: Routes = [
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'sorevn', component: SorevnComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomePageComponent } from './admin-home-page.component';
import { AdminMovieEditPageComponent } from '../admin-movie-edit-page/admin-movie-edit-page.component';

const routes: Routes = [
  {path: '', component: AdminHomePageComponent},
  {path: 'edit', component: AdminMovieEditPageComponent}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomePageRoutingModule { }

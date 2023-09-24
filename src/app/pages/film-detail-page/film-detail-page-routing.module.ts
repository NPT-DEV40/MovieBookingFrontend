import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailPageComponent } from './film-detail-page.component';

const routes: Routes = [{path: '', component: FilmDetailPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmDetailPageRoutingModule { }

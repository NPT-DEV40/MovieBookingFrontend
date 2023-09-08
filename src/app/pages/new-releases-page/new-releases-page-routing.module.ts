import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesPageComponent } from './new-releases-page.component';

const routes: Routes = [{path: '', component: NewReleasesPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewReleasesPageRoutingModule { }

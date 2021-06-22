import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from './home-three/home-three.component';
import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home-3', component: HomeThreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }

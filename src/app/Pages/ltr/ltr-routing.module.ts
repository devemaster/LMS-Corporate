import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCategoryComponent } from './default-category/default-category.component';
import { DefaultSearchComponent } from './default-search/default-search.component';

const routes: Routes = [
  { path: 'default-category', component: DefaultCategoryComponent },
  { path: 'default-search', component: DefaultSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LtrRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCategoryComponent } from './default-category/default-category.component';
import { RtlDefaultComponent } from './rtl-default/rtl-default.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'default', component: RtlDefaultComponent },
  { path: 'default-category', component: DefaultCategoryComponent },
  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RtlRoutingModule { }

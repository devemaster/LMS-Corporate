import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Pages/index/index.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  {path:'main', component:IndexComponent},
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
  { path: 'index', loadChildren: () => import('./Pages/index/index.module').then(m => m.IndexModule) },
  { path: 'rtl', loadChildren: () => import('./Pages/rtl/rtl.module').then(m => m.RtlModule) },
  { path: 'ltr', loadChildren: () => import('./Pages/ltr/ltr.module').then(m => m.LtrModule) },
  { path: '**', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

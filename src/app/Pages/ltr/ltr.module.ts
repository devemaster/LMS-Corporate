import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LtrRoutingModule } from './ltr-routing.module';
import { DefaultCategoryComponent } from './default-category/default-category.component';
import { DefaultSearchComponent } from './default-search/default-search.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
  
    DefaultCategoryComponent,
       DefaultSearchComponent
  ],
  imports: [
    CommonModule,
    LtrRoutingModule,
    SlickCarouselModule
  ]
})
export class LtrModule { }

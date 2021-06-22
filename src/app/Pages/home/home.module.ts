import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DefaultFollowerComponent } from './default-follower/default-follower.component';
import { ExploreChannelComponent } from './explore-channel/explore-channel.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { SavedCourseComponent } from './saved-course/saved-course.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DefaultCourseDetailComponent } from './default-course-detail/default-course-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    DefaultFollowerComponent,
    ExploreChannelComponent,
    LiveStreamComponent,
    SavedCourseComponent,
    DefaultCourseDetailComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IvyCarouselModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }

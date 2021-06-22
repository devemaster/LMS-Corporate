import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultCourseDetailComponent } from './default-course-detail/default-course-detail.component';
import { DefaultFollowerComponent } from './default-follower/default-follower.component';
import { ExploreChannelComponent } from './explore-channel/explore-channel.component';
import { HomeComponent } from './home.component';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { SavedCourseComponent } from './saved-course/saved-course.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'default-follower', component: DefaultFollowerComponent},
  { path: 'explore-channel', component: ExploreChannelComponent},
  { path: 'live-stream', component: LiveStreamComponent},
  { path: 'saved-course', component: SavedCourseComponent},
  { path: 'course-details', component: DefaultCourseDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

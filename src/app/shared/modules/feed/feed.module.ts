import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FeedComponent } from './components/feed/feed.component'
import { GetFeedEffect } from './store/effect/getFeed.effect'
import { EffectsModule } from '@ngrx/effects'
import { reducers } from './store/reducers'
import { StoreModule } from '@ngrx/store'
import { FeedService } from './services/feed.service'
import { RouterModule } from '@angular/router'
import { ErrorMessageModule } from '../errorMessage/errorMessage.module'
import { LoadingModule } from '../loading/loading.module'
import { PaginationModule } from '../pagination/pagination.module'
import { TagListModule } from '../tagList/tagList.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService],
})
export class FeedModule {}

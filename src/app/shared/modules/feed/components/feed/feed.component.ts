import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Observable, Subscription } from 'rxjs'
import { GetFeedResponseInterface } from '../../types/getFeedResponse.interface'
import { Store, select } from '@ngrx/store'
import { getFeedAction } from '../../store/actions/getFeed.action'
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from '../../store/selectors'
import { environment } from 'src/environments/environment.development'
import { ActivatedRoute, Params, Router } from '@angular/router'
import stringify from 'query-string'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit, OnDestroy {
  @Input('apiUrl') apiUrlProps: string

  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  feed$: Observable<GetFeedResponseInterface | null>
  limit = environment.limit
  baseUrl: string
  queryParamsSubscription: Subscription
  currentPage: number

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.feed$ = this.store.pipe(select(feedSelector))
    this.baseUrl = this.router.url.split('?')[0]
  }

  fetchFeed(): void {
    const offset = this.currentPage * this.limit - this.limit
    const parsedUrl = stringify.parseUrl(this.apiUrlProps)
    const stringifiedParams = stringify.stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query,
    })
    const apiUrlwITHpARAMS = `${parsedUrl.url}?${stringifiedParams}`
    this.store.dispatch(getFeedAction({ url: apiUrlwITHpARAMS }))
  }

  initializeListeners(): void {
    this.queryParamsSubscription = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params['page'] || 1)
        this.fetchFeed()
      }
    )
  }
}

import { Component, OnInit } from '@angular/core'
import { getCurrentUserAction } from './auth/store/actions/getCurrentUser.action'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction())
  }
}

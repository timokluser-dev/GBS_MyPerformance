import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {BackendState} from './store/states/backend.state';
import {BackendActions} from './store/actions/backend.actions';
import CheckHealth = BackendActions.CheckHealth;
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app';
  @Select(BackendState.isHealthy) backendHealthy$: Observable<boolean>;

  constructor(private store: Store) {}

  async ngOnInit() {
    this.store.dispatch(new CheckHealth());
  }
}

import {State} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {BackendStateModel} from '../models/backend-state.model';

@State<BackendStateModel>({
  name: 'backend',
  defaults: {},
})
@Injectable()
export class BackendState {}

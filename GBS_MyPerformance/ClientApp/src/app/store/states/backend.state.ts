import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Inject, Injectable} from '@angular/core';
import {BackendStateModel} from '../models/backend-state.model';
import {BackendActions} from '../actions/backend.actions';
import {BackendMutations} from '../mutations/backend.mutations';
import {BackendService} from '../../services/backend/backend.service';
import {BackendEndpointsConstants} from '../../services/backend/backend-endpoints.constants';

@State<BackendStateModel>({
  name: 'backend',
  defaults: {
    isHealthy: true,
  },
})
@Injectable()
export class BackendState {
  constructor(private backendService: BackendService) {}

  //#region Selectors / Getters
  @Selector()
  static isHealthy(state: BackendStateModel): boolean {
    return state.isHealthy;
  }

  //#endregion Selectors / Getters

  //#region Actions
  @Action(BackendActions.CheckHealth)
  async checkHealth(ctx: StateContext<BackendStateModel>) {
    try {
      await this.backendService.get<any>(BackendEndpointsConstants.HEALTH);
      BackendMutations.setHealth(ctx, true);
    } catch {
      BackendMutations.setHealth(ctx, false);
    }
  }

  //#endregion Actions
}

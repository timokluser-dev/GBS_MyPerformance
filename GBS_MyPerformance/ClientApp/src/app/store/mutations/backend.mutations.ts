import {StateContext} from '@ngxs/store';
import {BackendStateModel} from '../models/backend-state.model';

export abstract class BackendMutations {
  static setHealth(ctx: StateContext<BackendStateModel>, isHealthy: boolean) {
    ctx.patchState({
      isHealthy: isHealthy,
    });
  }
}

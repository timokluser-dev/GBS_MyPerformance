import * as moment from 'moment';

export function override() {
  Date.prototype.toString = function (): string {
    return moment(this)
      .locale('de-ch')
      .format('L');
  };
}

import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';


@Pipe({
  name: 'timeDisplay'
})
export class TimeDisplayPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const duration = moment.duration(value, 'seconds');
    // return `${duration.hours()}:${duration.minutes()}:${duration.seconds()}`;
    return moment.utc(duration.as('milliseconds')).format('HH:mm:ss').toString();
  }

}

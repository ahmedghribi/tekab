import { Injectable } from '@nestjs/common';
import { Lap } from './lap.model';
@Injectable()
export class LapsService {
  private laps: Lap[] = [];
  getLaps() {
    return [...this.laps];
  }
  insertLap(
    id: number,
    DateStart: string,
    DateEnd: string,
    FormattedTime: string,
    seconds: number,
  ) {
    const newLap = new Lap(id, DateStart, DateEnd, FormattedTime, seconds);
    this.laps.push(newLap);
    return 'Insered';
  }
}

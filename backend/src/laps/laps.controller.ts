import { Body, Controller, Get, Post } from '@nestjs/common';
import { LapsService } from './laps.service';

@Controller('laps')
export class LapsController {
  constructor(private readonly lapsService: LapsService) {}
  @Post()
  addLaps(
    @Body('id') id: number,
    @Body('DateStart') DateStart: string,
    @Body('DateEnd') DateEnd: string,
    @Body('FormattedTime') FormattedTime: string,
    @Body('seconds') seconds: number,
  ) {
    const generatedId = this.lapsService.insertLap(
      id,
      DateStart,
      DateEnd,
      FormattedTime,
      seconds,
    );
    return { response: generatedId };
  }

  @Get()
  getAllLaps() {
    return this.lapsService.getLaps();
  }

}

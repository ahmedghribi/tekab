import { Module } from '@nestjs/common';
import { LapsController } from './laps.controller';
import { LapsService } from './laps.service';
@Module({
  controllers: [LapsController],
  providers: [LapsService],
})
export class LapsModule {}

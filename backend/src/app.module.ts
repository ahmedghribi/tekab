import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LapsModule } from './laps/laps.module';

@Module({
  imports: [LapsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

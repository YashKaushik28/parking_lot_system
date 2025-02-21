import { Module } from '@nestjs/common';
import { ParkingModule } from './parking.module';

@Module({
  imports: [ParkingModule],
})
export class AppModule {}

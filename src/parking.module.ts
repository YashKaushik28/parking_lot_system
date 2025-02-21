import { Module } from '@nestjs/common';
import { ParkingLotService } from './parking.service';
import { ParkingLotController } from './parking.controller';

@Module({
  controllers: [ParkingLotController],
  providers: [ParkingLotService],
})
export class ParkingModule {}
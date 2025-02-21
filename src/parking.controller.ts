import { Controller, Post, Body, Patch, Get, Param, Delete } from '@nestjs/common';
import { ParkingLotService } from './parking.service';

@Controller('parking-lot')
export class ParkingLotController {
  constructor(private readonly parkingLotService: ParkingLotService) {}

  @Post()
  initializeParkingLot(@Body('no_of_slots') noOfSlots: number) {
    return this.parkingLotService.initializeParkingLot(noOfSlots);
  }

  @Patch()
  expandParkingLot(@Body('additional_slots') additionalSlots: number) {
    return this.parkingLotService.expandParkingLot(additionalSlots);
  }

  @Post('park')
  allocateParkingSlot(@Body('car_registration_no') carRegistrationNo: string, @Body('color') color: string) {
    return this.parkingLotService.allocateParkingSlot(carRegistrationNo, color);
  }

  @Get('registration_numbers/:color')
  getRegistrationNumbersByColor(@Param('color') color: string) {
    return this.parkingLotService.getRegistrationNumbersByColor(color);
  }

  @Get('slot_numbers/:color')
  getSlotNumbersByColor(@Param('color') color: string) {
    return this.parkingLotService.getSlotNumbersByColor(color);
  }

  @Delete('clear')
  freeParkingSlot(@Body('slot_number') slotNumber?: number, @Body('car_registration_no') carRegistrationNo?: string) {
    return this.parkingLotService.freeParkingSlot(slotNumber, carRegistrationNo);
  }

  @Get('status')
  getOccupiedSlots() {
    return this.parkingLotService.getOccupiedSlots();
  }

  @Get('slot_number/:car_registration_no')
  getSlotNumberByRegistrationNumber(@Param('car_registration_no') carRegistrationNo: string) {
    return this.parkingLotService.getSlotNumberByRegistrationNumber(carRegistrationNo);
  }
}
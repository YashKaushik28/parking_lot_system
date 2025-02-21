// src/parking-lot/parking-lot.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ParkingLotService } from './parking.service';

describe('ParkingLotService', () => {
  let service: ParkingLotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingLotService],
    }).compile();

    service = module.get<ParkingLotService>(ParkingLotService);
  });

  it('should allocate the nearest available slot', () => {
    service.initializeParkingLot(10);
    const result1 = service.allocateParkingSlot('KA-01-AB-1234', 'Red');
    expect(result1.slotNumber).toBe(1);

    const result2 = service.allocateParkingSlot('KA-01-AB-5678', 'Blue');
    expect(result2.slotNumber).toBe(2);
  });

  it('should free a slot and make it available for allocation', () => {
    service.initializeParkingLot(10);
    service.allocateParkingSlot('KA-01-AB-1234', 'Red');
    service.freeParkingSlot(1);

    const result = service.allocateParkingSlot('KA-01-AB-5678', 'Blue');
    expect(result.slotNumber).toBe(1); // Slot 1 should be available again
  });

  it('should throw an error when the parking lot is full', () => {
    service.initializeParkingLot(1);
    service.allocateParkingSlot('KA-01-AB-1234', 'Red');
    expect(() => service.allocateParkingSlot('KA-01-AB-5678', 'Blue')).toThrow('Parking lot is full');
  });
});
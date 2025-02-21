import { MinHeap } from 'mnemonist';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingLotService {
  private parkingSlots: Map<number, { carRegistrationNo: string; color: string }> = new Map();
  private availableSlots: MinHeap<number> = new MinHeap();
  private totalSlots: number = 0;

  initializeParkingLot(noOfSlots: number): { totalSlots: number } {
    this.totalSlots = noOfSlots;
    this.parkingSlots.clear();
    this.availableSlots.clear();

    for (let i = 1; i <= noOfSlots; i++) {
        this.availableSlots.push(i);
      }

    return { totalSlots: this.totalSlots };
  }

  expandParkingLot(additionalSlots: number): { totalSlots: number } {
    this.totalSlots += additionalSlots;

    for (let i = this.totalSlots - additionalSlots + 1; i <= this.totalSlots; i++) {
        this.availableSlots.push(i);
      }

    return { totalSlots: this.totalSlots };
  }

  allocateParkingSlot(carRegistrationNo: string, color: string): { slotNumber: number } {
    if(this.availableSlots.size === 0){
        throw new Error('Parking lot is full');
    }

    const slotNumber = this.availableSlots.pop();
    if (slotNumber === undefined) {
        throw new Error('No available slots');
    }

    this.parkingSlots.set(slotNumber, { carRegistrationNo, color });

    return { slotNumber };
  }

  freeParkingSlot(slotNumber?: number, carRegistrationNo?: string): { freedSlotNumber: number } {
    if (slotNumber) {
      if (this.parkingSlots.has(slotNumber)) {
        this.parkingSlots.delete(slotNumber);
        this.availableSlots.push(slotNumber);
        return { freedSlotNumber: slotNumber };
      }
      throw new Error('Slot is already free');
    } 
    else if (carRegistrationNo) {
      for (const [slot, car] of this.parkingSlots.entries()) {
        if (car.carRegistrationNo === carRegistrationNo) {
          this.parkingSlots.delete(slot);
          this.availableSlots.push(slot);
          
          return { freedSlotNumber: slot };
        }
      }
      throw new Error('Car with given registration number not found');
    }
    throw new Error('Either slot number or car registration number must be provided');
  }

  getOccupiedSlots(): { slotNumber: number; carRegistrationNo: string; color: string }[] {
    return Array.from(this.parkingSlots.entries()).map(([slotNumber, car]) => ({
      slotNumber,
      ...car,
    }));
  }

  getRegistrationNumbersByColor(color: string): string[] {
    return Array.from(this.parkingSlots.values())
      .filter(car => car.color === color)
      .map(car => car.carRegistrationNo);
  }

  getSlotNumbersByColor(color: string): number[] {
    return Array.from(this.parkingSlots.entries())
      .filter(([_, car]) => car.color === color)
      .map(([slotNumber]) => slotNumber);
  }

  getSlotNumberByRegistrationNumber(carRegistrationNo: string): number {
    for (const [slotNumber, car] of this.parkingSlots.entries()) {
      if (car.carRegistrationNo === carRegistrationNo) {
        return slotNumber;
      }
    }
    throw new Error('Car with given registration number not found');
  }
}
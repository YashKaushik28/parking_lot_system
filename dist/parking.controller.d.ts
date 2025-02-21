import { ParkingLotService } from './parking.service';
export declare class ParkingLotController {
    private readonly parkingLotService;
    constructor(parkingLotService: ParkingLotService);
    initializeParkingLot(noOfSlots: number): {
        totalSlots: number;
    };
    expandParkingLot(additionalSlots: number): {
        totalSlots: number;
    };
    allocateParkingSlot(carRegistrationNo: string, color: string): {
        slotNumber: number;
    };
    getRegistrationNumbersByColor(color: string): string[];
    getSlotNumbersByColor(color: string): number[];
    freeParkingSlot(slotNumber?: number, carRegistrationNo?: string): {
        freedSlotNumber: number;
    };
    getOccupiedSlots(): {
        slotNumber: number;
        carRegistrationNo: string;
        color: string;
    }[];
    getSlotNumberByRegistrationNumber(carRegistrationNo: string): number;
}

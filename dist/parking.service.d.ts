export declare class ParkingLotService {
    private parkingSlots;
    private availableSlots;
    private totalSlots;
    initializeParkingLot(noOfSlots: number): {
        totalSlots: number;
    };
    expandParkingLot(additionalSlots: number): {
        totalSlots: number;
    };
    allocateParkingSlot(carRegistrationNo: string, color: string): {
        slotNumber: number;
    };
    freeParkingSlot(slotNumber?: number, carRegistrationNo?: string): {
        freedSlotNumber: number;
    };
    getOccupiedSlots(): {
        slotNumber: number;
        carRegistrationNo: string;
        color: string;
    }[];
    getRegistrationNumbersByColor(color: string): string[];
    getSlotNumbersByColor(color: string): number[];
    getSlotNumberByRegistrationNumber(carRegistrationNo: string): number;
}

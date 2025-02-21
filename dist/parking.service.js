"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotService = void 0;
const mnemonist_1 = require("mnemonist");
const common_1 = require("@nestjs/common");
let ParkingLotService = class ParkingLotService {
    parkingSlots = new Map();
    availableSlots = new mnemonist_1.MinHeap();
    totalSlots = 0;
    initializeParkingLot(noOfSlots) {
        this.totalSlots = noOfSlots;
        this.parkingSlots.clear();
        this.availableSlots.clear();
        for (let i = 1; i <= noOfSlots; i++) {
            this.availableSlots.push(i);
        }
        return { totalSlots: this.totalSlots };
    }
    expandParkingLot(additionalSlots) {
        this.totalSlots += additionalSlots;
        for (let i = this.totalSlots - additionalSlots + 1; i <= this.totalSlots; i++) {
            this.availableSlots.push(i);
        }
        return { totalSlots: this.totalSlots };
    }
    allocateParkingSlot(carRegistrationNo, color) {
        if (this.availableSlots.size === 0) {
            throw new Error('Parking lot is full');
        }
        const slotNumber = this.availableSlots.pop();
        if (slotNumber === undefined) {
            throw new Error('No available slots');
        }
        this.parkingSlots.set(slotNumber, { carRegistrationNo, color });
        return { slotNumber };
    }
    freeParkingSlot(slotNumber, carRegistrationNo) {
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
    getOccupiedSlots() {
        return Array.from(this.parkingSlots.entries()).map(([slotNumber, car]) => ({
            slotNumber,
            ...car,
        }));
    }
    getRegistrationNumbersByColor(color) {
        return Array.from(this.parkingSlots.values())
            .filter(car => car.color === color)
            .map(car => car.carRegistrationNo);
    }
    getSlotNumbersByColor(color) {
        return Array.from(this.parkingSlots.entries())
            .filter(([_, car]) => car.color === color)
            .map(([slotNumber]) => slotNumber);
    }
    getSlotNumberByRegistrationNumber(carRegistrationNo) {
        for (const [slotNumber, car] of this.parkingSlots.entries()) {
            if (car.carRegistrationNo === carRegistrationNo) {
                return slotNumber;
            }
        }
        throw new Error('Car with given registration number not found');
    }
};
exports.ParkingLotService = ParkingLotService;
exports.ParkingLotService = ParkingLotService = __decorate([
    (0, common_1.Injectable)()
], ParkingLotService);
//# sourceMappingURL=parking.service.js.map
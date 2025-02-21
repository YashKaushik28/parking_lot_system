"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLotController = void 0;
const common_1 = require("@nestjs/common");
const parking_service_1 = require("./parking.service");
let ParkingLotController = class ParkingLotController {
    parkingLotService;
    constructor(parkingLotService) {
        this.parkingLotService = parkingLotService;
    }
    initializeParkingLot(noOfSlots) {
        return this.parkingLotService.initializeParkingLot(noOfSlots);
    }
    expandParkingLot(additionalSlots) {
        return this.parkingLotService.expandParkingLot(additionalSlots);
    }
    allocateParkingSlot(carRegistrationNo, color) {
        return this.parkingLotService.allocateParkingSlot(carRegistrationNo, color);
    }
    getRegistrationNumbersByColor(color) {
        return this.parkingLotService.getRegistrationNumbersByColor(color);
    }
    getSlotNumbersByColor(color) {
        return this.parkingLotService.getSlotNumbersByColor(color);
    }
    freeParkingSlot(slotNumber, carRegistrationNo) {
        return this.parkingLotService.freeParkingSlot(slotNumber, carRegistrationNo);
    }
    getOccupiedSlots() {
        return this.parkingLotService.getOccupiedSlots();
    }
    getSlotNumberByRegistrationNumber(carRegistrationNo) {
        return this.parkingLotService.getSlotNumberByRegistrationNumber(carRegistrationNo);
    }
};
exports.ParkingLotController = ParkingLotController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('no_of_slots')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "initializeParkingLot", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)('additional_slots')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "expandParkingLot", null);
__decorate([
    (0, common_1.Post)('park'),
    __param(0, (0, common_1.Body)('car_registration_no')),
    __param(1, (0, common_1.Body)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "allocateParkingSlot", null);
__decorate([
    (0, common_1.Get)('registration_numbers/:color'),
    __param(0, (0, common_1.Param)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "getRegistrationNumbersByColor", null);
__decorate([
    (0, common_1.Get)('slot_numbers/:color'),
    __param(0, (0, common_1.Param)('color')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "getSlotNumbersByColor", null);
__decorate([
    (0, common_1.Delete)('clear'),
    __param(0, (0, common_1.Body)('slot_number')),
    __param(1, (0, common_1.Body)('car_registration_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "freeParkingSlot", null);
__decorate([
    (0, common_1.Get)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "getOccupiedSlots", null);
__decorate([
    (0, common_1.Get)('slot_number/:car_registration_no'),
    __param(0, (0, common_1.Param)('car_registration_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ParkingLotController.prototype, "getSlotNumberByRegistrationNumber", null);
exports.ParkingLotController = ParkingLotController = __decorate([
    (0, common_1.Controller)('parking-lot'),
    __metadata("design:paramtypes", [parking_service_1.ParkingLotService])
], ParkingLotController);
//# sourceMappingURL=parking.controller.js.map
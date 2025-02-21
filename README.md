# Parking Lot System API Documentation

## Endpoints

### Initialize Parking Lot
- **POST** `/parking-lot`
- **Body**: `{ "no_of_slots": 10 }`
- **Response**: `{ "total_slots": 10 }`

### Expand Parking Lot
- **PATCH** `/parking-lot`
- **Body**: `{ "additional_slots": 5 }`
- **Response**: `{ "total_slots": 15 }`

### Allocate Parking Slot
- **POST** `/parking-lot/park`
- **Body**: `{ "car_registration_no": "KA-01-AB-1234", "color": "Red" }`
- **Response**: `{ "slot_number": 1 }`

### Get Registration Numbers by Color
- **GET** `/parking-lot/registration_numbers/:color`
- **Response**: `["KA-01-AB-1234", "KA-01-AB-5678"]`

### Get Slot Numbers by Color
- **GET** `/parking-lot/slot_numbers/:color`
- **Response**: `[1, 2]`

### Free Parking Slot
- **DELETE** `/parking-lot/clear`
- **Body**: `{ "slot_number": 1 }` or `{ "car_registration_no": "KA-01-AB-1234" }`
- **Response**: `{ "freed_slot_number": 1 }`

### Get Occupied Slots
- **GET** `/parking-lot/status`
- **Response**: `[{ "slot_number": 1, "car_registration_no": "KA-01-AB-1234", "color": "Red" }]`

### Get Slot Number by Registration Number
- **GET** `parking-lot/slot_number/:car_registration_no`
- **Response**: `1`
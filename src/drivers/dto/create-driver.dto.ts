export class CreateDriverDto {
  name: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  cnhNumber: string;
  cnhCategory: string;
  antt: string;
  anttValidity: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleYear: string;
  vehiclePlate: string;
  experience: number | null;
  workingAreas: string;
  availability: string;
  notes: string;
}

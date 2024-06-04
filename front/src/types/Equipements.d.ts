import { Checkpoint } from "./Checkpoints";
export interface Equipment {
  id: string;
  name: string;
  building: string;
  domain: string;
  niveau: string;
  local: string;
  photo: string;
  brand: string;
  model: string;
  serialNumber: string;
  quantity: string;
  status: string;
  notes: string;
  nbFaults: string;
}

export interface EquipmentDetails extends Equipment {
  checkpoints?: Checkpoint[];
}

export interface EquipmentInfos {
  name: string;
  brand: string;
  local: string;
}

export interface EquipmentCharacteristics {
  status: string;
  niveau: string;
  model: string;
}

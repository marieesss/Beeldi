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
    quantity: number;
    status: string;
    notes: string;
    nbFaults: number;
  }

  export interface EquipmentDetails extends Equipment {
    checkpoints?: Checkpoint[];
  }
export { Checkpoint };


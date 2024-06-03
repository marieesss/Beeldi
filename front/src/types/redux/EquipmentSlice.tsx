import store from "../../redux/store";
import { Equipment } from "../Equipements";

export interface EquipmentSlice {
  isLoading: boolean;
  equipments: Array<Equipment> | [];
  equipmentsFiltered: Array<Equipment> | [];
  IsSuccess?: boolean | null;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

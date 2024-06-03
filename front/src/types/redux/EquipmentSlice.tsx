import store from "../../redux/store";
import { Equipment } from "../Equipements";

export interface EquipmentSlice {
    isLoading: boolean,
    equipments? : Array<Equipment> | [],
    equipemntsFiltered :  Array<Equipment> | [],
    IsSuccess? : boolean | null
  }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

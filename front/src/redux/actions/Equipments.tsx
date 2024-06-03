import { createAsyncThunk } from "@reduxjs/toolkit";
import EquipmentsService from "../../data/services/EquipmentService";
import { Equipment } from "../../types/Equipements";

export const getEquipments = createAsyncThunk<Equipment[], void, { rejectValue: string }>(
  'equipments/get',
  async (_, thunkApi) => { 
    try {
      const service = EquipmentsService();  
      const res = await service.getEquipments();  
      return res;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message); 
    }
  }
);

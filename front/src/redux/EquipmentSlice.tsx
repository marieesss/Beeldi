
import { createSlice } from '@reduxjs/toolkit'
import { EquipmentSlice } from '../types/redux/EquipmentSlice';
import { getEquipments } from './actions/Equipments';
import { RootState } from '../types/redux/EquipmentSlice';


const initialState: EquipmentSlice = {
    isLoading: false,
    equipments : [],
    equipemntsFiltered : [], 
    IsSuccess:false
}


  export const EquipmentsSlice = createSlice({
    name: 'equipments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getEquipments.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(getEquipments.fulfilled, (state, action) => {
          state.isLoading = false;
          // store data from Firebase
          state.equipments = action.payload
          state.IsSuccess = true;
        })
        .addCase(getEquipments.rejected, (state) => {
          state.isLoading = false;
          state.IsSuccess = false;
        })
        
    },

  })

  export const selectEquipments = (state: RootState) => state.equipement.equipments;

  export const selectIsSuccess = (state: RootState) => state.equipement.IsSuccess;

  export const selectIsLoading = (state: RootState) => state.equipement.isLoading;



  export default EquipmentsSlice.reducer
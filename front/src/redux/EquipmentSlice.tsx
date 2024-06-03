import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EquipmentSlice } from "../types/redux/EquipmentSlice";
import { getEquipments } from "./actions/Equipments";
import { RootState } from "../types/redux/EquipmentSlice";

const initialState: EquipmentSlice = {
  isLoading: false,
  equipments: [],
  equipmentsFiltered: [],
  IsSuccess: false,
};

export const EquipmentsSlice = createSlice({
  name: "equipments",
  initialState,
  reducers: {
    filterEquipments(state, action: PayloadAction<string>) {
      const query = action.payload.toLowerCase();
      // Filter to retrieve only object that match by name or domain
      state.equipmentsFiltered = state.equipments.filter(
        (equipment) =>
          equipment.name.toLowerCase().includes(query) ||
          equipment.domain.toLowerCase().includes(query),
      );
    },
    // Reset the equipement array
    // Used when there is no longer filter
    clearFilter(state) {
      state.equipmentsFiltered = initialState.equipmentsFiltered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEquipments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEquipments.fulfilled, (state, action) => {
        state.isLoading = false;
        // store data from Firebase
        state.equipments = action.payload || [];
        state.IsSuccess = true;
      })
      .addCase(getEquipments.rejected, (state) => {
        state.isLoading = false;
        state.IsSuccess = false;
      });
  },
});

export const selectEquipments = (state: RootState) =>
  state.equipement.equipments;
export const selectFilteredEquipments = (state: RootState) =>
  state.equipement.equipmentsFiltered;

export const selectIsSuccess = (state: RootState) => state.equipement.IsSuccess;

export const selectIsLoading = (state: RootState) => state.equipement.isLoading;

export const { filterEquipments, clearFilter } = EquipmentsSlice.actions;

export default EquipmentsSlice.reducer;

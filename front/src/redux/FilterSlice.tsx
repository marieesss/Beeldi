import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types/redux/EquipmentSlice";
import { Categories, Filter } from "../types/redux/FilterSlice";

const initialState: Filter = {
  search  :"",
  categories : []
};

export const FilterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    clearFilter(state) {
        state.categories = initialState.categories
        state.search = initialState.search
    },
    removeOneFilter(state, action: PayloadAction<string>) {
      state.categories = state.categories.filter((categorie)=> categorie.keyFilter !== action.payload)
  },
    clearSearch(state) {
        state.search = initialState.search;
      },
    newFilter(state, action: PayloadAction<{ keyFilter: string, value: string | number }>) {
      // Remove old filter
      state.categories = state.categories.filter((categorie) => categorie.keyFilter !== action.payload.keyFilter);
      
      // Add new filter
      const newFilter = { keyFilter: action.payload.keyFilter, value: action.payload.value } as Categories;
      state.categories = [...state.categories, newFilter]; 
    },
    newSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  }
});

export const selectFilters = (state: RootState) =>state.filter.categories;
export const selectSearch = (state: RootState) =>state.filter.search;

export const { newFilter, clearFilter, newSearch, clearSearch, removeOneFilter} = FilterSlice.actions;


export default FilterSlice.reducer;

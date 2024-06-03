// src/stateStore.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import EquipmentSlice from "./EquipmentSlice";
import { AppDispatch, RootState } from "../types/redux/EquipmentSlice";

// Combine reducers to configure the store
const store = configureStore({
  reducer: {
    equipement: EquipmentSlice, 
  }
})

export const useAppDispatch = () => useDispatch<AppDispatch>() 
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 



export default store
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model X", "Model 3", "Model X", "Model Y", "Model S"],
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

export const selectCars = (state) => state.car.cars;

export default carSlice.reducer;

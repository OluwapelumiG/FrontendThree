import { createSlice } from '@reduxjs/toolkit';

const studentsSlice = createSlice({
  name: 'students',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    }
  },
});

export const { increment, decrement} = studentsSlice.actions;
export default studentsSlice.reducer;
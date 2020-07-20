import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    aTest: {},
  },
  reducers: {
    updateTest: (state, action) => {
      if (action.payload) {
        state.aTest.anotherTest = "setbyreduxdispatch";
      } else {
          state.aTest.anotherTest = "aTest"
      }
    },
  },
});

export const updateTestAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(updateTest(amount));
  }, 1000);
};

export const selectTest = (state) => state.aTest;

export const { updateTest } = testSlice.actions;

export default testSlice.reducer;

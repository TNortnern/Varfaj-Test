import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import testReducer from '../features/testSlice';
import timerSlice from '../slices/timerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    test: testReducer,
    timer: timerSlice,
  },
});

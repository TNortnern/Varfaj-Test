import { configureStore } from '@reduxjs/toolkit';
import timerSlice from '../slices/timerSlice';

export default configureStore({
  reducer: {
    timer: timerSlice,
  },
});

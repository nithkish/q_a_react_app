import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import questionAnswersReducer from '../features/questionAnswers/questionAnswersSlice'

export const store = configureStore({
  reducer: {
    questionAnswers: questionAnswersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

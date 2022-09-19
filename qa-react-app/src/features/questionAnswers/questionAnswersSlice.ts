import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../app/store";

export interface QA {
  id: number;
  question: string;
  answer: string;
}
export interface QAState {
  questions: QA[];
  isSortActive: boolean;
}

const initialState: QAState = {
  questions: [
    {
      id: 0,
      question: "How to add a question?",
      answer:
        'Just click on "+ Create Question" button above, and fill the form.',
    },
  ],
  isSortActive: false,
};

export const questionAnswersSlice = createSlice({
  name: "questionanswer",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    saveQuestion: (state, action) => {
      const index = state.questions.findIndex(
        (question) => question.id == action.payload.id
      );
      state.questions.splice(index, 1, action.payload);
    },
    addSorting: (state, action) => {
      if (action.payload) {
        state.questions.sort((a, b) => a.question.localeCompare(b.question));
        state.isSortActive = true;
      } else {
        state.questions.sort((a, b) => b.question.localeCompare(a.question));
        state.isSortActive = false;
      }
    },
    resetAll: (state) => {
      state.questions.splice(0);
    },
    deleteQuestion: (state, action) => {
      const index = state.questions.findIndex(
        (question) => question.id == action.payload.id
      );
      state.questions.splice(index, 1);
      console.log(state.questions);
    },
  },
});

export const {
  addQuestion,
  addSorting,
  saveQuestion,
  resetAll,
  deleteQuestion,
} = questionAnswersSlice.actions;
export const questionsData = (state: RootState) =>
  state.questionAnswers.questions;
export const isSortActive = (state: RootState) =>
  state.questionAnswers.isSortActive;

export default questionAnswersSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isAnswerCorrect } from '../../game';
import { NameSpace, FILM_COUNT_PER_STEP } from '../../const';
import { FilmsProcess } from '../../types/state';
import { Question, UserAnswer } from '../../types/question';

const initialState: FilmsProcess = {
  filmsCount: 0,
  renderedFilmsCount: 0,
  genre: 'All genres',
};

const STEP_COUNT = 1;

export const gameProcess = createSlice({
  name: NameSpace.Films,
  initialState,
  reducers: {
    renderedFilmsInc, (state) => {
      const filmCount = state.films.length;
      const newRenderedFilmsCount = Math.min(filmCount, state.renderedFilmsCount + FILM_COUNT_PER_STEP);
      state.renderedFilmsCount = newRenderedFilmsCount;
    },
    renderedFilmsReset: (state) => {
      state.renderedFilmsCount = Math.min(state.films.length, FILM_COUNT_PER_STEP);
    },
    resetGame: (state) => {
      state.mistakes = 0;
      state.step = FIRST_GAME_STEP;
    },
  },
});

export const {incrementStep, checkUserAnswer, resetGame} = gameProcess.actions;

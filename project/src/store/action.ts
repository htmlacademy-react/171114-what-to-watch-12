import { createAction } from '@reduxjs/toolkit';

export const renderedFilmsInc = createAction('renderedFilmsInc');
export const renderedFilmsReset = createAction('renderedFilmsReset');
export const filmsCountSet = createAction<{filmsCount: number}>('filmCountSet');

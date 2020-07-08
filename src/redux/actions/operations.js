export const ADD_NUMBER = 'ADD_NUMBER';
export const ADD_OPERATION = 'ADD_OPERATION';
export const CLEAN_DISPLAY = 'CLEAN_DISPLAY';
export const RUN_OPERATION = 'RUN_OPERATION';

export const addNumber = (number) => ({
  type: ADD_NUMBER,
  number,
});

export const addOperation = (operation) => ({
  type: ADD_OPERATION,
  operation,
});

export const cleanDisplay = () => ({
  type: CLEAN_DISPLAY,
});

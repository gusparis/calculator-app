import { ADD_NUMBER, ADD_OPERATION, CLEAN_DISPLAY } from '../actions';

const initialState = {
  firstOperand: undefined,
  operation: undefined,
  secondOperand: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NUMBER:
      if (state.operation) {
        let number = state.secondOperand ?? '';
        number = number.concat(action.number);
        return { ...state, secondOperand: number };
      }
      let number = state.firstOperand ?? '';
      number = number.concat(action.number);
      return { ...state, firstOperand: number };
    case ADD_OPERATION:
      return { ...state, operation: action.operation };
    case CLEAN_DISPLAY:
      return initialState;
    default:
      return state;
  }
};

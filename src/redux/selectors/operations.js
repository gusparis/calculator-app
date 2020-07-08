export const currentOperand = (state) =>
  !state.operations.operation
    ? state.operations.firstOperand
    : state.operations.secondOperand;

export const previousOperand = (state) =>
  state.operations.operation ? state.operations.firstOperand : '';

export const operation = (state) => state.operations.operation;

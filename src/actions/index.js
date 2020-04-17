export const increment = (incrementBy) => {
  return {
    type: "INCREMENT",
    payload: incrementBy,
  };
};
export const decrement = (decrementBy) => {
  return {
    type: "DECREMENT",
    payload: decrementBy,
  };
};

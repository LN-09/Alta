import { useReducer } from "react";

type CountState = {
  count: number;
};
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
// type ActionState = {
//   type: "increment" | "decrement" | "reset";
//   payload: number;
// };
type ActionState = UpdateAction | ResetAction;

const initialState = { count: 0 };
function reducer(state: CountState, action: ActionState) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        CLick to plus 10
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 10,
          })
        }
      >
        Click to - 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>
        CLick to reset
      </button>
    </>
  );
}

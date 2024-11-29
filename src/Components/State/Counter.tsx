import { useReducer } from "react";
type CountState = {
  count: number;
};
type ActionState = {
  type: string;
  payload: number;
};

const initialState = { count: 0 };
function reducer(state: CountState, action: ActionState) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
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
    </>
  );
}

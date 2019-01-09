// 액션
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 초기상태
const initialState = {
  count: 1
};

// 액션 생성자
export function increase() {
  return {
    type: INCREASE
  };
}

export function decrease() {
  return {
    type: DECREASE
  };
}

// 리듀서
export default function slider(state = initialState, action = {}) {
  switch (action.type) {
    case INCREASE:
      if (state.count === 3) {
        return {
          ...state,
          count: 1
        };
      }
      return {
        ...state,
        count: state.count + 1
      };
    case DECREASE:
      if (state.count === 1) {
        return {
          ...state,
          count: 3
        };
      }
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

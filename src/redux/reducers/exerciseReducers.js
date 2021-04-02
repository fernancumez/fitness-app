import {
  GET_EXERCISES,
  GET_EXERCISES_ERROR,
  CREATE_EXERCISE,
  CREATE_EXERCISE_ERROR,
} from "../types";

const initialState = {
  error: null,
  loading: true,
  exercises: [],
};

export const exerciseReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXERCISES:
      return {
        ...state,
        error: null,
        loading: false,
        exercises: action.payload,
      };

    case GET_EXERCISES_ERROR:
    case CREATE_EXERCISE_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case CREATE_EXERCISE:
      return {
        ...state,
        error: null,
        exercises: [...state.exercises, action.payload],
      };

    default:
      return state;
  }
};

import {
  GET_EXERCISES,
  GET_EXERCISES_ERROR,
  CREATE_EXERCISE,
  CREATE_EXERCISE_ERROR,
} from "../types";
import axios from "../../libs/axios";

export const getExercises = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/exercises");
      console.log(data);

      dispatch({ type: GET_EXERCISES, payload: data.docs });
    } catch (error) {
      dispatch({ type: GET_EXERCISES_ERROR, payload: error });
    }
  };
};

export const createExercises = (exerciseData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/exercises", exerciseData);

      dispatch({ type: CREATE_EXERCISE, payload: data.exercise });
    } catch (error) {
      dispatch({ type: CREATE_EXERCISE_ERROR, payload: error });
    }
  };
};

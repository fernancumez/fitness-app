import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import FatalError from "./500";
import Exercises from "./Exercises";
import Loading from "../components/Loading";
import { getExercises } from "../redux/actions/exerciseActions";

const ExercisesContainer = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.exercises.loading);

  useEffect(() => {
    if (!loading) return;

    (() => dispatch(getExercises()))();
  }, [loading, dispatch]);

  const exercises = useSelector((state) => state.exercises.exercises);
  const error = useSelector((state) => state.exercises.error);

  if (loading) return <Loading />;
  if (error) return <FatalError />;

  return <Exercises data={exercises} />;
};

export default ExercisesContainer;

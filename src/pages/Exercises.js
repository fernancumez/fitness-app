import React, { Fragment } from "react";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import ExerciseList from "../components/ExerciseList";

const Exercises = ({ data }) => (
  <Fragment>
    <Welcome username="fernando!" />
    <ExerciseList exercises={data} />
    <AddButton />
  </Fragment>
);

export default Exercises;

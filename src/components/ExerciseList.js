import React, { Fragment } from "react";
import Card from "./Card";

const ExerciseList = ({ exercises }) => (
  <Fragment>
    {exercises.map((exercise) => (
      <Card
        key={exercise._id}
        title={exercise.title}
        description={exercise.description}
        img={exercise.img}
        leftColor={exercise.leftColor}
        rightColor={exercise.rightColor}
      />
    ))}
  </Fragment>
);

export default ExerciseList;

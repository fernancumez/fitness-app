import React, { Fragment } from "react";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";
import { useState } from "react";
import ExerciseList from "../components/ExerciseList";

const Exercises = () => {
  const [data] = useState([
    {
      id: 1,
      title: "Technique Guides",
      description: "Learn amaaing street and calisthenics",
      img: require("../images/exercise.png"),
      leftColor: "#A74CF2",
      rightColor: "#617BFB",
    },
  ]);

  return (
    <Fragment>
      <Welcome username="fernado" />
      <ExerciseList exercises={data} />
      <AddButton />
    </Fragment>
  );
};

export default Exercises;

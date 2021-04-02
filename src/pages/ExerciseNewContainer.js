import React, { useState } from "react";
import ExerciseNew from "./ExerciseNew";
import Loading from "../components/Loading";
import FatalError from "./500";
import "../styles/ExerciseNew.css";

import { useDispatch } from "react-redux";
import { createExercises } from "../redux/actions/exerciseActions";

const ExerciseNewContainer = ({ history }) => {
  const initialState = {
    title: "",
    description: "",
    img: "",
    leftColor: "",
    rightColor: "",
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState(initialState);

  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      dispatch(createExercises(form));

      history.push("/exercise");
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <FatalError />;

  return (
    <ExerciseNew form={form} onChange={handleChange} onSubmit={handleSubmit} />
  );
};
export default ExerciseNewContainer;

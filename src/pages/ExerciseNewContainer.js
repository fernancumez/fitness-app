import React, { useState } from "react";
import ExerciseNew from "./ExerciseNew";
import Loading from "../components/Loading";
import FatalError from "./500";
import { API } from "../config";
import "../styles/ExerciseNew.css";

const ExerciseNewContainer = ({ history }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    img: "",
    leftColor: "",
    rightColor: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setLoading(true);

    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      };

      await fetch(`${API}/exercises`, config);
      setLoading(false);
      history.push("/exercise");
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

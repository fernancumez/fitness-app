import React, { useState } from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

const ExerciseNew = () => {
  const [form, setForm] = useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(form);
  };

  return (
    <div className="row">
      <div className="col-sm">
        <Card {...form} />
      </div>
      <div className="col-sm">
        <ExerciseForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
export default ExerciseNew;

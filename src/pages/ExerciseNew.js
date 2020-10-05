import React from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

const ExerciseNew = ({ form, onChange, onSubmit }) => (
  <div className="row ExerciseNew_Lateral_Spaces">
    <div className="col-sm ExerciseNew_Card_Space">
      <Card {...form} />
    </div>
    <div className="col-sm ExerciseNew_Form_Space">
      <ExerciseForm
        form={form}
        handleChange={onChange}
        handleSubmit={onSubmit}
      />
    </div>
  </div>
);

export default ExerciseNew;

import React from "react";

const ExerciseForm = ({ form, handleSubmit, handleChange }) => (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="img"
          name="img"
          value={form.img}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="left Color"
            name="leftColor"
            value={form.leftColor}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Right Color"
            name="rightColor"
            value={form.rightColor}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);

export default ExerciseForm;

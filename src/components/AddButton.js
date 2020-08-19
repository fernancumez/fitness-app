import React from "react";
import "../styles/AddButton.css";
import ButtonImg from "../images/add.png";
import { Link } from "react-router-dom";

const AddButton = () => (
  <Link to="/exercise/new">
    <img src={ButtonImg} alt="Fitness-Add" className="Fitness-Add" />
  </Link>
);

export default AddButton;

import React from "react";
import "../App.css";
import { userData } from "../utils/userData";

const Card = ({ count }) => {
  const props = userData[count];
  return (
    <div className="card">
      <h1 className="name">Name: {props.first_name + " " + props.last_name}</h1>
      <h2 className="email">Email: {props.email}</h2>
      <b className="gender">Gender: {props.gender}</b><br></br>
      <b className="ip">IP: {props.ip_address}</b>
    </div>
  );
};

export default Card;

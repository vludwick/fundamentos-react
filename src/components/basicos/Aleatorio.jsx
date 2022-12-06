/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default (props) => {
  return (
    <>
      <h2>Aleatório</h2>
      <h3>{Math.floor(Math.random() * (props.max + 1)) + props.min}</h3>
    </>
  );
};

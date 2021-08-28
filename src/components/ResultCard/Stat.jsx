import React from "react";

const Stat = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize: props.titleFontSize,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          fontSize: props.dataFontSize,
          fontWeight: "bold",
        }}
      >
        <a href={props.link}>{props.data}</a>
      </div>
    </div>
  );
};

export default Stat;

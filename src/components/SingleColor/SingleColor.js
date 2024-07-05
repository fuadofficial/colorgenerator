import React from "react";

function SingleColor({rgb, weight, index, hexColor}) {
  const bcg = rgb.join(",")
  const hexValue = `#${hexColor}`
  return (
    <article
      className="color color-light"
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hexValue}</p>
    </article>
  );
}

export default SingleColor;

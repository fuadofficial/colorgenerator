import React, { useState } from "react";
import SingleColor from "../SingleColor/SingleColor";
import Values from "values.js";

function Home() {
  const [list, setList] = useState(new Values("#f15025").all(10));
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      alert("This value not available");
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setColor(e.target.value)}
            type="text"
            placeholder="#f15025"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => (
          <SingleColor
            key={index}
            {...color}
            index={index}
            hexColor={color.hex}
          />
        ))}
      </section>
    </>
  );
}

export default Home;

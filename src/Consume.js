import React, { useState } from "react";
import { Link } from "react-router-dom";
//think i should have passed this down as a function into the items directly instead of making a child component
function Consume({ item }) {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>FINALLY A {item.toUpperCase()}</h1>
      <h2>
        {item}s consumed: {count}
      </h2>
      <button onClick={handleCount}>Consume</button>
      <br />
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </>
  );
}
export default Consume;

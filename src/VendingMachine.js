import React, { useState, useEffect } from "react";
import Item from "./Item";

function VendingMachine() {
  const [items, setItems] = useState(["coke", "sprite", "pretzels"]);

  return (
    <>
      <h1>Vending Machine</h1>
      <ul>
        {items.map((item) => (
          <Item key={item} name={item} setItems={setItems} />
        ))}
      </ul>
    </>
  );
}

export default VendingMachine;

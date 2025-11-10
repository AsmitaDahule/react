import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  function aChange() {
    setA(a + 1);
  }

   function bChange() {
    setB(b + 1);
  }

  useEffect(() => {
    console.log("use effect runnign ....");
  },[a])

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={aChange}>a</button>
      <button onClick={bChange}>b</button>
    </div>
  );
};

export default App;

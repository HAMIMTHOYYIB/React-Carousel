import React, { useState, useEffect } from "react";
import "./App.css";
import { userData } from "./utils/userData";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === userData.length - 1 ? 0 : prevCount + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <button className="carousel-button" onClick={() => setCount(count === 0 ? userData.length - 1 : count - 1)}>
        Prev
      </button>
      <div className="carousel">
        <Card count={count} />
      </div>
      <button className="carousel-button" onClick={() => setCount(count === userData.length - 1 ? 0 : count + 1)}>
        Next
      </button>
    </div>
  );
};

export default App;

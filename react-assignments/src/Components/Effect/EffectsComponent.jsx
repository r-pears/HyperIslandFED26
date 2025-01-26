import React, { useEffect, useState } from "react";
import "./EffectsComponent.css";
import MyStateComponent from "../MyStateComponent/MyStateComponent";

function EffectsComponent() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showMystate, setShowMystate] = useState(false); 

  useEffect(() => {
    setTimeout(() => {
      setData(["Item 1", "Item 2", "Item 3"]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Effects Component</h2>
      {showMystate ? (
        <MyStateComponent />
      ) : (
        <div>
          {isLoading ? <p>Loading...</p> : <ul>{data.map(item => <li key={item}>{item}</li>)}</ul>}
        </div>
      )}
      <button onClick={() => setShowMystate(!showMystate)}>
        {showMystate ? "Hide MyStateComponent" : "Show MyStateComponent"}
      </button>
    </div>
  );
}

export default EffectsComponent;

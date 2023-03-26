import React from "react";
import IslandList from "./IslandList";

export default function Island({ island, setIsland, count }) {
  function clicked() {
    setIsland(island);
  }

  return (
    <div className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {count[island.id - 1]}</p>
      <img onClick={clicked} src={island.img} alt={island.name} />
    </div>
  );
}

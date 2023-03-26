import "./App.css";
import Header from "./Components/Header";
import IslandForm from "./Components/IslandForm";
import IslandList from "./Components/IslandList";
import { useState } from "react";
import islands from "./data/islands";

function App() {
  let isl = {
    name: "Boubyan",
    img: "http://photos.wikimapia.org/p/00/02/20/48/92_big.jpg",
  };
  const [island, setIsland] = useState(isl);
  const arr = islands.map((x) => 0);

  const [count, setCount] = useState(arr);

  return (
    <div>
      <Header />

      <div className="homePage">
        <IslandList setIsland={setIsland} count={count} />
        <IslandForm island={island} setCount={setCount} count={count} />
      </div>
    </div>
  );
}

export default App;

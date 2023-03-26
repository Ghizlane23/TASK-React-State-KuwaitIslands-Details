import { useState } from "react";

export default function IslandForm({ island, setCount, count }) {
  const [input, setInput] = useState({ name: "", phone: "" });

  function handleName(e) {
    setInput({ ...input, name: e.target.value });
  }
  function handlePhone(e) {
    setInput({ ...input, phone: e.target.value });
  }

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input
        onChange={handleName}
        value={input.name}
        type="text"
        placeholder="Type Full Name"
      />
      <input
        onChange={handlePhone}
        value={input.phone}
        type="number"
        placeholder="Type Phone Number"
      />
      <button
        className="book"
        onClick={() => {
          if (
            window.confirm(
              `Are you sure you want to book to ${island.name}  with the Name: ${input.name} and , phone: ${input.phone}`
            )
          ) {
            const newCount = count.map((x) => x);
            newCount[island.id - 1] = newCount[island.id - 1] + 1;
            setCount(newCount);
          }
        }}
      >
        Book for today!
      </button>
    </div>
  );
}

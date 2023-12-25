import React, {useState} from "react";
import Counter from "./components/Counter.jsx"
import HourToMinutes from "./components/HourToMinutes.jsx";
import KmToMiles from "./components/KmToMiles.jsx";
import Effect from "./components/Effect.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [selectedOption, setSelectedOption] = useState("HTM");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  }
  return (
    <div>
      <TodoList />
      <Effect />
      <Counter />
      <select id="select" onChange={handleSelectChange} value={selectedOption}>
        <option value="HTM">HourToMin</option>
        <option value="KTM">KmToMiles</option>
      </select>
      <div>
        {selectedOption === "HTM" && <HourToMinutes />}
        {selectedOption === "KTM" && <KmToMiles />}
      </div>
    </div>
  );
}

export default App;

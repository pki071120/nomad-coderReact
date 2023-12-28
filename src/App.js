import React, {useState} from "react";
import Counter from "./components/Counter.jsx"
import HourToMinutes from "./components/HourToMinutes.jsx";
import KmToMiles from "./components/KmToMiles.jsx";
import Effect from "./components/Effect.jsx";
import TodoList from "./components/TodoList.jsx";
import Coin from "./components/Coin.jsx";

function App() {
  const [selectedOption, setSelectedOption] = useState("Home");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div>
      <select id="select" onChange={handleSelectChange} value={selectedOption}>
        <option value="HTM">HourToMin</option>
        <option value="KTM">KmToMiles</option>
        <option value="Counter">Counter</option>
        <option value="Effect">Effect</option>
        <option value="Todo">Todo List</option>
        <option value="Coin">Coin</option>
      </select>
      <div>
        {selectedOption === "HTM" && <HourToMinutes />}
        {selectedOption === "KTM" && <KmToMiles />}
        {selectedOption === "Counter" && <Counter />}
        {selectedOption === "Effect" && <Effect />}
        {selectedOption === "Todo" && <TodoList />}
        {selectedOption === "Coin" && <Coin />}
      </div>
    </div>
  );
}

export default App;

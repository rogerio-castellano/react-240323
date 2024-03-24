import "./App.css";
import Counter from "./Counter";
import Advices from "./Advices";
import Highlight from "./Highlight";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import { useState } from "react";

const App = () => {
  const [advices, setAdvices] = useState([]);
  const addAdvice = async () => {
    while (true) {
      const res = await fetch("https://api.adviceslip.com/advice");
      const slip = (await res.json()).slip;
      if (!advices.find((item) => item.id === slip.id)) {
        setAdvices((advices) => [...advices, slip]);
        break;
      }
    }
  };

  const clearAdvices = () => {
    setAdvices([]);
  };

  const removeLastAdvice = () => {
    if (advices.length > 0) {
      setAdvices([...advices.slice(0, -1)]);
    }
  };

  return (
    <>
      <h1>Advices</h1>
      {true && <Highlight>They are really interesting.</Highlight>}
      <Counter advicesLength={advices.length} />
      <Advices
        advices={advices}
        addAdvice={addAdvice}
        clearAdvices={clearAdvices}
        removeLastAdvice={removeLastAdvice}
      />
    </>
  );
};

export default App;

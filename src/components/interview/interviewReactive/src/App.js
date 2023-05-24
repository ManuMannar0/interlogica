import React, { useEffect, useState } from "react";
import QuestionSection from "./components/QuestionSection";
import Results from "./components/Results";
import db from "./data/db.json";
import "./styles.scss";

const App = () => {
  const [index, setIndex] = useState(0);
  const goToNextQuestion = () => setIndex(index + 1);
  const x = () => 'text';
  console.log(goToNextQuestion)
  return (
    <div className="App">
      <>
        <h2>Test: come si fa la cacio e pepe?</h2>
        <h3>Rispondi alle domande</h3>
        <div className="quiz">
          <QuestionSection
            data={db[index]}
            goToNextQuestion={goToNextQuestion}
          />
        </div>
      </>
    </div>
  );
};

export default App;

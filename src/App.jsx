import Nav from "./components/Nav";
import { Display } from "./components/Display";
import { useEffect, useState } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxscore] = useState(0);

  useEffect(() => {
    let portrait = window.matchMedia("(orientation: portrait)");

    portrait.addEventListener("change", function (e) {
      if (e.matches) {
        alert("Debes girar el telefono para poder jugar bien este juego")
      } 
    });
  }, []);

  useEffect(() => {
    score === 8 ? alert("Ganaste!!!!!!!! 🔥🔥😊🎆🎆🎇🎈") : "";

    score > maxScore ? setMaxscore(score) : "";
  }, [score]);

  return (
    <div className="App h-full ">
      <Nav score={score} maxScore={maxScore} />

      <Display setScore={setScore} score={score} />
    </div>
  );
}

export default App;

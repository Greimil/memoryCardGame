import React from "react";

export default function Nav(props) {
  const {maxScore, score} = props
    return (
    <nav className="bg-primary items-center flex justify-around h-[5%]" >
      <h3 className="font-bold" >Memorycard Game</h3>
      <div className="flex gap-3 font-semibold " >
        <span> Puntuacion: <strong>{score}</strong>  </span> <span> Puntuacion maxima: <strong>{maxScore}</strong> </span>{" "}
      </div>
    </nav>
  );
}

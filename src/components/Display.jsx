import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import TommyIMG from "../assets/imgs/characthers imgs/tommyVercetti.webp";
import lanceIMG from "../assets/imgs/characthers imgs/lance.jpg";
import paulIMG from "../assets/imgs/characthers imgs/paul.webp";
import oneIMG from "../assets/imgs/characthers imgs/one.webp";
import mercedesIMG from "../assets/imgs/characthers imgs/mercedes.jpg";
import diegoIMG from "../assets/imgs/characthers imgs/diegoMendez.webp";
import diazIMG from "../assets/imgs/characthers imgs/diaz.jpg";
import auntieIMG from "../assets/imgs/characthers imgs/auntie.png";

let infoObj = [
  { name: "Auntie", pic: auntieIMG },
  { name: "Diaz", pic: diazIMG },
  { name: "Diego", pic: diegoIMG },
  { name: "Mercedes", pic: mercedesIMG },
  { name: "One", pic: oneIMG },
  { name: "Paul", pic: paulIMG },
  { name: "Lance", pic: lanceIMG },
  { name: "Tommy", pic: TommyIMG },
];

export const Display = (props) => {
  const { score, setScore } = props;

  const [caractherActive, setcharacterActive] = useState({
    Auntie: false,
    Diaz: false,
    Diego: false,
    Mercedes: false,
    One: false,
    Paul: false,
    Lance: false,
    Tommy: false,
  });

  useEffect(() => {
    infoObj.sort(function () {
      return Math.random() - 0.5;
    });
  }, [caractherActive]);

  return (
    <div className=" h-[90%] w-[95%] m-auto  flex justify-around items-center flex-wrap gap-2 ">
      {infoObj.map((current, index) => {
        return (
          <Card
            score={score}
            setScore={setScore}
            setcharacterActive={setcharacterActive}
            caractherActive={caractherActive}
            key={index}
            name={current.name}
            imgLink={current.pic}
          />
        );
      })}
    </div>
  );
};

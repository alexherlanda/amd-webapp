import React from "react";
import { RankingTable, SpeakerCard } from "../../components";
import debater1 from "./data/debater1.png";
import debater2 from "./data/debater2.png";
import debater3 from "./data/debater3.png";
import "./Ranking.css";

const dataSource = [
  { id: 2, name: "Marcela Gómez", score: 24 },
  { id: 3, name: "Luisa Velázquez", score: 21 },
  { id: 4, name: "Britney Alcántara", score: 15 },
  { id: 5, name: "Benjamín Vigueras", score: 14 },
  { id: 6, name: "Daniel Kelly", score: 14 },
  { id: 7, name: "Daniel Mimila", score: 14 },
  { id: 8, name: "Valeria Corona ", score: 11 },
  { id: 9, name: "Gemma Guerrero", score: 11 },
  { id: 10, name: "Alexandro Prieto", score: 8 },
];

const Ranking = () => {
  return (
    <>
      <div className="ranking-bar">
        <SpeakerCard
          className="visibility"
          imageSrc={debater2}
          speakerName={dataSource[1].name}
          imgProps={{ width: 127 }}
        />
        <SpeakerCard
          principal
          imageSrc={debater1}
          speakerName={dataSource[3].name}
          imgProps={{ width: 212, top: -10 }}
        />
        <SpeakerCard
          className="visibility"
          imageSrc={debater3}
          speakerName={dataSource[2].name}
          imgProps={{ width: 201, top: 2 }}
        />
      </div>
      <div className="ranking__table-container">
        <RankingTable dataSource={dataSource} />
      </div>
    </>
  );
};

export default Ranking;

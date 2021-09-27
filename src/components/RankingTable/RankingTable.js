import React from "react";
import "./RankingTable.css";

const RankingTable = ({ dataSource }) => {
  return (
    <table className="ranking-table">
      <tbody>
        {dataSource.map((speaker, index) => (
          <tr key={speaker.name}>
            <td> {index + 1} </td>
            <td> {speaker.name} </td>
            <td> {`${speaker.score} pts`} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RankingTable;

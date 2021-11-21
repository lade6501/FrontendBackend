import React, { useEffect, useState } from "react";
import "./PlayerDetails.css";

const PlayerDetails = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers();
  }, []);

  const getPlayers = async () => {
    const response = await fetch("http://localhost:4000/aliens");
    setPlayers(await response.json());
  };
  return (
    <React.Fragment>
      <div className="container">
        <table className="table  table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sport</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p) => {
              return (
                <tr>
                  <td>{p.name}</td>
                  <td>{p.sport}</td>
                  <td>{p.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default PlayerDetails;

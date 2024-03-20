import React from "react";
import "./CompetitionViewer.css";
import { useState, useEffect } from "react";

import MatchEdit from "./MatchEdit";

const CompetitionViewer = ({ saveFunc, pointer }) => {
  const [competition, setCompetition] = useState(null);

  const [creatingMatch, setCreatingMatch] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem(pointer);
    if (storedValue) {
      setCompetition(JSON.parse(storedValue));
    }
  }, []);

  return (
    <div>
      <h2>{competition && competition.name}</h2>
      <ul>
        {competition &&
          competition.teams.map((team) => <li key={team}>{team}</li>)}
      </ul>
      <div id="matches">
        <button>Add Match</button>
      </div>
      <button onClick={saveFunc}> Save </button>
    </div>
  );
};

export default CompetitionViewer;

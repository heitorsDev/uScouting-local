import React, { useState, useEffect } from "react";
import "./CompetitionViewer.css";
import Scoring from "./Scoring";

const CompetitionViewer = ({ saveFunc, pointer }) => {
  const [competition, setCompetition] = useState(null);
  const [creatingEditingMatch, setCreatingEditingMatch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    const storedValue = localStorage.getItem(pointer);
    if (storedValue) {
      setCompetition(JSON.parse(storedValue));
    }
  }, [pointer]);

  const handleCreateEditButton = (index) => {
    setCurrentIndex(index);
    setCreatingEditingMatch(true);
  };

  const handleExitEdit = () => {
    setCurrentIndex(null);
    setCreatingEditingMatch(false);
  };

  return (
    <div>
      {!creatingEditingMatch ? (
        <>
          <h2>{competition && competition.name}</h2>
          <ul>
            {competition &&
              competition.teams.map((team) => <li key={team}>{team}</li>)}
          </ul>
          <div id="matches">
            {competition &&
              competition.matches.map((match, index) => (
                <button
                  key={index}
                  onClick={() => handleCreateEditButton(index)}
                >
                  Match {index + 1}
                </button>
              ))}
            <button onClick={() => handleCreateEditButton(null)}>
              Add Match
            </button>
          </div>
          <button onClick={saveFunc}>Save</button>
        </>
      ) : (
        <Scoring
          index={currentIndex}
          pointer={pointer}
          saveFunc={handleExitEdit}
        />
      )}
    </div>
  );
};

export default CompetitionViewer;

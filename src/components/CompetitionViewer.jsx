import React, { useState, useEffect } from "react";
import "./CompetitionViewer.css";
import Scoring from "./Scoring";
import MatchEdit from "./MatchEdit";

const CompetitionViewer = ({ saveFunc, pointer }) => {
  const [competition, setCompetition] = useState(null);
  const [creatingEditingMatch, setCreatingEditingMatch] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [scoreBoard, setScoreBoard] = useState([]);

  useEffect(() => {
    const storedValue = localStorage.getItem(pointer);
    if (storedValue) {
      setCompetition(JSON.parse(storedValue));
    }
  }, [pointer]);

  useEffect(() => {
    if (competition) {
      let teams = competition.teams;
      let jsonTeams = teams.map((team) => ({ team: team, score: 0 }));

      competition.matches.forEach((match) => {
        if (match.blueAlliance.score > match.redAlliance.score) {
          match.blueAlliance.teams.forEach((team) => {
            let index = jsonTeams.findIndex((item) => item.team === team);
            if (index !== -1) {
              jsonTeams[index].score += 1;
            }

            console.log(jsonTeams);
          });
        } else if (match.blueAlliance.score < match.redAlliance.score) {
          match.redAlliance.teams.forEach((team) => {
            let index = jsonTeams.findIndex((item) => item.team === team);
            if (index !== -1) {
              jsonTeams[index].score += 1;
            }

            console.log(jsonTeams);
          });
        } else {
          match.blueAlliance.teams.forEach((team) => {
            let index = jsonTeams.findIndex((item) => item.team === team);
            if (index !== -1) {
              jsonTeams[index].score += 1;
            }

            console.log(jsonTeams);
          });
          match.redAlliance.teams.forEach((team) => {
            let index = jsonTeams.findIndex((item) => item.team === team);
            if (index !== -1) {
              jsonTeams[index].score += 1;
            }
          });
          console.log(jsonTeams);
        }
      });
      jsonTeams.sort((a, b) => b.score - a.score);
      setScoreBoard(jsonTeams);
    }
  }, [competition]);

  const handleCreateEditButton = (index) => {
    setCurrentIndex(index);
    setCreatingEditingMatch(true);
  };

  const handleExitEdit = () => {
    const storedValue = localStorage.getItem(pointer);
    if (storedValue) {
      setCompetition(JSON.parse(storedValue));
    }
    setCurrentIndex(null);
    setCreatingEditingMatch(false);
  };

  return (
    <div>
      {!creatingEditingMatch ? (
        <>
          <h2>{competition && competition.name}</h2>
          <ul id="scoreBoard">
            {scoreBoard.map((team, index) => (
              <li key={team.team}>
                <b>{index+1}</b> {team.team}
              </li>
            ))}
          </ul>
          <div id="matches">
            {competition &&
              competition.matches.map((match, index) => (
                <button
                  key={index}
                  onClick={() => handleCreateEditButton(index)}
                >
                  <MatchEdit index={index} pointer={pointer}></MatchEdit>
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

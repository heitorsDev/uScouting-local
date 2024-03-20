import React, { useState, useEffect } from "react";

export default function Scoring({ pointer, index, saveFunc }) {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [redAlliance, setRedAlliance] = useState([]);
  const [blueAlliance, setBlueAlliance] = useState([]);
  const [inputBlueTeam, setInputBlueTeam] = useState("");
  const [inputRedTeam, setInputRedTeam] = useState("");

  useEffect(() => {
    if (index !== null) {
      const currentStorage = JSON.parse(localStorage.getItem(pointer));
      if (currentStorage) {
        const match = currentStorage.matches[index];
        setRedScore(match.redAlliance.score);
        setRedAlliance(match.redAlliance.teams);
        setBlueScore(match.blueAlliance.score);
        setBlueAlliance(match.blueAlliance.teams);
      }
    }
  }, [index, pointer]);

  const handleRemoveRed = (index) => {
    const newArr = [...redAlliance];
    newArr.splice(index, 1);
    setRedAlliance(newArr);
  };

  const handleRemoveBlue = (index) => {
    const newArr = [...blueAlliance];
    newArr.splice(index, 1);
    setBlueAlliance(newArr);
  };

  const handleAddTeamRed = () => {
    if (inputRedTeam !== "" && redAlliance.length <= 2) {
      setRedAlliance([...redAlliance, inputRedTeam]);
      setInputRedTeam("");
    }
  };

  const handleAddTeamBlue = () => {
    if (inputBlueTeam !== "" && blueAlliance.length <= 2) {
      setBlueAlliance([...blueAlliance, inputBlueTeam]);
      setInputBlueTeam("");
    }
  };

  const testAddBlue = () => {
    setBlueScore(blueScore + 10);
  };

  const testAddRed = () => {
    setRedScore(redScore + 10);
  };

  const submitMatch = () => {
    const json = {
      blueAlliance: {
        teams: blueAlliance,
        score: blueScore,
      },
      redAlliance: {
        teams: redAlliance,
        score: redScore,
      },
    };
    let currentStorage = JSON.parse(localStorage.getItem(pointer));
    if (!currentStorage) currentStorage = { matches: [] };
    if (index !== null && index < currentStorage.matches.length) {
      currentStorage.matches[index] = json;
    } else {
      currentStorage.matches.push(json);
    }
    localStorage.setItem(pointer, JSON.stringify(currentStorage));
    saveFunc();
  };

  const listBlue = blueAlliance.map((team, index) => (
    <div key={index}>
      <div>{team}</div>{" "}
      <button onClick={() => handleRemoveBlue(index)}>-</button>
    </div>
  ));

  const listRed = redAlliance.map((team, index) => (
    <div key={index}>
      <div>{team}</div>{" "}
      <button onClick={() => handleRemoveRed(index)}>-</button>
    </div>
  ));

  return (
    <div>
      <h2>Blue teams</h2>
      {listBlue}
      <input
        type="text"
        placeholder="team"
        value={inputBlueTeam}
        onChange={(e) => setInputBlueTeam(e.target.value)}
      />
      <button onClick={handleAddTeamBlue}>Add team</button>
      <h2>Red teams</h2>
      {listRed}
      <input
        type="text"
        placeholder="team"
        value={inputRedTeam}
        onChange={(e) => setInputRedTeam(e.target.value)}
      />
      <button onClick={handleAddTeamRed}>Add team</button>
      <h2>Scores</h2>
      <button onClick={testAddRed}>Add Red</button> Red score: {redScore} <br />
      <button onClick={testAddBlue}>Add Blue</button> Blue score: {blueScore}
      <br />
      <button onClick={submitMatch}>Submit Match</button>
    </div>
  );
}

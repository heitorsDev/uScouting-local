import React, { useState, useEffect } from "react";



export default function Scoring({ bluescore, redscore, blueteams, redteams }) {
  const [redScore, setRedScore] = useState(redscore);

  useEffect(() => {
    setRedScore(redscore);
  }, [redscore]);

  const [blueScore, setBlueScore] = useState(bluescore);

  useEffect(() => {
    setBlueScore(bluescore);
  }, [bluescore]);

  const [redAlliance, setRedAlliance] = useState(redteams);
  
  useEffect(() => {
    setRedAlliance(redteams);
  }, [redteams]);

  const [blueAlliance, setBlueAlliance] = useState(blueteams);

  useEffect(() => {
    setBlueAlliance(blueteams);
  }, [blueteams]);

  const [inputBlueTeam, setInputBlueTeam] = useState("");
  const [inputRedTeam, setInputRedTeam] = useState("");



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

  // scoring debug NOT DEFINITIVE

  const testAddBlue = () => {
    setBlueScore(blueScore + 10);
  };
  const testAddRed = () => {
    setRedScore(redScore + 10);
  };


  const submitMatch = () => {

  }

  return (
    <div>
      <h2>blue teams</h2>
      {listBlue}
      <input
        type="text"
        placeholder="team"
        value={inputBlueTeam}
        onChange={(e) => setInputBlueTeam(e.target.value)}
      />
      <button onClick={handleAddTeamBlue}>add team</button>
      <h2>red teams</h2>
      {listRed}
      <input
        type="text"
        placeholder="team"
        value={inputRedTeam}
        onChange={(e) => setInputRedTeam(e.target.value)}
      />
      <button onClick={handleAddTeamRed}>add team</button>
      <h2>scores</h2>
      <button onClick={testAddRed}> add red</button>Red score: {redScore} <br />
      <button onClick={testAddBlue}> add Blue</button>Blue score: {blueScore}
      <br />
      <button onClick={submitMatch} >submit match</button>
    </div>
  );
}

import React, { useState } from "react";

export default function Scoring() {
    const [redScore, setRedScore] = useState(0);
    const [blueScore, setBlueScore] = useState(0);
    const [redAlliance,setRedAlliance] = useState(["agrotech", "techmakers"])
    const [blueAlliance,setBlueAlliance] = useState(["macawtech", "unimate"])

    const listBlue = blueAlliance.map(team => <div>{team}</div>);

    const [inputBlueTeam, setInputBlueTeam] = useState(null)

    const handleAddTeamBlue = () => {
        if (inputBlueTeam != null || inputBlueTeam!=""){
            setBlueAlliance([...blueAlliance, inputBlueTeam])
        }
    }

    const listRed = redAlliance.map(team => <div>{team}</div>);

    const [inputRedTeam, setInputRedTeam] = useState(null)
    
    const handleAddTeamRed = () => {
        if (inputRedTeam != null || inputRedTeam!=""){
            setRedAlliance([...redAlliance, inputRedTeam])
        }
    }


    return (


        <div>
            <h2>blue teams</h2>
            {listBlue}
            <input type="text" placeholder="team" onInput={e => setInputBlueTeam(e.target.value)}/><button onClick={handleAddTeamBlue}>add team</button>
            <h2>red teams</h2>
            {listRed}
            <input type="text" placeholder="team" onInput={e => setInputRedTeam(e.target.value)}/><button onClick={handleAddTeamRed}>add team</button>
            <h2>scores</h2>
            Red score: {redScore} <br />
            Blue score: {blueScore}
        </div>
    );
}

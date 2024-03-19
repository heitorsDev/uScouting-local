import React, { useState } from "react";

export default function CreateAcc({ reRender }) {
    const [name, setName] = useState("");
    const [team, setTeam] = useState("");
    const [teamNumber, setTeamNumber] = useState("");
    const [country, setCountry] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleTeamChange = (e) => setTeam(e.target.value);
    const handleTeamNumberChange = (e) => setTeamNumber(e.target.value);
    const handleCountryChange = (e) => setCountry(e.target.value);

    const saveData = () => {

        const json = {
            name: name,
            team: team,
            teamnumber: teamNumber,
            country: country
        }
        localStorage.setItem("account", JSON.stringify(json))
        localStorage.setItem("isNew",  false)
        localStorage.setItem("competitionPointers", JSON.stringify([]))
        reRender()
    }

    return (
        <>
            <input type="text" placeholder="name" value={name} onChange={handleNameChange} />
            <input type="text" placeholder="team" value={team} onChange={handleTeamChange} />
            <input type="text" placeholder="teamnumber" value={teamNumber} onChange={handleTeamNumberChange} />
            <input type="text" placeholder="country" value={country} onChange={handleCountryChange} />
            <button onClick={saveData}>create account</button>
        </>
    )
}

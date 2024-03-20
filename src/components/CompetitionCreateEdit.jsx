import React, { useState, useEffect } from "react";
import "./CompetitionCreateEdit.css";

export default function CompetitionCreateEdit({ pointer, name, teamlist, saveFunc }) {
  let isNew = pointer == null;

  const [localName, setLocalName] = useState("");
  const [localTeams, setLocalTeams] = useState([]);

  useEffect(() => {
    if (!isNew) {
      const currentData = JSON.parse(localStorage.getItem(pointer))
      setLocalName(currentData.name);
      setLocalTeams(currentData.teams);
    }
  }, [isNew]);




  const [currentTeamInput, setCurrentTeamInput] = useState("");

  const handleTeamInput = (e) => {
    setCurrentTeamInput(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setLocalName(value);
        break;
      case "teams":
        if (!localTeams.includes(currentTeamInput) && currentTeamInput !== "") {
          setLocalTeams([...localTeams, currentTeamInput]);
          setCurrentTeamInput(""); // Clear input after adding team
        }
        break;
      default:
        break;
    }
  };

  const changeTeam = (index) => (e) => {
    const list = [...localTeams];
    list[index] = e.target.value;
    setLocalTeams(list);
  };

  const saveComp = () =>{
    const comp = {
        name: localName,
        teams: localTeams,
        matches: [],
    }
    if (isNew){
        const currentStorage = JSON.parse(localStorage.getItem("competitionPointers"))
        let pointerNum = currentStorage.length
        pointer = `Competition${pointerNum}`
        while (currentStorage.includes(pointer)){
            pointerNum+=1;
            pointer = `Competition${pointerNum}`
        }

        localStorage.setItem("competitionPointers", JSON.stringify([...currentStorage, pointer]))

        const comp = {
            name: localName,
            teams: localTeams,
            matches: [],
        }
        localStorage.setItem(pointer, JSON.stringify(comp))
        saveFunc()
    } else {
        localStorage.setItem(pointer, JSON.stringify(comp))
        saveFunc()
    }
  }

  return (
    <div className="CompetitionCreateEdit">
    {JSON.stringify()}
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={localName}
        onChange={handleInputChange}
      />

      <div>
        <input
          type="text"
          placeholder="Teams"
          value={currentTeamInput}
          onChange={handleTeamInput}
        />
        <button name="teams" onClick={handleInputChange}>
          Add team
        </button>
      </div>

      {localTeams.map((team, index) => (
        <input
          key={index}
          onChange={changeTeam(index)}
          placeholder={team}
        ></input>
      ))}
      <ul>
    {localTeams.map((team, index) => (
        <li
          key={index}
        >
            {team}

        </li>
      ))}
      </ul>
        <button onClick={saveComp}>Save</button>
    </div>
  );
}

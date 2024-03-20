import "./MatchEdit.css"
import { useEffect, useState } from "react";

export default function MatchEdit({
  index,
  pointer,
}) {

  const [bluescore, setBlueScore] = useState(0);
  const [redscore, setRedScore] = useState(0);
  const [blueteams, setBlueTeams] = useState([]);
  const [redteams, setRedTeams] = useState([]);

  useEffect(() => {
    if (index !== null) {
      const currentStorage = JSON.parse(localStorage.getItem(pointer));
      if (currentStorage) {
        setBlueScore(currentStorage.matches[index].blueAlliance.score);
        setBlueTeams(currentStorage.matches[index].blueAlliance.teams);
        setRedScore(currentStorage.matches[index].redAlliance.score);
        setRedTeams(currentStorage.matches[index].redAlliance.teams);
        if (currentStorage.matches[index].blueAlliance.score>currentStorage.matches[index].redAlliance.score){
          document.getElementById("main").style.backgroundColor = "blue"
        } else if (currentStorage.matches[index].blueAlliance.score<currentStorage.matches[index].redAlliance.score) {
          document.getElementById("main").style.backgroundColor = "red"
        }
      }
    }
  }, [index, pointer]);



  return (
    <div >
      <button id="main">
        <div>
        <b>{bluescore}</b>
        <br />
        Blue Alliance:
        {blueteams.map((team, index) => (
          <div key={index}>
            <div>{team}</div>
          </div>
        ))}
        </div>
        <div>
        <b>{redscore}</b>
        <br />
        Red Alliance:
        {redteams.map((team, index) => (
          <div key={index}>
            <div>{team}</div>
          </div>
        ))}
        </div>
      </button>
    </div>
  );
}

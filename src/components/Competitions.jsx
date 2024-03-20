import React, { useState, useEffect } from "react";
import "./Competitions.css";
import CompetitionCreateEdit from "./CompetitionCreateEdit";

export default function Competitions() {
  const [competitionPointers, setCompetitionPointers] = useState([]);
  const [competitionList, setCompetitionList] = useState([]);
  const [creatingComp, setCreatingComp] = useState(false);
  const [edit, setEdit] = useState(null);
  const [currentPointer, setCurrentPointer] = useState(null);

  const editCompHandle = (e) => {
    setCurrentPointer(e.target.value);
    setCreatingComp(true);
    setEdit(true);
  };

  const handleSaveFunc = () => {
    setEdit(false);
    setCreatingComp(false);

      let storedValue = localStorage.getItem("competitionPointers");
      if (storedValue) {
        setCompetitionPointers((prevPointers) => {
          const pointers = JSON.parse(storedValue);
          const list = pointers.map((pointer) => {
            const currentStored = JSON.parse(localStorage.getItem(pointer));
            return {
              competition: currentStored,
              pointer: pointer,
            };
          });
          setCompetitionList(list);
          return pointers;
        });
      }
      setEdit(false);
      setCreatingComp(false);

  };

  const addCompHandle = () => {
    setCreatingComp(true);
    setEdit(false);
  };

  useEffect(() => {
    let storedValue = localStorage.getItem("competitionPointers");
    if (storedValue) {
      setCompetitionPointers((prevPointers) => {
        const pointers = JSON.parse(storedValue);
        const list = pointers.map((pointer) => {
          const currentStored = JSON.parse(localStorage.getItem(pointer));
          return {
            competition: currentStored,
            pointer: pointer,
          };
        });
        setCompetitionList(list);
        return pointers;
      });
    }
  }, []);

  return (
    <div className="competitionsMain">
      <div className="competitions">
        {competitionList.map((competition, index) => (
          <div key={index} className="competition">
            Name: {competition.competition.name}
            <button value={competition.pointer} onClick={editCompHandle}>
              edit
            </button>
          </div>
        ))}
        <button className="add" onClick={addCompHandle}>
          Add competition
        </button>
      </div>
      {creatingComp && (
        <CompetitionCreateEdit
          pointer={currentPointer}
          saveFunc={handleSaveFunc}
        />
      )}
    </div>
  );
}

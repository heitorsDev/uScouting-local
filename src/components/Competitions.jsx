import React, { useState, useEffect } from "react";
import "./Competitions.css";
import CompetitionCreateEdit from "./CompetitionCreateEdit";
import CompetitionViewer from "./CompetitionViewer";
export default function Competitions() {
  const [competitionPointers, setCompetitionPointers] = useState([]);
  const [competitionList, setCompetitionList] = useState([]);
  const [creatingComp, setCreatingComp] = useState(false);
  const [edit, setEdit] = useState(null);
  const [currentPointer, setCurrentPointer] = useState(null);

  const [viewPointer, setViewPointer] = useState(null);
  const [viewingComp, setViewingComp] = useState(false);

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
    setViewingComp(false);
    setEdit(false);
    setCreatingComp(false);
  };

  const addCompHandle = () => {
    setCurrentPointer(null);
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

  const handleViewComp = (e) => {
    setViewPointer(e.target.value);
    setViewingComp(true);
  };

  return (
    <div className="competitionsMain">
      {!creatingComp && !viewingComp && (
        <div className="competitions">
          {competitionList.map((competition, index) => (
            <div key={index} className="competition">
              <button value={competition.pointer} onClick={handleViewComp}>
                {competition.competition.name}
              </button>
              <button value={competition.pointer} onClick={editCompHandle}>
                edit info
              </button>
            </div>
          ))}
          <button className="add" onClick={addCompHandle}>
            Add competition
          </button>
        </div>
      )}
      {creatingComp && !viewingComp && (
        <CompetitionCreateEdit
          pointer={currentPointer}
          saveFunc={handleSaveFunc}
        />
      )}
      {viewingComp && !creatingComp && (
        <CompetitionViewer saveFunc={handleSaveFunc} pointer={viewPointer} />
      )}
    </div>
  );
}

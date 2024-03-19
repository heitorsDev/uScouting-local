import React, { useState, useEffect } from "react";

export default function AccountView() {
  const [account, setAccount] = useState(null);
  const [localName, setLocalName] = useState("");
  const [localTeam, setLocalTeam] = useState("");
  const [localCountry, setLocalCountry] = useState("");
  const [localTeamNumber, setLocalTeamNumber] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("account");
    if (storedValue) {
      const parsedValue = JSON.parse(storedValue);
      setAccount(parsedValue);
      setLocalName(parsedValue.name);
      setLocalTeam(parsedValue.team);
      setLocalCountry(parsedValue.country);
      setLocalTeamNumber(parsedValue.teamnumber);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setLocalName(value);
        break;
      case "team":
        setLocalTeam(value);
        break;
      case "country":
        setLocalCountry(value);
        break;
      case "teamnumber":
        setLocalTeamNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSave = () => {
    const updatedAccount = {
      ...account,
      name: localName,
      team: localTeam,
      country: localCountry,
      teamnumber: localTeamNumber
    };
    localStorage.setItem("account", JSON.stringify(updatedAccount));
    setAccount(updatedAccount);
  };

  return (
    <>
      {account ? (
        <>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={localName}
            onChange={handleInputChange}
          />
          <br />
          Team:{" "}
          <input
            type="text"
            name="team"
            value={localTeam}
            onChange={handleInputChange}
          />{" "}
          #{" "}
          <input
            type="text"
            name="teamnumber"
            value={localTeamNumber}
            onChange={handleInputChange}
          />
          <br />
          Country:{" "}
          <input
            type="text"
            name="country"
            value={localCountry}
            onChange={handleInputChange}
          />
          <br />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

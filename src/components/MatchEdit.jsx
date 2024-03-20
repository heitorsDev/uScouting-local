export default function MatchEdit({
  index,
  pointer,
  bluescore,
  redscore,
  blueteams,
  redteams,
}) {
  const listBlueTeams = blueteams.map((team, index) => (
    <div key={index}>
      <div>{team}</div>
    </div>
  ));

  const listRedTeams = redteams.map((team, index) => (
    <div key={index}>
      <div>{team}</div>
    </div>
  ));
  const x = 1;
  return (
    <div>
      <button>
        <b>{bluescore}</b>
        <br />
        Blue Alliance:
        {listBlueTeams}
        <b>{redscore}</b>
        <br />
        Red Alliance:
        {listRedTeams}
      </button>
    </div>
  );
}

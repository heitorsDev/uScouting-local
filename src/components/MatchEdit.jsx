export default function MatchEdit({ bluescore, redscore, blueteams, redteams }) {
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
        const x = 1
  return (
    <div>
      <div>
        <b>{bluescore}</b><br />
        Blue Alliance: 
        {listBlueTeams}
        <br />
        <b>{redscore}</b><br />
        Red Alliance:
        {listRedTeams}
        
      </div>
    </div>
  );
}
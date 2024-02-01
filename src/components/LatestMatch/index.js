import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    matchStatus,
  } = matchDetails
  return (
    <div>
      <h1 className="competing-team">{competingTeam}</h1>
      <p className="date">{date}</p>
      <p className="venue">{venue}</p>
      <p className="result">{result}</p>
      <hr className="line" />
    </div>
  )
}

export default LatestMatch

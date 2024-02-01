import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="team-item-card">
      <li className="team-card">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard

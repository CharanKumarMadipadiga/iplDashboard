import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import './index.css'

class TeamMatches extends Component {
  state = {bannerImgUrl: {}, latestMatchObject: {}}

  componentDidMount() {
    this.getEachTeam()
  }

  getEachTeam = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedBannerImgUrl = {
      teamBannerUrl: data.team_banner_url,
    }

    const updatedLatestMatchDetails = {
      latestMachDetails: data.latest_match_details,
    }

    this.setState({
      bannerImgUrl: updatedBannerImgUrl,
      latestMatchObject: updatedLatestMatchDetails.latestMachDetails,
    })
  }

  conversion = updatedLatestMatchDetails => {
    const updatedObj = {
      umpires: updatedLatestMatchDetails.umpires,
      result: updatedLatestMatchDetails.result,
      manOfTheMatch: updatedLatestMatchDetails.man_of_the_match,
      id: updatedLatestMatchDetails.id,
      date: updatedLatestMatchDetails.id,
      venue: updatedLatestMatchDetails.venue,
      competingTeam: updatedLatestMatchDetails.competing_team,
      competingTeamLogo: updatedLatestMatchDetails.competing_team_logo,
      firstInnings: updatedLatestMatchDetails.first_innings,
      matchStatus: updatedLatestMatchDetails.match_status,
    }
    return updatedObj
  }

  render() {
    const {bannerImgUrl, latestMatchObject} = this.state
    const {teamBannerUrl} = bannerImgUrl
    const updatedObj = this.conversion(latestMatchObject)

    return (
      <div className="team-match-container">
        <img src={teamBannerUrl} alt="banner" className="banner-img" />
        <p className="matches-heading">Latest Matches</p>
        <div className="latest-match-con">
          <LatestMatch matchDetails={updatedObj} key={updatedObj.id} />
        </div>
      </div>
    )
  }
}

export default TeamMatches

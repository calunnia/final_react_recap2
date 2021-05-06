import React from 'react'
import Star from '../Star/Star.jsx'

function Player({team, search}) {
    return (
        <div>
          { team.franchisePlayers.map((player) => ( <Star player={player} search={search}/>))}
           
        </div>
    )
}

export default Player

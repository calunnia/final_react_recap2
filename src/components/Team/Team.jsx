import React,{useState} from 'react'
import Player from '../Player/Player.jsx'

function Team({team,search}) {

   const [show,setShow] = useState('')

    return (
        <div className="team">
           <p>{team.name}</p>
           <p>{team.stadium}</p> 
            <button onClick={()=>(setShow(!show))}>{show ? 'Show less' : 'Show More'}</button>
            {
                show ?  <Player team={team} search={search}/>
                     : ''
            }
            
         
        </div>
    )
}

export default Team

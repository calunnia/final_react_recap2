import './App.css'
import React,{useState,useEffect} from 'react'
import LoadingMask from './components/LoadingMask/LoadingMask.jsx'
import Team from './components/Team/Team.jsx'

const App = () => {

const [data, setData] =useState([])
const [search,setSearch] = useState("")
const [loading, setLoading] = useState(false)

useEffect(() => {
  setLoading(true)
  setData([])
  
  fetch(`/api/teams`)
    .then((resopnse) => (resopnse.json()))
    .then((responseData)=>(setData(responseData)))
    .catch(error=>{
                    console.log('error=',error );
                    setData(null)
    })
    .finally( () => {
                      console.log('fetch end');
                      setLoading(false)
    })
  
  return () => {
    //cleanup
  }
}, [])
   
    
    
    console.log('data', data);





  return (
    <div className="App">
     <h1>NBA -Team - Stars</h1>
     <input type="text" onChange={(ev)=>(setSearch(ev.target.value))}/>
     {
       loading && <LoadingMask/>
     }
     {
       data === null
                    ? <p>Upps Something happend....</p>
                    :data.map((team) =>(<Team team={team} search={search}/>))
     }
    </div>
  )
}

export default App

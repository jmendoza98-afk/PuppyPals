import {puppyList} from './data.js'
import { useState } from 'react'
import './App.css'
import './path-to-css.css'

function App() {
  const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featuredPup)
  
console.log(puppyList)
      return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{console.log("puppy id: ", setFeatPupId(puppy.id))}} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })
      }
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      <p>
      { featPupId && <p>{ featPupId }</p> } 
      </p>
    </div>
  );
       
}
export default App

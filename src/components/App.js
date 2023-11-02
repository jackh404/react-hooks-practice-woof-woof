import React,{useEffect,useState} from "react";
import DogBar from "./DogBar";
import DogDetail from "./DogDetail";
import Filter from "./Filter";

function App() {
  const [dogs,setDogs] = useState([])
  const [currentDog,setCurrentDog] = useState({})
  const [filter, setFilter] = useState({isGoodDog:false})
  useEffect(()=>{
    fetch(`http://localhost:3001/pups${filter.isGoodDog?'?isGoodDog=true':''}`)
    .then(resp=>resp.json())
    .then(data=>setDogs(data))
  },[filter])

  const handleDoggoClick = dog => {
    setCurrentDog(dog)
  }

  const handleDogUpdate = async dog => {
    const updatedDog = {...dog, isGoodDog:!dog.isGoodDog}
    const resp = await fetch(`http://localhost:3001/pups/${updatedDog.id}`,{
      method:"PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(updatedDog)
    })
    const returnedDog = await resp.json()
    setDogs(dogs.map(dog=>dog.id===returnedDog.id?returnedDog:dog))
    setCurrentDog(returnedDog)
    setFilter({isGoodDog:filter.isGoodDog})
  }

  const filterDoggos = () => {
    setFilter({isGoodDog:!filter.isGoodDog})
  }

  return (
    <div className="App">
      <Filter filterDoggos={filterDoggos} filter={filter}/>
      <DogBar dogs={dogs} handleDoggoClick={handleDoggoClick}/>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <DogDetail dog={currentDog} handleDogUpdate={handleDogUpdate}/>
      </div>
    </div>
  );
}

export default App;

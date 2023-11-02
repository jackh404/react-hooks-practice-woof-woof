import react from "react";
import Dog from "./Dog";

function DogBar({dogs,handleDoggoClick}){
    const dogCards = dogs.map(dog=><Dog dog={dog} key={dog.id } handleDoggoClick={handleDoggoClick}/>)
    return (
    <div id="dog-bar">
        {dogCards}
    </div>
    )
}

export default DogBar
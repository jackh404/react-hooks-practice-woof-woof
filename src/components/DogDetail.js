import react from "react";

function DogDetail({dog,handleDogUpdate}){
    if(dog.name){
        const {name, isGoodDog, image} = dog
        return (
            <div id="dog-info">
                <img src={image} alt={`Image of ${name}`} />
                <h2>{name}</h2>
                <button 
                onClick={()=>handleDogUpdate(dog)}>{isGoodDog?"Good Dog!":"Bad Dog :("}</button>
            </div>
        )
    } else {
        return <h2>Click a doggo!</h2>
    }
}

export default DogDetail
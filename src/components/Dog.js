import react from "react";

function Dog({dog, handleDoggoClick}){
    const {name} = dog
    return(
        <span 
        className="dog" 
        onClick={()=>handleDoggoClick(dog)}
        >{name}</span>
    )
}

export default Dog
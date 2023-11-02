import react from "react";

function Filter({filterDoggos,filter}){
    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={filterDoggos}>Filter good dogs: {filter.isGoodDog?"ON":"OFF"}</button>
        </div>
    )
}

export default Filter
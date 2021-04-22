import React from 'react'

function DataDisplay(props){
    // console.log(props)
    let nameLength = props.inputData[props.index].name.first.length+props.inputData[props.index].name.last.length+1;
    return(
        <div class="textformat">
            <h1 id='count'>{`${props.inputData[props.index].id}/25`}</h1>
            <h1 id='persname' style={{width: `${nameLength}ch`}}>{`${props.inputData[props.index].name.first} ${props.inputData[props.index].name.last}`}</h1>
            <div class="container">
                <h2 class="tag">From: </h2>
                <h2 class="textdata">{`${props.inputData[props.index].city}, ${props.inputData[props.index].country}`}</h2>
            </div>
            <div class="container">
                <h2 class="tag">Job Title: </h2>
                <h2 class="textdata">{props.inputData[props.index].title}</h2>
            </div>
            <div class="container">
                <h2 class="tag">Employer: </h2>
                <h2 class="textdata">{props.inputData[props.index].employer}</h2>
            </div>
            <div>
                <h2 class="movietag">Favorite Movies:</h2>
                <ol class="listarrange">
                    <li class="listdata">{props.inputData[props.index].favoriteMovies[0]}</li>
                    <li class="listdata">{props.inputData[props.index].favoriteMovies[1]}</li>
                    <li class="listdata">{props.inputData[props.index].favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default DataDisplay
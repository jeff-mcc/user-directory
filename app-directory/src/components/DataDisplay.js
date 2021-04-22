import React from 'react'

function DataDisplay(props){
    console.log(props)
    return(
        <div>
            <h1>{`${props.inputData[props.index].id}/25`}</h1>
            <h1>{`${props.inputData[props.index].name.first} ${props.inputData[props.index].name.last}`}</h1>
            <h2>From: {`${props.inputData[props.index].city}, ${props.inputData[props.index].country}`}</h2>
            <h2>Job Title: {props.inputData[props.index].title}</h2>
            <h2>Employer: {props.inputData[props.index].employer}</h2>
            <div>
                <h2>Favorite Movies:</h2>
                <ol>
                    <li>{props.inputData[props.index].favoriteMovies[0]}</li>
                    <li>{props.inputData[props.index].favoriteMovies[1]}</li>
                    <li>{props.inputData[props.index].favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default DataDisplay
import React from 'react'

function DataDisplay(props){
    console.log(props)
    return(
        <div>
            <h1>{`${props.inputData[0].id}/25`}</h1>
            <h1>{`${props.inputData[0].name.first} ${props.inputData[0].name.last}`}</h1>
            <h2>From: {`${props.inputData[0].city}, ${props.inputData[0].country}`}</h2>
            <h2>Job Title: {props.inputData[0].title}</h2>
            <h2>Employer: {props.inputData[0].employer}</h2>
            <div>
                <h2>Favorite Movies:</h2>
                <ol>
                    <li>{props.inputData[0].favoriteMovies[0]}</li>
                    <li>{props.inputData[0].favoriteMovies[1]}</li>
                    <li>{props.inputData[0].favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default DataDisplay
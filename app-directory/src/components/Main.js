import React, {Component} from 'react'
import DataDisplay from './DataDisplay'
// import './App.css';
import Data from './data.js'

class Main extends Component{
    constructor(){
        const data = Data;
        super()
        this.state = {
            dataArray: data,
            index: 0
        }
        this.handleData = this.handleData.bind(this)
    }

    handleData(){
        
    }

    render(){
        // console.log(this.state.dataArray)
        return(
            <div class='boxcontainer'>
                <div class='whitebox'>
                    <DataDisplay inputData={this.state.dataArray}/>
                </div>
                <div class='underbox'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        )
    }
}

export default Main
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
            index: 0,
            // nameLength: 14
        }
        this.handleData = this.handleData.bind(this)
    }

    handleData(targ){
        let id = targ.id;
        let idx = this.state.index;
        if (id==='next' && idx<24){
            this.setState({index: idx+1})
        } else if (id==='previous' && idx>0){
            this.setState({index: idx-1})
        }
    }

    render(){
        // console.log(this.state.dataArray[0].name.first.length)
        return(
            <div class='boxcontainer'>
                <div class='whitebox'>
                    <DataDisplay inputData={this.state.dataArray} index={this.state.index}/>
                </div>
                <div class='underbox'>
                    <button class="butn" id='previous' onClick={e=>this.handleData(e.target)}>{`< Previous`}</button>
                    <div class="inunderbox">
                        <button class="cntrbtn">Edit</button>
                        <button class="cntrbtn">Delete</button>
                        <button class="cntrbtn">New</button>
                    </div>
                    <button class="butn" id='next' onClick={e=>this.handleData(e.target)}>{`Next >`}</button>
                </div>
            </div>
        )
    }
}

export default Main
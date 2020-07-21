import React, { Component } from 'react'
import rose from './rose.png';
export default class PlantItems extends Component {
   
    plantStyle = () => {
       return{
           color: 'white',    
       }
   }

   constructor(props){
       super(props);
       this.state = {
           feeds:[]
       }
   }
   componentDidMount(){
       fetch("https://api.thingspeak.com/channels/1101392/feeds.json?api_key=PYNGNLROKI2E2IH5&results")
       .then(res => res.json())
       .then(
           (result) => {
               this.setState({
                   isLoaded: true,
                   feeds: result.feeds
               })
           }
       )
   }

   plantState = (plantValue) => {
       var plantstate;
       if(plantValue >= 300){
           plantstate = "Dry"
       }
       else if(plantValue >= 150 & plantValue < 300){
           plantstate = "Good"
       }
       else if(plantValue < 150){
           plantstate = "Overwet"
       }
       return plantstate;

   }
    render() {
        var plantValue;
        var plantStatus;
        const { feeds } = this.state;
        {feeds.map(feed => (
           plantValue = feed.field1
        ))}
       plantStatus = this.plantState(plantValue) 
        return (
           
            <div style={this.plantStyle()}>
                <div style={{ textAlign: 'center'}}>
                    <h1 style={{color:'red'}}>Rose</h1>
                    <img src={rose} alt="Logo" />
                    <div >
                        <ul >
                            <li style={plantStateStyle}>
                                <h3 style={statusStyle}>Health</h3>
                           </li>
                           <li  style={plantStateStyle}>
                                <h1 style={valueStyle}>{plantStatus}</h1>
                            </li>
                        </ul>
                        <ul >
                            <li style={plantStateStyle}>
                                <h3 style={statusStyle}>Sensor </h3>
                           </li>
                           <li  style={plantStateStyle}>
                                <h1 style={valueStyle}>{plantValue}</h1>
                           </li>
                        </ul>
                    </div> 
                </div>
            </div>
        )
    }
}

const statusStyle = {
    backgroundColor: 'green',
    display: 'inline-block',
    height:'25px',
    padding: '41px',
    width: '75px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

const valueStyle = {
    height:'50px',
    backgroundColor: 'whitesmoke',
    color:'green',
    padding: '30px',
    width: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
    
}
const plantStateStyle = {
    display: 'inline-block'
}
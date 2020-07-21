import React, { Component } from 'react'

export default class Header extends Component {
    
    headerStyle = () => {
        return {
           textAlign: "center",
            color: 'green'
        }
    }

    render() {
        return (
            <div style={this.headerStyle()}>
                <h1>Plant monitoring</h1>
            </div>
        )

        
    }
}


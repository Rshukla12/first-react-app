import React from "react";

class Row extends React.Component{
    render(){
        return (
            <li>Item { this.props.num } </li>
        )
    }
}

export default Row;
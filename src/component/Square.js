import React from 'react'

function Square(props) {   
    let boxStyle = {
        backgroundColor: "rgb("+props.box.r+","+props.box.g+","+props.box.b+")"
    }

    return (
        <div className="square-block" style={boxStyle}></div>
    )
}

export default Square
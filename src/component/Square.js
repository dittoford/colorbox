import React, { useEffect } from 'react'

function Square(props) {
    
    let boxStyle = {
        backgroundColor: "rgb("+props.box.r+","+props.box.g+","+props.box.b+")"
    }
    useEffect(() => {
        console.log(boxStyle.backgroundColor)
    },[])

    return (
        <div className="square-block" style={boxStyle}>
            
        </div>
    )
}

export default Square
import React from 'react'

function Header(props){
    return (
        <div>
             <input 
                type="radio" 
                name="shade"
                value="Lighter"
                checked={props.filter === "Lighter"}
                onChange={props.handleChange}
            /> Lighter
            <input 
                type="radio" 
                name="shade"
                value="Darker"
                checked={props.filter === "Darker"}
                onChange={props.handleChange}
            /> Darker
            <hr />
        </div>
    )
}

export default Header
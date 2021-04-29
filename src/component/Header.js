import React from 'react'

function Header(props){
    return (
        <div style={{marginLeft:"30px"}}>
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
            /> Darker <br></br>
            <label>Favorite Color : </label>
                <select 
                    value={props.selectColor}
                    onChange={props.handleChange}
                    name="selectColor"
                >   
                    <option value="none">None</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                </select>
        </div>
    )
}

export default Header
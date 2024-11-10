import React from "react";

export function Search({ location, setLocation, error, searchLocation })
{
    return (
        <div className="search">
            <input 
                value={location} 
                onChange={event => 
                setLocation(event.target.value)} 
                placeholder="Enter Location" 
                onKeyPress={searchLocation}
            >
            </input>  
            {error && <p style={{ color: 'red' }}>{error}</p>}
         </div>
    )
}
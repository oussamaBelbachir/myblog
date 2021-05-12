import React from 'react'
import './button.styles.scss';
import {PulseLoader} from 'react-spinners';

function Button({handleClick,children,size,width,borderRadius,loading}) {
    return (
        <button type="submit" onClick={handleClick} className="button" style={{
            fontSize : `${size ? `${size}` : "2rem"}`,
            width : `${width ? `${width}` : "fit-content"}`,
            borderRadius : `${borderRadius ? `${borderRadius}` : ".5rem"}`
        }}>
         
             {loading ? (<PulseLoader size={10} color="#fff" loading
                />) : children}  
         
            
        </button>
    )
}

export default Button

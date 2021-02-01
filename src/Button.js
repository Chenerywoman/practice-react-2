import React from 'react';

const Button = ({colour, setColour}) => {

    // const [colour, setColour] = useState('blue');
    
    return (
        <div>
            <button 
                // className={colour}
                style={{
                    backgroundColor: colour
                }}
                onClick={()=> setColour(colour)}
            >
                {colour}
            </button>
        </div>
    )
}

export default Button

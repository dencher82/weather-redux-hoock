import React, {useState} from 'react';

const FormControl = (props) => {

    const [city, setCity] = useState('');

    return (
        <div>
            <input
                value={city}
                onChange={event => setCity(event.target.value)}
                type='text'
                placeholder='City'/>
            <button onClick={() => props.getWeather(city)}>Get Weather</button>
        </div>
    );
}

export default FormControl;
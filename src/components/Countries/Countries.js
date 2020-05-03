import React from 'react';
import './Countries.css';



class Countries extends React.Component {

    render() {
        return(
        <div className="cities">
            <h2>City: {this.props.city.city}</h2>
            <div className='information'>
                <p>pm 2.5: {this.props.city.value} µg/m³</p>
            </div>
        </div>
        )}
};

export default Countries;
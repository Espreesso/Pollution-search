import React from 'react';
import './CountriesList.css';
import Country from '../Countries/Countries';
import Accordion from '../Accordion/Accordion';

class CountriesList extends React.Component {
    render() {
        return (
        <div className="CountriesList">
           
                <div>{
                this.props.cities.slice(0, 10).map((city) => {
                    return <div><Country city={city} key={city.city}/>
                    {<Accordion city={city} key={city.city} />}</div>
                })
                }</div>
                
        </div>
        )}
};

export default CountriesList;
import React from 'react';
import './Accordion.css'

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.toggleClass= this.toggleClass.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };

    render(){
        return (
            <div>
                <button className="accordion" onClick={this.toggleClass}>More about city</button>
                <div className={this.state.active ? "panel": 'panel-hidden'}><p>{this.props.city.info}</p></div>
            </div>
        )
    }
}

export default Accordion;
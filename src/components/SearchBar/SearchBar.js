import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
        this.state = {
            results: []
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleEnter = this.handleEnter.bind(this)
    };
    handleEnter(event) {
        if (event.key === 'Enter') {
            this.handleSearch(event);
        }
    }


    handleTermChange(event) {
        this.setState({term: event.target.value});
      };

      handleSearch(event) {
        this.props.search(this.state.term);
        event.preventDefault();
      }

    render() {
        return (
        <div className="SearchBar">
            <div className="SearchBar-fields">
                <input list="countries" onChange={this.handleTermChange} onKeyDown={this.handleEnter}/>
                <datalist id='countries'>
                    <option value="Poland"></option>
                    <option value="Germany"></option>
                    <option value="Spain"></option>
                    <option value="France"></option>
                </datalist>
            </div>
            <div className="SearchBar-submit">
                <a onClick={this.handleSearch} >Search</a>
            </div>
        </div>
        )}
};

export default SearchBar;
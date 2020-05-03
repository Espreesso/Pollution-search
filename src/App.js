import React from 'react';
import './App.css';
import CountriesList from './components/CountriesList/CountriesList';
import SearchBar from './components/SearchBar/SearchBar';
import OpenAQ from './util/OpenAQ';
import orderBy from 'lodash/orderBy';
import Wikipedia from './util/wikipedia';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cities: [],
      wikiExtracts: []
    };
    this.search = this.search.bind(this);
    this.searchWiki = this.searchWiki.bind(this);
  };
  
  searchWiki(town) {
    this.setState({wikiExtracts: []})
    Wikipedia.searchWikipedia(town)
    .then((a) => {
      this.setState(prevState => ({
        wikiExtracts: [...prevState.wikiExtracts, a]
    }))
    function remove_duplicates(objectsArray) {
      var usedObjects = {};
  
      for (var i=objectsArray.length - 1;i>=0;i--) {
          var so = JSON.stringify(objectsArray[i]);
  
          if (usedObjects[so]) {
              objectsArray.splice(i, 1);
  
          } else {
              usedObjects[so] = true;          
          }
      }
  
      return objectsArray;
  
  }
    remove_duplicates(this.state.wikiExtracts)  
    let mergedCities = [];
    for(let i = 0; i < 10; i++) {
      mergedCities.push({
        ...this.state.cities[i],
        ...(this.state.wikiExtracts.find((itmInner) => itmInner.city === this.state.cities[i].city))
      })
    }
    this.setState({cities: mergedCities});
  })
  }
  
  search(term) {
    this.setState({cities: []});
    let lowerTerm = term.toLowerCase();
    let termRes;
    switch(lowerTerm) {
      case 'poland':
        termRes = 'PL';
        break;
      case 'germany':
        termRes = 'DE';
        break;
      case 'france':
        termRes = 'FR';
        break;
      case 'spain':
        termRes = 'ES';
        break;
        default:
          termRes = lowerTerm;
    }
    if(termRes === "PL" || termRes === "DE" || termRes === "FR" || termRes === "ES") {
      OpenAQ.search(termRes)
      .then((a) => {
        let orderedCities = orderBy(a, [function(o) { return o.value; }], ['desc']);
        let splicedCities = orderedCities.splice(0, 10)
        this.setState({ cities: splicedCities });
        let citiesToSearch = this.state.cities
        citiesToSearch.map((city) => {
          this.searchWiki(city.city)
        })
        
    })
  } else {
      alert('try one of proposed terms')
    }
  };
  render(){
    return (
        <div className="App">
        <h1>Pollution searcher</h1>
        <SearchBar search={this.search}/>
        <CountriesList cities={this.state.cities}
        wikiExtracts={this.state.wikiExtracts} />
    </div>
  );
}}

export default App;
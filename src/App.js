import { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState(() => {
          return {monsters: users}
        })
      });
  }

  onSearchChange = (e) => {
    this.setState(() => {
      return {searchString: e.target.value.toLocaleLowerCase()};
    })
  }

  render() {
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes( searchString )});

    return (
      <div className="App">
        <h1 className='app-title'>Monster's Incorporated</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder='Search Monsters' 
          className='monsters-search-box' 
        />
        <CardList cards={filteredMonsters} />
      </div>
    );
  } 
}

export default App;

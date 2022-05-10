import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList/CardList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';

const App = () => {

  const [searchString, setSearchString] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users)
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((m) => {
      return m.name.toLocaleLowerCase().includes( searchString )});
    setFilteredMonsters(newFilteredMonsters);
  },[monsters, searchString]);
  
  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLocaleLowerCase());
  };
  
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
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchString: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => {
//         this.setState(() => {
//           return {monsters: users}
//         })
//       });
//   }

//   onSearchChange = (e) => {
//     this.setState(() => {
//       return {searchString: e.target.value.toLocaleLowerCase()};
//     })
//   }

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((m) => {
//       return m.name.toLocaleLowerCase().includes( searchString )});

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster's Incorporated</h1>
//         <SearchBox 
//           onChangeHandler={onSearchChange} 
//           placeholder='Search Monsters' 
//           className='monsters-search-box' 
//         />
//         <CardList cards={filteredMonsters} />
//       </div>
//     );
//   } 
// }

export default App;

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import { Component } from 'react';
import CardList from './components/card-list/card-list.component.jsx'
import SearchBox from './components/search-box/search-box.component.jsx'

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log({searchField});

  useEffect(() => {
    console.log('effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((resp) => resp.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    console.log('effect fired - filtered monsters');
    let newMonsters = monsters.filter((elm) => {
      return (searchField === '' || elm.name.toLowerCase().includes(searchField));
    });
    setFilteredMonsters(newMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    console.log('onSearchChange');
    let searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex!!</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

// class App extends Component {
//   // The order of running these functions are -- 
//   // constructor -- to initialize the state
//   // render -- to render the UI and mount the component to the dom
//   // componentDidMount -- the code to run after the component mounts
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }; 
//     //console.log('constructor');
//   }

// componentDidMount() {
//   //console.log('componentDidMount');
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((resp) => resp.json())
//     .then((users) => this.setState(() => {
//       return {monsters : users};
//     },
//     () => {
//       //console.log(this.state);
//     }));
// }

//   onSearchChange = (event) => {
//     console.log('onSearchChange');
//     let searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {searchField};
//     },
//     () => {
//       console.log('new search value -- ');
//       console.log(this.state.searchField);
//     });
//   }

//   render() {
//     //console.log('render');
//     let {monsters, searchField} = this.state;
//     let {onSearchChange} = this;
//     let newMonsters = monsters.filter((elm) => {
//       return (searchField === '' || elm.name.toLowerCase().includes(searchField));
//     });
//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex!!</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='monsters-search-box'></SearchBox>
//         <CardList monsters={newMonsters}></CardList>
//       </div>
//     );
//   };
// }
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: {
//         firstName: 'Shreyam',
//         lastName: 'Gupta'
//       },
//       company: 'pwc'
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>Hello {this.state.name.firstName} {this.state.name.lastName} !!</p>
//           <p>{this.state.name.firstName} works at {this.state.company}</p>
//           <button
//             onClick={() => {
//               this.setState(
//                 () => {
//                   return({
//                     name: {
//                       firstName: 'Katappa',
//                       lastName: 'Bahubali'
//                     }
//                   });
//                 }, 
//                 () => {
//                   // This second callback function argumnet is optional
//                   console.log(this.state);
//                 }
//               );
//               // This is one way to use setState --> by passing on the object only
//               // this.setState({name: {
//               //   firstName: 'Katappa',
//               //   lastName: 'Bahubali'
//               // }});
//             }}
//           >
//             CHANGE NAME
//           </button>
//         </header>
//       </div>
//     );
//   };
// }
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

import React, {Component} from 'react';
import { CardList} from './components/card-list/card-list.component';
import { SearchBar }  from './components/search-bar/search-bar.component';
import './App.css';

//When we type stuff into the search field and console.log the state, we see that it is one letter behind all the time.
// this is because setState asynchronous...what that means right now is that this.setState is not happening immediately. It is not happening when we expect it to. 

//if we want to do somehting with our state right after we set it, we put in a call back function as the second argument for setState

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:'',
      placeHolder: 'Search Monsters'
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  handleSearch = (e) =>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const {
      monsters,
      searchField,
      placeHolder 
  } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
    <div className="App">
    <h1> Monsters Rolodex</h1>
      <SearchBar handleSearch={this.handleSearch} placeHolder={placeHolder}/>
      <CardList monsters={filteredMonsters}/>
    </div>
    )
  }
    
  
}

export default App;

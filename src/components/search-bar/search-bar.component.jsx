import React from 'react'
import './search-bar.styles.css'

//this was my method. I did this so I could destructure the handleSearch...
//I wanted to make it a functional (stateless) component, but I didnt know how to destructure using that method
/*
class SearchBar extends Component{

    render(){
        const {handleSearch} = this.props
        return(
            <input 
            className ='search'
            type='search' 
            placeholder='search monsters' 
            onChange={(e) => {handleSearch(e)} }
          />
        )
    }
}*/

export const SearchBar = ({placeHolder, handleSearch}) => (
        <input 
            className ='search'
            type='search' 
            placeholder={placeHolder} 
            onChange={handleSearch}
      />
)


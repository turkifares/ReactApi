
import './App.css';
import { useState } from 'react';
import React from 'react'
import List from './components/List';
import Search from './components/Search'

 

function App() {
const [Weatherlist, SetWeatherlist] = useState(null);

const fetchData = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const jsonData = await response.json();
    console.log(jsonData.products);
    SetWeatherlist(jsonData.products);
  } catch (error) {
    console.error('Error:', error);
  }
};
const [searchTerm,SetSearchTerm]=useState('');

const handleSearch = (event)=>{
    
  SetSearchTerm (event.target.value);
  
}
const searchedStories = Weatherlist?.filter((item)=>{
  return item?.title?.toLowerCase().includes(searchTerm?.toLowerCase());
})

React.useEffect(() => {
  fetchData();
}, []);
  
  return (
    <div className="container">
      <Search search={searchTerm} onSearch={handleSearch}/>
      {Weatherlist ?(
        <List list={searchedStories}/>
      ) : (
        <p>loading data</p>
      )
    }
     
     
      
    
     
    </div>
  );
}



  


 



export default App;
 


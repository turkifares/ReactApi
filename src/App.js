

import './App.css';
import { useState } from 'react';
import React from 'react'
import List from './components/List';
import Search from './components/Search'

 

function App() {
  // Variable d'état pour stocker les données météorologiques
  const [Weatherlist, SetWeatherlist] = useState(null);

  // Fonction asynchrone pour récupérer les données météorologiques
  const fetchData = async () => {
    try {
      // Effectuer une requête HTTP pour récupérer les données JSON
      const response = await fetch('https://dummyjson.com/products');
      const jsonData = await response.json();

      // Afficher les données dans la console et les mettre à jour dans l'état
      console.log(jsonData.products);
      SetWeatherlist(jsonData.products);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Variable d'état pour stocker le terme de recherche
  const [searchTerm, SetSearchTerm] = useState('');

  // Fonction pour mettre à jour le terme de recherche lors de la saisie de l'utilisateur
  const handleSearch = (event) => {
    SetSearchTerm(event.target.value);
  };

  // Filtrer les données météorologiques en fonction du terme de recherche saisi
  const searchedStories = Weatherlist?.filter((item) => {
    return item?.title?.toLowerCase().includes(searchTerm?.toLowerCase());
  });

  // Appeler fetchData une fois au chargement initial du composant
  React.useEffect(() => {
    fetchData();
  }, []);

  // Rendu du composant App
  return (
    <div className="container">
      {/* Composant de recherche avec les props search et onSearch */}
      <Search search={searchTerm} onSearch={handleSearch} />

      {Weatherlist ? (
        // Rendu du composant de liste avec les données filtrées
        <List list={searchedStories} />
      ) : (
        // Afficher un message de chargement si les données ne sont pas encore disponibles
        <p>loading data</p>
      )}
    </div>
  );
}

  


 



export default App;
 


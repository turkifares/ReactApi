
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import List from '../components/List';
import Search from '../components/Search';

export const actionTypes = {
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
  SET_SEARCH_TERM: 'SET_SEARCH_TERM',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SUCCESS:
      return { ...state, weatherList: action.payload, loading: false, error: null };
    case actionTypes.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    weatherList: null,
    loading: true,
    error: null,
    searchTerm: '',
  });

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      dispatch({ type: actionTypes.FETCH_SUCCESS, payload: response.data.products });
    } catch (error) {
      dispatch({ type: actionTypes.FETCH_ERROR, payload: error.message });
    }
  };

  const handleSearch = (event) => {
    dispatch({ type: actionTypes.SET_SEARCH_TERM, payload: event.target.value });
  };

  const searchedStories = state.weatherList?.filter((item) => {
    return item?.title?.toLowerCase().includes(state.searchTerm?.toLowerCase());
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <Search search={state.searchTerm} onSearch={handleSearch} />

      {state.loading ? (
        <p>loading data</p>
      ) : state.error ? (
        <p>Error: {state.error}</p>
      ) : (
        <List list={searchedStories} />
      )}
    </div>
  );
}

export default App;

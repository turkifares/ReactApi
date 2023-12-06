import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import App, { reducer, actionTypes } from './App';

jest.mock('axios');

describe('Reducer', () => {
  test('FETCH_SUCCESS action updates state correctly', () => {
    const prevState = { loading: true, error: null, weatherList: null };
    const mockedData = [
      { title: 'Weather 1', temperature: 20 },
      { title: 'Weather 2', temperature: 25 }

    ];
    const action = { type: actionTypes.FETCH_SUCCESS, payload: mockedData };
    const newState = reducer(prevState, action);
    expect(newState.loading).toBe(false);
    expect(newState.error).toBe(null);
    expect(newState.weatherList).toEqual(action.payload);
  });


});

describe('App Component', () => {
  test('renders App component', () => {
    render(<App />);

  });

  test('integration test for happy path', async () => {
    axios.get.mockResolvedValue({ data: { products: [/*  */] } });
    render(<App />);
    await waitFor(() => expect(screen.getByText('loading data')).not.toBeInTheDocument());
  
  });

  test('integration test for unhappy path', async () => {
    const errorMessage = 'Some error occurred';
    axios.get.mockRejectedValue(new Error(errorMessage));
    render(<App />);
    await waitFor(() => expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument());

  });

  test('end-to-end test for user search interaction', async () => {
    axios.get.mockResolvedValue({ data: { products: [/* mocked data */] } });
    render(<App />);

    userEvent.type(screen.getByRole('textbox'), 'search term');

    await waitFor(() => {
      
    });
  });
});

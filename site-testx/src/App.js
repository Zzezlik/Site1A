import React from 'react';
import './App.css';
import './Loading'
import HelloWorld from './HelloWorld'; // Импортируем наш компонент
import DataFetcher from './Loading'; // Импортируем наш компонент Loading

function App() {
  return (
    <div className="App">
      <HelloWorld /> {/* Используем компонент */}
      {/* <DataFetcher /> */}
    </div>
  );
}

export default App;

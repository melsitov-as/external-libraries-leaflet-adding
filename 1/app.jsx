// import React from 'react';
import List from './list.jsx';
import {CITY} from './mock/city.js';
import {POINTS} from './mock/points.js';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Парки города {CITY.title}:</h1>
      </header>
      <main>
        <List points={POINTS} />
      </main>
    </React.Fragment>
  );
}

export default App;

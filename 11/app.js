// import React, {useState} from 'react';
import List from './list.jsx';
import Map from './map.jsx';
import {CITY} from './mock/city.js';
import {POINTS} from './mock/points.js';

function App() {
  const [selectedPoint, setSelectedPoint] = useState({});

  const onListItemHover = (listItemName) => {
    const currentPoint = POINTS.find((point) =>
      point.title === listItemName,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <React.Fragment>
      <header>
        <h1>Парки города {CITY.title}:</h1>
      </header>
      <main>
        <List
          points={POINTS}
          onListItemHover={onListItemHover}
        />
        <Map
          city={CITY}
          points={POINTS}
          selectedPoint={selectedPoint}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
После получения в компоненте App названия парка, мы сможем найти соответствующий ему элемент в массиве POINTS. Сохраним выбранный элемент в стейте компонента, а затем передадим в Map.
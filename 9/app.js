// import React, {useState} from 'react';
import List from './list.jsx';
import Map from './map.jsx';
import {CITY} from './mock/city.js';
import {POINTS} from './mock/points.js';

function App() {
  const [selectedPoint, setSelectedPoint] = useState({});

  const onListItemHover = (listItemName) => {};

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
        <Map city={CITY} points={POINTS} />
      </main>
    </React.Fragment>
  );
}

export default App;
Мы подошли к заключительной задаче: настроить связь между компонентами List и Map. Добавим в компоненте App внутреннее состояние. В нём будем сохранять выбранный объект. Затем определим функцию onListItemHover, с помощью которой будем получать данные (название парка) из компонента List. Передадим функцию onListItemHover как отдельный prop в компонент List.
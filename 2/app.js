// import React from 'react';
import List from './list.jsx';
import Map from './map.jsx';
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
        <Map />
      </main>
    </React.Fragment>
  );
}

export default App;
// Следующим этапом добавим на страницу карту. Для этого нам потребуется библиотека Leaflet. Разобьём этот процесс на несколько шагов.

// Создадим компонент Map и подключим его к компоненту App. В Map подключим пакет для работы с картой leaflet. Обратите внимание, что вместе с самой библиотекой импортируется стилевой файл. Также важно определить для HTML-элемента, в котором мы будем выводить карту, значение атрибута height. Иначе блок «схлопнется» по высоте и карту невозможно будет увидеть.
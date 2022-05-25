// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './app.jsx';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

Мы уже говорили, React можно подружить с НЕ-react компонентами. Проверим это на практике, на примере подключения библиотеки leaflet. Представьте, что перед вами поставили следующую задачу:

воспользовавшись библиотекой React, создать страницу, на которой вывести заданные объекты;
варианты представления данных: в виде списка, в виде маркеров на карте;
при наведении курсора на название объекта в списке, маркер на карте, соответствующий этому названию, должен менять вариант отображения.
Начнём с простого. Создадим компонент App на основе разметки страницы. Разметка достаточно простая, но для нашей задачи большего и не нужно. После создания компонента App, его необходимо подключить в точке входа приложения, в файле index.js.

В директории mock собран набор тестовых данных. В дальнейшем их можно заменить на реальные данные, осуществляя загрузку с внешнего ресурса. Но сейчас, в этом нет необходимости. Для демонстрации подключения карты и отображения объектов на ней, хватит и тестового набора данных.

Для того, чтобы создать список необходимых объектов, создадим новый компонент List и передим ему в качестве свойства объекта props массив заранее подготовленных точек.
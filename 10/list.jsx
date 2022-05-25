// import React from 'react';

function List({points, onListItemHover}) {
    const listItemHoverHandler = (evt) => {
      onListItemHover(evt.target.innerText);
    };
  
    return (
      <ul className="list">{
        points.map((point, index) => {
          const keyValue = `${index}-${point.title}`;
  
          return (
            <li
              className="list__item"
              key={keyValue}
              onMouseEnter={listItemHoverHandler}
            >
              {point.title}
            </li>
          );
        })
      }</ul>
    );
  }
  
  export default List;
  Передав функцию onListItemHover в компонент List, мы настроили одностороннюю связь от компонента App к компоненту List. Раз мы передали функцию в компонент List, её нужно задействовать. Для того чтобы построить обратную связь, нам нужно создать обработчик наведения мыши на элемент списка и в нем вызвать полученную функцию. Воспользуемся props onMouseEnter у элемента списка li.

  При наведении на элемент списка, мы получаем содержание элемента и передаем его в App с помощью функции listItemHoverHandler. Двухсторонняя связь между компонентами App и List готова.  
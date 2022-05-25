// import React from 'react';

function List({points}) {
    return (
      <ul className="list">{
        points.map((point, index) => {
          const keyValue = `${index}-${point.title}`;
  
          return (
            <li
              className="list__item"
              key={keyValue}
            >
              {point.title}
            </li>
          );
        })
      }</ul>
    );
  }
  
  export default List;
  
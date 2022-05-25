// import React, {useRef, useEffect} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from './const';

function Map({city, points}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.lat,
            lng: point.lng,
          }, {
            icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
Поскольку создание карты и добавление элементов на карту — это разные эффекты, мы можем смело разделить эти процессы. Код для добавления маркеров на карту вынесем в отдельный хук. Как уже упоминалось ранее, важной особенностью использования хука useEffect является возможность указать зависимости. Хук useEffect будет выполняться только при изменении переменных map и points.

Сам процесс добавления маркеров на карту не сложнее создания карты. Интерфейс добавления маркеров такой же, за исключением некоторых параметров.

Метод marker первым параметром принимает объект с координатами точки, куда нужно поставить маркер. Второй параметр — опциональный. Он предназначен для указания альтернативного вида иконки маркера. Мы указываем заранее подготовленный объект. Если пропустить параметр icon, маркер на карте будет отмечен стандарной иконкой из пакета leaflet.

Метод addTo мы встречали ранее. В данном случае он выполняет ровно такую же роль — указывает на какую карту добавить маркер.
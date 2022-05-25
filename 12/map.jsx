// import React, {useRef, useEffect} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from './const';

function Map({city, points, selectedPoint}) {
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
            icon: (point.title === selectedPoint.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
Остался заключительный шаг: обучить компонент Map реагировать на изменение выбранного элемента списка. Проще всего воспользоваться props и передать selectedPoint.

Указав props selectedPoint как зависимость для хука useEffect, мы гарантируем, что данный эффект сработает и выполнит код по обновлению маркеров на карте.

В предыдущих шагах мы заранее подготовили переменную currentCustomIcon для того, чтобы устанавливать ее для выбранной точки. Осталось добавить условие выбора иконки для маркера при установке на карту.
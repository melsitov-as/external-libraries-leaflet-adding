// import React, {useRef} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';
import useMap from './useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from './const';

function Map({city}) {
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

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
Библиотека Leaflet отмечает переданные точки на карте с помощью маркеров. Однако стандартный набор содержит только один вид маркера. Дополнительные маркеры можно подключить с помощью метода icon.

Прежде чем добавлять маркеры на карту, проведём небольшую подготовительную работу и узнаем, как можно создать свои представления маркеров карты.

Метод icon принимает набор параметров для создания альтернативной иконки маркера. Мы создадим два вида маркеров: defaultCustomIcom — для отображения всех маркеров, и currentCustomMarker — для отображения выбранного пользователем маркера. В нашем примере маркеры отличаются только параметром iconUrl. Он принимает URL-путь к изображению. Мы воспользовались svg-изображением. Важно помнить про размеры иконки (параметр iconSize), и про то, что изображение нужно правильно расположить (параметр iconAnchor), иначе маркер будет указывать в неправильную точку на карте.

Более подробную информацию по методу icon вы можете найти в документации библиотеки Leaflet.
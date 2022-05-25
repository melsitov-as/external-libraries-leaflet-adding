// import React, {useRef} from 'react';
// import leaflet from 'leaflet';
// import 'leaflet/dist/leaflet.css';

function Map() {
  const mapRef = useRef(null);

  return (
    <div
      style={{height: '500px'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
Для обеспечения эффективной работы библиотека React предоставляет некоторые удобные инструменты — хуки. Нам потребуется хук useRef. С ним вы познакомились во время лайва.

Чтобы воспользоваться хуком useRef необходимо импортировать его из пакета react, инициализировать и связать с HTML-элементом через аттрибут ref.
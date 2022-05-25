// import {useEffect, useState} from 'react';
// import leaflet from 'leaflet';

function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
Процесс создания карты вынесен в хук useEffect. Обратите внимание, что данный хук имеет второй необязательный аргумент — массив зависимостей. Данный эффект будет срабатывать только когда в компоненте useMap будут обновлены значения переменных mapRef, map и city. Это важный и удобный подход к организации вызова побочных эфектов в функциональных компонентах React. Он осуществляет вызов побочных эффектов только при определенных условиях.

Сам процесс создания карты достаточно прост. Первым аргументом методу map мы передаем ссылку на HTML-элемент (куда отрендерить карту) и объект дополнительных параметров. Минимальный набор дополнительных параметров состоит из координат центра карты и коэффициента масштабирования. Эти данные мы подготовили заранее.

Метод titleLayer позволяет подключить определенный слой карты. На официальном сайте библиотеки Leaflet доступно несколько вариантов, мы воспользуемся слоем voyager.

Метод addTo указывает к какому объекту карты добавить подключенный слой.
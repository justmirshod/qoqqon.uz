import {
  YMaps,
  Map,
  Placemark,
  Polyline,
  GeolocationControl,
} from '@pbe/react-yandex-maps';
const defaultState = {
  center: [41.3560069, 69.2044714],
  zoom: 18,
  controls: ['zoomControl', 'fullscreenControl'],
};
export default function FullMap() {
  return (
    <div className='md:h-[600px] h-[300px]'>
      <YMaps>
        <Map
          defaultState={defaultState}
          modules={['control.ZoomControl', 'control.FullscreenControl']}
          style={{ height: '100%' }}
        >
          <Placemark
            geometry={[41.3560069, 69.2044714]}
            options={{
              iconImageHref: '../../assets/icons/512x512bb.jpg',
            }}
          />
          <Polyline />
          <GeolocationControl options={{ float: 'left' }} />
        </Map>
      </YMaps>
    </div>
  );
}

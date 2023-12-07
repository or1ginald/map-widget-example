import {useEffect} from 'react';

export const MapComponent = () => {
  useEffect(() => {
    // Your widget initialization code
    const fivepostMap = new window.fivepost.PickupPointsMap({
      apikey: import.meta.env.VITE_API_KEY_5POST,
      target: '#map',
      onSelectPoint: point => {
        console.log({ point });
        // ... rest of your onSelectPoint logic
      },
      onLoadYandexApi: () => {
        console.log('onLoadYandexApi');
      },
      onInit: () => {
        console.log('onInit');
      },
      onCancel: point => {
        console.log('canceled', point);
      }
    });

    // Cleanup function (optional)
    return () => {
      // You can perform cleanup here, like removing event listeners or any other necessary clean-up.
    };
  }, []); // The empty dependency array ensures that this effect runs only once after the initial render.

  return (
    <div>
      <div id="map" style={{ width: '1000px', height: '600px' }}></div>
      <div id="point-info">Выберите точку</div>
    </div>
  );
};


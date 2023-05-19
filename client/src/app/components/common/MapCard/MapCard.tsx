import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const MapCard: React.FC = () => {
    const defaultState = {
        center: [56.482404, 84.950883],
        zoom: 17,
    };

    return (
        <div className='mapcard-wrapper'>
            <YMaps preload query={{ apikey: process.env.REACT_APP_YMAP_API_KEY }}>
                <Map style={{ width: "100%", height: "100%", minHeight: "200px" }} defaultState={defaultState}>
                    <Placemark geometry={[56.482404, 84.950883]} />
                </Map>
            </YMaps>
            <div className='mapcard-details'>
                <p>Офис в Томске</p>
                <p>ООО "Реакт Хотел"</p>
                <p>634050, г. Томск, ул. Гагарина, д. 11</p>
                <p>ОГРН 1157746695644</p>
                <a href='/'>Как проехать?</a>
            </div>
        </div>
    );
};

export default MapCard;
// import React, {useState} from 'react';
// import {NavLink} from "react-router-dom";
//
// import css from './NotFoundPage.module.css'
//
// const NotFoundPage = () => {
//     return (
//         <div>
//             <h2>Ooops... Something wrong happened.</h2>
//             <p>The page you are looking for doesn't exist</p>
//             <NavLink to={'/'}>
//                 <div className={`}`}>Головна сторінка</div>
//             </NavLink>
//         </div>
//     );
// };
//
// export {NotFoundPage};

import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import osm from "../../components/Map/osm-providers";
import L from "leaflet";

import css from "../NotFoundPage/NotFoundPage.module.css";
import 'leaflet/dist/leaflet.css'

import icon from '../../data/images/marker.png'

const markerIcon = new L.Icon({
    // iconUrl: require("D:\\3.2\\практика\\TicketProjectFront\\src\\pages\\images\\marker.png"),
    iconUrl: icon,

    iconSize: [35,30],
    iconAnchor:[17,46],
    popupAnchor:[0, -46]
});
const NotFoundPage = () => {

    const center = [51.505, -0.09];
    const ZOOM_LEVEL = 13;
    return (
            <MapContainer
                          center={center}
                          zoom={ZOOM_LEVEL}
                          style={{ width: '900px', height: '500px' }} >>
                <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
                <Marker position={[51.505, -0.09]} icon={markerIcon}>

                    <Popup>

                    </Popup>
                </Marker>

            </MapContainer>
    );
};
export {NotFoundPage};

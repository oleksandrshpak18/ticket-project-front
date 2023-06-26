import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import osm from "../../components/Map/osm-providers";
import L from "leaflet";
import css from './Map.module.css'
import 'leaflet/dist/leaflet.css'

import icon from '../../data/images/marker.png'
const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [35,30],
    iconAnchor:[17,46],
    popupAnchor:[0, -46]
});

const Map = ({address}) => {
    const center = [51.505, -0.09];
    const ZOOM_LEVEL = 13;
    return (
        <MapContainer
            center={center}
            zoom={ZOOM_LEVEL}
            style={{ width: '100%', height: '500px' }} >>
            <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
            <Marker position={[51.505, -0.09]} icon={markerIcon}>
                <Popup>
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export {Map};

import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import osm from "../../components/Map/osm-providers";
import L from "leaflet";
import css from './Map.module.css'
import 'leaflet/dist/leaflet.css'

import icon from '../../data/images/marker.png'
import {Loading} from "../Loading/Loading";
const markerIcon = new L.Icon({
    iconUrl: icon,
    iconSize: [35,30],
    iconAnchor:[17,46],
    popupAnchor:[0, -46]
});

const Map = ({address}) => {
    const [longitude, setLongitude] = useState(null)
    const [latitude, setLatitude] = useState(null)
    const [center, setCenter] = useState(null)

    fetch(`https://api.geoapify.com/v1/geocode/search?text=${address}&apiKey=b0c16b5e109e4b0d8bd458e70df4128a`,
        {
            method: 'GET',
        })
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            let lat = result.features.at(0).geometry.coordinates.at(1)
            let long = result.features.at(0).geometry.coordinates.at(0)
            setLongitude(long)
            setLatitude(lat)
            // console.log(lat)
            // console.log(long)
        })
        .catch(error => console.log('error', error));

    useEffect(()=>{
        if(latitude !== null && longitude !== null) {
            setCenter([latitude, longitude])
        }
    }, [latitude])

    const ZOOM_LEVEL = 13;
    return (
        <div>
            {
                center == null && <Loading/>
            }

            {
                center!= null &&
                <MapContainer
                    center={center}
                    zoom={ZOOM_LEVEL}
                    style={{ width: '100%', height: '500px' }} >>
                    <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution}/>
                    <Marker position={[latitude, longitude]} icon={markerIcon}>
                        <Popup>
                        </Popup>
                    </Marker>
                </MapContainer>
            }
        </div>
    );
};

export {Map};

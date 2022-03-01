import React, { useEffect, useRef, ReactElement } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());


export default function Map(selectedInstance) {
  const {data, error} = useSWR('/api/getinstances', fetcher, { refreshInterval: 3600000 });
  if (!data) return <div>Loading...</div>;

  var mapCenter = [35, 12.181578770378058];
  var zoomLevel = 1;
  if (selectedInstance.instance) {
    //console.log(selectedInstance);
    mapCenter = [selectedInstance.instance.location.lat, selectedInstance.instance.location.lon];
    zoomLevel = 13;
  }
  // <MapMover />
  return (
    <>
      <MapContainer className="map" center={mapCenter} zoom={zoomLevel}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.hosts.map((site) => {
          return (
            <Marker key={site.host} position={[site.location.lat, site.location.lon]}>
              <Popup>
                <div className="map_site_name">{site.site_name}</div>
                <div className="map_host">{site.host}</div>
              </Popup>
            </Marker>
          )
        })
        }
      </MapContainer>
    </>
  )
}



import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useEffect, useState } from "react";
import { Icon, divIcon, point } from "leaflet"; // Import LatLng from leaflet
import 'leaflet-routing-machine';


// create custom icon
const customIcon = new Icon({
  iconUrl: require("../icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

const customIcon1 = new Icon({
  iconUrl: require("../components/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};



const markers = [
  {
    geocode: [48.855, 2.34],
    popUp: "Hello, I am pop up 3"
  }
];

export default function Map() {
  const [userLocation, setUserLocation] = useState([]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude + " Longitude: " + longitude + "userlocation" + userLocation);
    setUserLocation({ latitude, longitude });
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="container">
      <MapContainer center={[22.7759834, 86.1467737]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={[22.7759834, 86.1467737]} icon={customIcon1}>
              <Popup >your location</Popup>
            </Marker>
          ))}
          
          {/* Add RoutingControl component */}
          <Marker position={[22.7859834, 86.1567737]} icon={customIcon}>
            <Popup>Parking Space 1
              <br />
              Capacity:40
              <br />
              Available:10
            </Popup>
          </Marker>
          <Marker position={[22.7859834, 86.1467637]} icon={customIcon}>
            <Popup>Parking Space 2</Popup>
          </Marker>
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

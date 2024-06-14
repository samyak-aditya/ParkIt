import React from "react";
import "./dashboard.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";

import "../icons/Gemini_Generated_Image_y4t1jly4t1jly4t1.jpg";
import Map from "../components/map.js";
//import Navbar from "../components/navbar.dashboard.js";
export const Dashboard = () => {
  // const customIcon = new Icon({
  //   // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  //   iconUrl: require("../icons/placeholder.png"),
  //   iconSize: [38, 38], // size of the icon
  // });

  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: <span class="cluster-icon">${cluster.getChildCount()}</span>,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    });
  };
  const markers = [
    {
      geocode: [22.777, 86.1441],
      popUp: "Hello, I am pop up 1",
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2",
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3",
    },
  ];

  return (
    <div className="main-containerdb">
      <nav className="dashboardnav">
        <div class="brandcont">
            <span class="navbar-brand mb-0 h1">ParkIt</span>
        </div>
        <div className="self">
        <span class="navbar-brand mb-0 h1">Self Parking</span>
        </div>
        <div className="self1">
        <span class="navbar-brand mb-0 h1">Valet It</span>
        </div>
        <div className="self2">
        <span class="navbar-brand mb-0 h1">Hi, Sahil</span>
        </div>
      </nav>
      <div className="leftdb">
        <div className="leftcard">
          <div className="leftcardimag">
            <img src={'https://s3-alpha-sig.figma.com/img/ae1f/b8e0/2760cbe29916e0e525a5f3d93d1da41b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YdD-weKPokLTwLin2vgovBmMk5WoHATO2BI8UImFxbQgWSBsK~Lf6m0Ma1U9GBU~kY2-zJo9oEdA7BHP7M1EuPfHAkdABJ5AO7s653j00jhIrhRt2slM96XJFLy5ljkF7VB79zvCZxSKrhvzmaf5zsOGaJl7xzZlvzM~XTfCwro8YB0rdd2rbUE0oSmaBfQ8pe6GHcT~HPOLgJ0ByzRWN0nzvtZPCT5U2BHD3yS7RbHvK250H-LOKObCgPrapAmeZqRu1bSelmU-tEL6fpS-meV-jljw12QOHN3cd6EY3wCZm36Wo2wIEN~VI3G1Qq-ZaZqpsUjxSv1yJrrXBj7FHw__'} />
          </div>
          <h5>Park By Yourself</h5>
          <div className="searchleft">
          <form class="d-flex" role="search">
        <input type="search" placeholder="Self parking" aria-label="Search" id="leftse"/>
      </form>
          </div>
          <div className="leftlast">
          <button onClick class="btn btn-outline-success" type="submit" id="park">Park Now</button>
          </div>
        </div>
      </div>
      <div className="maps">
      <Map  />
      </div>
    </div>
  );
};
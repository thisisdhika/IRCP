import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import Marker from "../Marker";
import GoogleMap from "../GoogleMap";
import {
  defaultProps,
} from "./helper";
import styles from "./map.module.css";
import { devices as initDevices } from "../../mockData/devices";

const Map = () => {
  const { Content } = Layout;

  // eslint-disable-next-line no-unused-vars
  const [devices, setDevices] = useState(null); // for maps
  const [selectedDevice, setSelectedDevice] = useState(null); // for popup modal

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setDevices(initDevices);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  const handleScreenResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  const onMarkerClick = (device) => {
    setSelectedDevice(device);
  };

  const onMarkerHover = (device) => {
    setSelectedDevice(device);
  };

  return (
    <React.Fragment>
      <Content
        className={styles.container}
        style={{
          margin: "auto",
          maxWidth: "1200px",
          width: "90%",
        }}
      >
        
        <div className={styles.body}>
          {/* Body */}
          <div className={styles.rowBody}>
            {/* Map */}
            <div
              className={styles.columnMap}
              style={{
                width: isMobile? "100%" : "350px",
                height: isMobile
                  ? "150px"
                  : "180px",
              }}
            >
              <GoogleMap
                defaultZoom={defaultProps.zoom}
                center={{
                  lat: defaultProps.lat,
                  lng: defaultProps.lng,
                }}
              >
                {!!devices?.length &&
                  devices.map((element) => (
                    <Marker
                      key={element?.DeviceId}
                      text={element?.DeviceMetadata.DeviceName}
                      lat={
                        element?.DeviceMetadata.DeviceLocation.DeviceCoordinates
                          .Latitude
                      }
                      lng={
                        element?.DeviceMetadata.DeviceLocation.DeviceCoordinates
                          .Longitude
                      }
                      color={ 
                        element?.DeviceStatus.ConnectionStatus === "Online"
                          ? "#FF1100"
                          : element?.DeviceStatus.ConnectionStatus === "Offline"
                          ? "#505050"
                          : "#FF1100"
                      }
                      onClick={() => onMarkerClick(element)}
                      onMouseOver={() => onMarkerHover(element)}
                      selectedMarker={
                        selectedDevice?.DeviceId === element?.DeviceId
                      }
                    />
                  ))}
              </GoogleMap>
            </div>
          </div>
        </div>

     
       </Content>
    </React.Fragment>
  );
};

export default Map;

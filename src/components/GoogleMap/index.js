import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';


const GoogleMap = ({ children, places, ...props }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleScreenResize = () => {
    setWindowHeight(window.innerHeight);
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

    const mapOptions = () => {
      return {
        clickableIcons: false,
        fullscreenControl: false
        /* panControl: false,
        mapTypeControl: false,
        scrollwheel: false, */
        // styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
      }
    }

    return (
    <div style={{ width: isMobile? "100%" : '80%', height: '100%' }}>
        <GoogleMapReact
          options={mapOptions} 
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_API_KEY,
          }}
          {...props}
        >
          {children}
        </GoogleMapReact>
    </div>
)};

export default GoogleMap;
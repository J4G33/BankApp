/*global google*/

import React, { useEffect } from "react";
import { Button, Box, createTheme, ThemeProvider } from "@mui/material";


const AtmPopUp = ({ handleClose }) => {
  const handlePopupClose = () => {
    handleClose();
  };

  useEffect(() => {
    let map;

    async function initMap() {
      const position = { lat: 36.2694, lng: -104.0098 };

      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("map"), {
        zoom: 4.1,
        center: { lat: 40.5512, lng: -95.6024 },
        mapId: "8de410a968150df9",
      });

      const marker1 = new google.maps.Marker({
        position: position,
        icon: "https://i.imgur.com/wLSsMz3.png",
      });

      marker1.setMap(map);

  
    }

    initMap();
  }, []);

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          contained: {
            backgroundColor: "#006400",
            "&:hover": {
              backgroundColor: "gray",
            },
          },
        },
      },
    },
  });

  return (
    <div className="popup-box" style={{ zIndex: 9999 }}>
      <div className="box" style={{ height: "1200px", width: "600px" }}>
        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <hr />
            <div>
              {/* The Map */}
              <div id="map" style={{ height: "500px", width: "100%" }}></div>

              <Box m={1} className="custom-btn-group">
                {/* The Button */}
                <ThemeProvider theme={theme}>
                  <Button variant="contained" onClick={handlePopupClose}>
                    Close
                  </Button>
                </ThemeProvider>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtmPopUp;

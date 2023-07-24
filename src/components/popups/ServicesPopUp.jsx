import React from "react";
import { Button, Box, createTheme, ThemeProvider } from "@mui/material";

// MuiButton Theme
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

const ServicesPopUp = ({ handleClose }) => {
  const handlePopupClose = () => {
    handleClose();
  };

  return (
    <div className="popup-box" style={{ zIndex: 9999 }}>
      <div className="box">
        <div className="card">
          <div className="card-body" style={{ textAlign: "center" }}>
            <hr />
            <h2 style={{ textAlign: "center" }}>Financial Advisor</h2>
            <p style={{ textAlign: "center" }}>
              The financial advisors at our bank are the best in the industry.
            </p>
            <p style={{ textAlign: "center" }}>
              They possess extensive knowledge and expertise in banking and
              finance, enabling them to provide exceptional guidance to clients.
            </p>

            <p style={{ textAlign: "center" }}>
              With a client-centric approach and a track record of delivering
              outstanding results, our bank's financial advisors are dedicated
              to helping clients achieve their financial goals and make informed
              decisions.
            </p>

            <Box
              m={2}
              className="custom-btn-group"
              display="flex"
              justifyContent="center"
            >
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
  );
};

export default ServicesPopUp;

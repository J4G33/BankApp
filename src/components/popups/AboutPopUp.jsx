import React from 'react';
import { Button, Box, createTheme, ThemeProvider } from "@mui/material";


// MuiButton Theme 
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#006400',
          '&:hover': {
            backgroundColor: 'gray',
          },
        },
      },
    },
  },
});

const AboutPopUp = ({ handleClose }) => {
  const handlePopupClose = () => {
    handleClose();
  };
// Pop Up Information on Tempe Bank About.
  return (
    <div className="popup-box" style={{ zIndex: 9999 }}>
      <div className="box">
        <div className="card">
          <div className="card-body" style={{ textAlign: 'center' }}>
            <hr />
            <div>
              <Box m={1} className="custom-btn-group">
                <div>
                  <h2 style={{ textAlign: 'center'}}>About</h2>
                  <p style={{ textAlign: 'center',}}>
                  Tempe City Bank stands out as the best financial bank for the people due to its customer-centric approach and commitment to providing exceptional services. 
                  </p>
                  <p>
                  With a user-friendly digital platform, PlayBank offers convenient and seamless banking experiences. 
                  </p>
                  <p>
                  Their comprehensive range of products, including savings accounts, loans, and investment options, caters to diverse financial needs.
                  <p>
                  Additionally, Tempe City Bank strong emphasis on financial education empowers individuals to make informed decisions and achieve their financial goals.
                  </p>
                  </p>
                </div>
              </Box>

              <Box m={1} className="custom-btn-group" style={{ justifyContent: 'center' }}>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    onClick={handlePopupClose}
                  >
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

export default AboutPopUp;
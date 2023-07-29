import React, { useState } from "react";
import AtmPopUp from "./popups/AtmPopUp";
import AboutPopUp from "./popups/AboutPopUp";
import ServicesPopUp from "./popups/ServicesPopUp";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";



const Home = () => {
  const [showAboutPopup, setShowAboutPopup] = useState(false);
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [showAtmPopup, setShowAtmPopup] = useState(false);

  const handleAboutClick = () => {
    setShowAboutPopup(true);
    setShowServicesPopup(false);
    setShowAtmPopup(false);
  };

  const handleServicesClick = () => {
    setShowAboutPopup(false);
    setShowServicesPopup(true);
    setShowAtmPopup(false);
  };

  const handleAtmClick = () => { 
    setShowAtmPopup(true);
    setShowAboutPopup(false);
    setShowServicesPopup(false);
  };

  const handleClosePopup = () => {
    setShowAboutPopup(false);
    setShowServicesPopup(false);
    setShowAtmPopup(false);
  };

  return (
    <div>
      <section className="home-page">
        <div
          className="paddings innerWidth flexCenter home-container"
          style={{ display: "flex" }}
        >
          {/*left side */}
          <div className="flexColStart home-left">
            <div className="home-title">
              <div className="orange-circle" />

              <h1>
                Welcome <br /> To <br /> Tempe City Bank
              </h1>
            </div>

            <div className="flexColStart home-des">
              <span>
                Discover a new era of banking at Tempe City Bank, where
                innovation meets trust.
              </span>
              <br />
              <span>
                Join our banking family, where personalized service and shared
                success await.
              </span>
              <br />
            </div>

            {/* search bar */}
            <div className=" flexCenter search-bar">
            <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/location.png" alt="location"/>
              <input type="text" />
              <button
                className="btn btn-primary"
                onClick={handleAtmClick}
                style={{
                  backgroundColor: "green",
                  borderColor: "white",
                  color: "white",
                }}
              >
                ATM Search
              </button>
            </div>

            <div className="flexColStart stat">
              <div className="count-wrapper">
                <span className="count-up">
                  <CountUp delay={3} start={500} duration={4000} end={6900} />
                </span>
                <span className="plus-sign">+</span>
              </div>
              <span className="secondaryText">Happy Customers</span>
              <br />
              <div className="count-wrapper">
                <span className="count-up">
                  <CountUp
                    delay={2}
                    start={20000}
                    duration={9000}
                    end={500000}
                  />
                </span>
                <span className="plus-sign">+</span>
              </div>
              <span className="secondaryText">Return On Investments</span>
              <br />
              <div className="count-wrapper">
                <span className="count-up">
                  <CountUp delay={2} start={500} duration={4000} end={6900} />
                </span>
                <span className="plus-sign">+</span>
              </div>
              <span className="secondaryText">Business Customers</span>
            </div>
          </div>

          {/* right hand side */}
          <div className="home-right image-container">
            <img src="/TempeAz.jpg" alt="" />
          </div>
        </div>
      </section>

      <div
  className="container-fluid"
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "-25px",
    backgroundColor: "black",
    width: "100vw", // Set width to 100vw for full screen width
  }}
>
  <div
    className="card-container"
    style={{
      display: "flex",
      justifyContent: "left",
      width: "auto",
      backgroundColor: "black",
    }}
  >
    <button
      className="btn btn-primary"
      onClick={handleAboutClick}
      style={{
        backgroundColor: "green",
        borderColor: "white",
        color: "white",
      }}
    >
      About
    </button>

    <button
      className="btn btn-primary"
      onClick={handleServicesClick}
      style={{
        backgroundColor: "green",
        borderColor: "white",
        color: "white",
      }}
    >
      Financial Services
    </button>
  </div>
</div>


      {showAboutPopup && <AboutPopUp handleClose={handleClosePopup} />}
      {showAtmPopup && <AtmPopUp handleClose={handleClosePopup} />}
      {showServicesPopup && <ServicesPopUp handleClose={handleClosePopup} />}

      <section className="r-wrapper">
            <div className="padding innerWidth r-container">
              <div className="r-head flexColStart">
                <span className="orangeText">Arizona's #1 Bank</span>
                <span className="primaryText">Customer Satisfaction</span>

              </div>

            </div>

      </section>




      <div style={{ display: "flex", justifyContent: "space-between", backgroundColor: "black" }}>
    <div className="card" style={{ width: "18rem", margin: "0 2px" }}>
        <img className="card-img-top" src="../Custsatone.jpg" alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">
            <i className="bi bi-star-fill" style={{color: "orange"}}></i><i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <br />
            "I am absolutely thrilled with the investment returns I’ve received, which have surpassed my expectations and significantly boosted my financial growth!"
            <br />
            <br /> Jessika Mendez.</p>
        </div>
    </div>

    <div className="card" style={{ width: "18rem", margin: "0 2px" }}>
        <img className="card-img-top" src="/JoshBrito.jpg" alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">
            <i className="bi bi-star-fill" style={{color: "orange"}}></i><i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <br />
            Tempe Arizona Bank exceeded all my expectations with their exceptional customer service and efficient banking solutions. I am delighted to be a customer and highly recommend them for their top-notch services.            <br />
            <br /> Josh Brito.</p>
        </div>
    </div>

    <div className="card" style={{ width: "18rem", margin: "0 2px" }}>
        <img className="card-img-top" src="../Custsattwo.jpg" alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">
            <i className="bi bi-star-fill" style={{color: "orange"}}></i><i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <br />
            "My financial advisor at the bank has been a beacon of support and wisdom, guiding me through the investment process, and I couldn't be happier with the exceptional service and results!"
            <br />
            <br />
            Ashley Baker.</p>
        </div>
    </div>

    <div className="card" style={{ width: "18rem", margin: "0 2px" }}>
        <img className="card-img-top" src="../Custsatthree.jpg" alt="Card image cap" />
        <div className="card-body">
            <p className="card-text">
            <i className="bi bi-star-fill" style={{color: "orange"}}></i><i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <i className="bi bi-star-fill" style={{color: "orange"}}></i>
            <br />
              "As a couple, we are over the moon with the dedication and expertise our mortgage banker showed in helping us secure our dream home, making the entire process seamless and joyful!"
              <br />
              <br />
              Denzil & Emily Ayers.</p>
        </div>
    </div>

</div>



      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./homemort.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Home Mortgage Loans</h3>
            <p>
              Tempe City Bank is a straightforward process, offering competitive
              rates and personalized assistance to help borrowers achieve their
              homeownership goals.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./CreditCard.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Credit Card </h3>
            <p>
              Tempe City Bank provides a wide range of credit card options,
              offering flexible rewards programs, competitive interest rates,
              and exceptional customer service to cater to diverse financial
              needs and preferences.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./investment.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Investments</h3>
            <p>
              Tempe City Bank offers a comprehensive suite of investment
              services, including personalized financial planning, diverse
              investment options, and expert guidance, empowering clients to
              grow their wealth and achieve their long-term financial goals with
              confidence.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <br />
      <br />
      <footer
  style={{
    background: "black",
    padding: "10px",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>


  <div style={{ display: "flex" }}>
  <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="40"
  height="40"
  viewBox="0 0 48 48"
  style={{ marginRight: "12px", cursor: "pointer", fill: "#6c19ff", width: "40px", height: "40px" }}
  onClick={() => {
    // Open the email in the user's default email client
    window.open("mailto:j23916garcia@yahoo.com");
  }}
>
  <polyline points="44,39 4,39 4,9 44,9 44,39"></polyline>
  <polyline fill="#2100c4" points="4,9 4,12 24,27 44,12 44,9 4,9"></polyline>
</svg>

 
 <svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="40"
  height="40"
  viewBox="0 0 64 64"
  style={{
    marginRight: "12px",
    cursor: "pointer",
    fill: "#fd3c4f",
    width: "40px",
    height: "40px",
  }}
  onClick={() => {
    // Initiate a phone call to my personal number
    window.open("tel:4804860668");
  }}
>
  <path d="M22.551,41.446C6.77,25.665,12.764,17.527,14.987,15.305c1.74-1.74,5.203-1.74,6.942,0	c0.084,0.084,3.967,3.967,3.967,3.967c1.74,1.739,2.975,4.959,0.992,6.942l-1.581,1.239c-0.96,0.96-1.244,2.305-0.393,3.363	c1.018,1.266,2.402,2.796,3.937,4.33s2.931,2.785,4.196,3.802c1.058,0.851,2.532,0.695,3.492-0.265l1.258-1.56	c1.739-1.74,4.211-1.739,5.951,0c0,0,4.875,4.875,4.959,4.959c1.74,1.74,1.74,5.203,0,6.942	C46.484,51.247,38.333,57.226,22.551,41.446z"></path>
  <path d="M48.707,49.025c1.74-1.74,1.74-5.203,0-6.942c-0.053-0.054-2.062-2.062-3.506-3.506c0,0,0,0-0.001,0 c-1.882,1.883-1.935,4.903-0.156,6.849c0.012,0.072,0.012,0.166,0.002,0.241c-1.26,1.161-3.575,2.12-7.599,0.553 c-2.391-0.932-5.044,0.134-6.19,2.367C41.403,54.934,46.937,50.794,48.707,49.025z M45.201,45.589c0,0-0.001-0.001-0.001-0.001 C45.2,45.588,45.2,45.589,45.201,45.589z" opacity=".15"></path>
  <path fill="#fff" d="M22.665,34.26c-5.694-6.775-7.214-12.406-4.171-15.448	c1.257-1.257,1.684-3.018,1.309-4.631c-1.686-0.413-3.64-0.051-4.816,1.124c-2.206,2.206-8.115,10.241,7.221,25.788	C24.154,39.309,24.38,36.3,22.665,34.26z" opacity=".3"></path>
  <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="3" d="M15.645,21.853c-0.231,2.222,0.443,4.824,1.98,7.684"></path>
  <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse>
</svg>


<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="40px"
  height="40px"
  viewBox="0 0 48 48"
  style={{
    cursor: "pointer",
    fontSize: "24px",
    
  }}
  onClick={() => {
    // Initiate a new window to my LinkedIn profile
    window.open("https://www.linkedin.com/in/jorge-garcia-997643118/");
  }}
>
  <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
  <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
  <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
  <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
</svg>





  </div>
</footer>


    </div>
  );
};

export default Home;

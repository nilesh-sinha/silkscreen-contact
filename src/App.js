import React from "react";
import bgImg from "./assets/multi_bg.jpg";
import "./App.css";

function App() {
  // Script for side navigation
  function w3_open() {
    var x = document.getElementById("mySidebar");
    x.style.width = "300px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
  }

  // Close side navigation
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  // Used to toggle the menu on smaller screens when clicking on the menu button
  function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") === -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
  function hideDiv() {
    document.getElementById("id01").style.display = "none";
  }
  return (
    <div className="myPage">
      <nav
        className="w3-sidebar w3-bar-block w3-white w3-card w3-animate-left w3-xxlarge"
        style={{ display: "none", zIndex: 2 }}
        id="mySidebar"
      >
        <a
          href="javascript:void(0)"
          onClick={w3_close}
          className="w3-bar-item w3-button w3-display-topright w3-text-teal"
        >
          Close
          <i className="fa fa-remove"></i>
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 1
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 2
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 3
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 4
        </a>
        <a href="#" className="w3-bar-item w3-button">
          Link 5
        </a>
      </nav>

      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align">
          <a
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-hover-white w3-theme-d2"
            href="javascript:void(0);"
            onClick={openNav}
          >
            <i className="fa fa-bars"></i>
          </a>
          <a href="#" className="w3-bar-item w3-button w3-teal">
            {/* <i className="fa fa-home w3-margin-right"></i> */}
            <img
              className="logo"
              src={require("./assets/logo.png")}
              alt="Logo"
            />
            Silkscreen
          </a>
          <a
            href="#team"
            className="w3-bar-item w3-button w3-hide-small w3-hover-white"
          >
            Team
          </a>
          <a
            href="#work"
            className="w3-bar-item w3-button w3-hide-small w3-hover-white"
          >
            Work
          </a>
          {/* <a
            href="#pricing"
            className="w3-bar-item w3-button w3-hide-small w3-hover-white"
          >
            Price
          </a> */}
          <a
            href="#contact"
            className="w3-bar-item w3-button w3-hide-small w3-hover-white"
          >
            Contact
          </a>
          {/* <a
            href="#"
            className="w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal"
            title="Search"
          >
            <i className="fa fa-search"></i>
          </a> */}
        </div>

        <div
          id="navDemo"
          className="w3-bar-block w3-theme-d2 w3-hide w3-hide-large w3-hide-medium"
        >
          <a href="#team" className="w3-bar-item w3-button">
            Team
          </a>
          <a href="#work" className="w3-bar-item w3-button">
            Work
          </a>
          {/* <a href="#pricing" className="w3-bar-item w3-button">
            Price
          </a> */}
          <a href="#contact" className="w3-bar-item w3-button">
            Contact
          </a>
          <a href="#" className="w3-bar-item w3-button">
            Search
          </a>
        </div>
      </div>

      <div className="w3-display-container w3-animate-opacity">
        <img
          src={bgImg}
          alt="boat"
          style={{ width: "100%", minHeight: "350px", maxHeight: "600px" }}
        />
        <div className="w3-container w3-display-bottomleft w3-margin-bottom">
          <button
            onClick={hideDiv}
            className="w3-button w3-xlarge w3-theme w3-hover-teal"
            title="Go To W3.CSS"
          >
            Silkscreen Print Services Pvt Ltd.
          </button>
        </div>
      </div>

      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-top">
          <header className="w3-container w3-teal w3-display-container">
            <span
              onClick={hideDiv}
              className="w3-button w3-teal w3-display-topright"
            >
              <i className="fa fa-remove"></i>
            </span>
            <h4>Oh snap! We just showed you a modal..</h4>
            <h5>
              Because we can <i className="fa fa-smile-o"></i>
            </h5>
          </header>
          <div className="w3-container">
            <p>Cool huh? Ok, enough teasing around..</p>
            <p>
              Go to our{" "}
              <a className="w3-text-teal" href="/w3css/default.asp">
                W3.CSS Tutorial
              </a>{" "}
              to learn more!
            </p>
          </div>
          <footer className="w3-container w3-teal">
            <p>Modal footer</p>
          </footer>
        </div>
      </div>

      <div className="w3-container w3-padding-64 w3-center" id="team">
        <h2>OUR TEAM</h2>
        <p>Meet the team - our office rats:</p>

        <div className="w3-row">
          <br />

          <div className="w3-quarter">
            <img
              src={require("./assets/guy.png")}
              alt="Boss"
              style={{ width: "45%" }}
              className="w3-circle w3-hover-opacity"
            />
            <h3>Johnny Walker</h3>
            <p>CEO</p>
          </div>

          <div className="w3-quarter">
            <img
              src={require("./assets/woman.png")}
              alt="Boss"
              style={{ width: "45%" }}
              className="w3-circle w3-hover-opacity"
            />
            <h3>Rebecca Flex</h3>
            <p>Chief Designer</p>
          </div>

          <div className="w3-quarter">
            <img
              src={require("./assets/man.png")}
              alt="Boss"
              style={{ width: "45%" }}
              className="w3-circle w3-hover-opacity"
            />
            <h3>Jan Ringo</h3>
            <p>MD</p>
          </div>

          {/* <div className="w3-quarter">
            <img
              src="/w3images/avatar.jpg"
              alt="Boss"
              style={{ width: "45%" }}
              className="w3-circle w3-hover-opacity"
            />
            <h3>Kai Ringo</h3>
            <p>Fixer</p>
          </div> */}
        </div>
      </div>

      <div className="w3-row-padding w3-padding-64 w3-theme-l1" id="work">
        <div className="w3-quarter">
          <h2>Our Services</h2>
          <p>
            We thrive to provide optimum service and being lite to your pocket.
            Feel free to reach out to know more about our services.
          </p>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="/w3images/snow.jpg"
              alt="Snow"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>Vinyl Prints</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="/w3images/lights.jpg"
              alt="Lights"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>Custon office stationary</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>

        <div className="w3-quarter">
          <div className="w3-card w3-white">
            <img
              src="/w3images/mountains.jpg"
              alt="Mountains"
              style={{ width: "100%" }}
            />
            <div className="w3-container">
              <h3>And many many more</h3>
              <h4>Trade</h4>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
              <p>Blablabla</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w3-container" style={{ position: "relative" }}>
        <a
          onClick={w3_open}
          className="w3-button w3-xlarge w3-circle w3-teal"
          style={{ position: "absolute", top: "-28px", right: "24px" }}
        >
          +
        </a>
      </div>

      {/* <div className="w3-row-padding w3-center w3-padding-64" id="pricing">
        <h2>PRICING</h2>
        <p>Choose a pricing plan that fits your needs.</p>
        <br />
        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-border w3-hover-shadow">
            <li className="w3-theme">
              <p className="w3-xlarge">Basic</p>
            </li>
            <li className="w3-padding-16">
              <b>10GB</b> Storage
            </li>
            <li className="w3-padding-16">
              <b>10</b> Emails
            </li>
            <li className="w3-padding-16">
              <b>10</b> Domains
            </li>
            <li className="w3-padding-16">
              <b>Endless</b> Support
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">
                <i className="fa fa-usd"></i> 10
              </h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-theme-l5 w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large">
                <i className="fa fa-check"></i> Sign Up
              </button>
            </li>
          </ul>
        </div>

        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-border w3-hover-shadow">
            <li className="w3-theme-l2">
              <p className="w3-xlarge">Pro</p>
            </li>
            <li className="w3-padding-16">
              <b>25GB</b> Storage
            </li>
            <li className="w3-padding-16">
              <b>25</b> Emails
            </li>
            <li className="w3-padding-16">
              <b>25</b> Domains
            </li>
            <li className="w3-padding-16">
              <b>Endless</b> Support
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">
                <i className="fa fa-usd"></i> 25
              </h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-theme-l5 w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large">
                <i className="fa fa-check"></i> Sign Up
              </button>
            </li>
          </ul>
        </div>

        <div className="w3-third w3-margin-bottom">
          <ul className="w3-ul w3-border w3-hover-shadow">
            <li className="w3-theme">
              <p className="w3-xlarge">Premium</p>
            </li>
            <li className="w3-padding-16">
              <b>50GB</b> Storage
            </li>
            <li className="w3-padding-16">
              <b>50</b> Emails
            </li>
            <li className="w3-padding-16">
              <b>50</b> Domains
            </li>
            <li className="w3-padding-16">
              <b>Endless</b> Support
            </li>
            <li className="w3-padding-16">
              <h2 className="w3-wide">
                <i className="fa fa-usd"></i> 50
              </h2>
              <span className="w3-opacity">per month</span>
            </li>
            <li className="w3-theme-l5 w3-padding-24">
              <button className="w3-button w3-teal w3-padding-large">
                <i className="fa fa-check"></i> Sign Up
              </button>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
        <div className="w3-row">
          <div className="w3-col m5">
            <div className="w3-padding-16">
              <span className="w3-xlarge w3-border-teal w3-bottombar">
                Contact Us
              </span>
            </div>
            <h3>Address</h3>
            <p>Swing by for a cup of coffee, or whatever.</p>
            <p>
              <i className="fa fa-map-marker w3-text-teal w3-xlarge"></i>
                Hyderabad, IN
            </p>
            <p>
              <i className="fa fa-phone w3-text-teal w3-xlarge"></i>  +91
              9876543210
            </p>
            <p>
              <i className="fa fa-envelope-o ws3-text-teal w3-xlarge"></i>
              my@email.com
            </p>
          </div>
          <div className="w3-col m7">
            <form
              className="w3-container w3-card-4 w3-padding-16 w3-white"
              action="/action_page.php"
              target="_blank"
            >
              <div className="w3-section">
                <label>Name</label>
                <input className="w3-input" type="text" name="Name" required />
              </div>
              <div className="w3-section">
                <label>Email</label>
                <input className="w3-input" type="text" name="Email" required />
              </div>
              <div className="w3-section">
                <label>Message</label>
                <input
                  className="w3-input"
                  type="text"
                  name="Message"
                  required
                />
              </div>
              <input
                className="w3-check"
                type="checkbox"
                defaultChecked
                name="Like"
              />
              <label>I Like it!</label>
              <button type="submit" className="w3-button w3-right w3-theme">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <img
        src="/w3images/map.jpg"
        className="w3-image w3-greyscale-min"
        style={{ width: "100%" }}
      />

      <footer className="w3-container w3-padding-32 w3-theme-d1 w3-center">
        <h4>Follow Us</h4>
        <a
          className="w3-button w3-large w3-teal"
          href="javascript:void(0)"
          title="Facebook"
        >
          <i className="fa fa-facebook"></i>
        </a>
        <a
          className="w3-button w3-large w3-teal"
          href="javascript:void(0)"
          title="Twitter"
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          className="w3-button w3-large w3-teal"
          href="javascript:void(0)"
          title="Google +"
        >
          <i className="fa fa-google-plus"></i>
        </a>
        <a
          className="w3-button w3-large w3-teal"
          href="javascript:void(0)"
          title="Google +"
        >
          <i className="fa fa-instagram"></i>
        </a>
        <a
          className="w3-button w3-large w3-teal w3-hide-small"
          href="javascript:void(0)"
          title="Linkedin"
        >
          <i className="fa fa-linkedin"></i>
        </a>
        <p>
          Powered by{" "}
          <a
            href="https://www.w3schools.com/w3css/default.asp"
            target="_blank"
            rel="noopener noreferrer"
          >
            w3.css
          </a>
        </p>
        <p>
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>
        <p>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/vitaly-gorbachev"
            title="Vitaly Gorbachev"
          >
            Vitaly Gorbachev
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </p>

        <div
          style={{ position: "relative", bottom: "100px", zIndex: 1 }}
          className="w3-tooltip w3-right"
        >
          <span className="w3-text w3-padding w3-teal w3-hide-small">
            Go To Top
          </span>
          <a className="w3-button w3-theme" href="#myPage">
            <span className="w3-xlarge">
              <i className="fa fa-chevron-circle-up"></i>
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

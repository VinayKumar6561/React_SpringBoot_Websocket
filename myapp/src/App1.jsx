import business_image from "./assets/miracle.webp";
import miraclelogo from "./assets/image.png";
import "./App.css";

function App() {
  return (
    <div className="main-div">
     <div className="for-image">
  <img src={business_image} alt="Business" className="bg-image" />

  <div className="image-overlay">
    {/* Top Logo + iCloudEMS */}
    <div className="image-header">
      <img src={miraclelogo} alt="Logo" className="overlay-logo" />
      <span className="brand-name">iCloudEMS</span>
    </div>

    {/* Middle Text Content */}
    <div className="image-text">
      <h1>Powering student-centric education in universities & colleges</h1>
      <p>
        We help universities and colleges of all sizes and streams run better – from admissions to academics,
        back office to accreditations, desktop to mobiles – We empower students, faculty and management
        to collaborate efficiently and use insights effectively, benchmarking quality education while
        creating personalized learning experience.
      </p>
      <p className="leader-tagline">
        A market leader in end-to-end unified education management solutions
      </p>
    </div>

    {/* Bottom Copyright */}
    <div className="image-footer">
      <p>2025 © All rights reserved & Privacy Policy</p>
    </div>
  </div>
</div>


      <div className="for-login-form">
        <form>
          <img src={miraclelogo} alt="Logo" className="miraclelogo" />

          <input type="text" placeholder="Login ID" />
          <input type="password" placeholder="Password" />

          {/* Row for forgot password & sign in */}
          <div className="row space-between">
            <a href="#" className="forgot">
              Forgot password?
            </a>
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </div>

          {/* Social sign-in buttons */}
          <div className="social-buttons">
            <button className="google">
              <img
                src="https://corecampus.s3.ap-south-1.amazonaws.com/images/googleLogo/vector/Google__G__Logo.svg"
                alt="Google"
                className="social-logo"
              />
              Sign in with Google
            </button>
            <button className="keycloak">
              <img
                src="https://cnvcontents.s3.ap-south-1.amazonaws.com/new/keycloak.png"
                alt="Keycloak"
                className="social-logo"
              />
              Sign in with Keycloak
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

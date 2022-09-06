import React from "react";
import Typical from "react-typical";
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/login/">
                <i className="fa fab fa-facebook-f"></i>
              </a>
              <a href="https://mrsameershaikh.github.io/portfolio.github.io">
                <i className="fa fab fa-github"></i>
              </a>
              <a href="https://in.linkedin.com/">
                <i className="fa fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/login">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sameer</span>
            </span>
          </div>
          <div className="profile-details-role">
            <div className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  wrapper="p"
                  steps={[
                    "Full Stack Developer",
                    1000,
                    "MERN Stack Developer",
                    1000,
                    "Java Developer",
                    1000,
                  ]}
                  
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building application with front and back end
                operations.
              </span>
            </div>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn"> Hire Me </button>
            <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

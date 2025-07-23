'use client'
import React from "react";
import CountDown from "../Maintenance/CountDonw";
import { useState } from "react";

const CountDownTwo = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can also add your actual submit logic here (API call etc.)
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000); // Auto-hide after 4 sec
  };
  return (
    <>
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="inner">
            <div className="section-title text-start">
              <span className="subtitle bg-white-opacity">Partner With Us</span>
              <h2 className="title color-white">
                Elevate Your Brand with WeWagad Creators
              </h2>
              <p className="description has-medium-font-size mt--20 mb--0 color-white opacity-7">
                Collaborate with the most engaging creators from Wagad. Reach vibrant, loyal audiences through authentic storytelling and impactful digital presence. Let’s grow together!
              </p>
            </div>
            <div className="countdown-style-1 mt--50">
              <div className="countdown" data-date="2025-12-30">
                <CountDown targetDate="2025-08-30" targetTime="18:00:00" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6" style={{ position: "relative" }}>
          <div className="rbt-contact-form contact-form-style-1 w-100">
            <div className="section-title text-start">
              <span className="subtitle bg-primary-opacity">
                COLLABORATE WITH US
              </span>
            </div>
            <h3 className="title">Become a Sponsor / Collaborator</h3>
            <form id="sponsor-contact-form" className="w-100" onSubmit={handleSubmit}>
              <div className="form-group">
                <input name="sponsor_name" type="text" placeholder="Your Name or Brand Name" />
                <span className="focus-border"></span>
              </div>
              <div className="form-group">
                <input name="sponsor_email" type="email" placeholder="Email Address" />
                <span className="focus-border"></span>
              </div>
              <div className="form-group">
                <input type="text" name="sponsor_phone" placeholder="Phone Number" />
                <span className="focus-border"></span>
              </div>
              <div className="form-group">
                <input type="text" name="sponsor_website" placeholder="Website or Social Media (Optional)" />
                <span className="focus-border"></span>
              </div>
              <div className="form-submit-group mt--40">
                <button
                  type="submit"
                  className="rbt-btn btn-gradient hover-icon-reverse w-100"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Submit Your Interest</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </button>
              </div>
            </form>

            {showPopup && (
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: 0,
                  right: 0,
                  margin: "0 auto",
                  background: "#e0ffe6",
                  color: "#155724",
                  padding: "15px 20px",
                  borderRadius: "10px",
                  textAlign: "center",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  zIndex: 10,
                }}
              >
                <strong>WeWagd:</strong> Successfully submitted your response. We will reach you as soon as possible.
              </div>
            )}
          </div>

        </div>


      </div>
    </>
  );
};

export default CountDownTwo;

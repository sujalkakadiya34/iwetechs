import React, { useState } from "react";
import "./App.css";
import "./rspsv.css";
import { FaPlay, FaTimes } from "react-icons/fa";

function Solutionimage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section
        className="solutionimage-main"
        style={{
          backgroundImage: `url("./assets/img.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="solutionimage-overlay">
          <div className="solutionimage-content">
            {/* Left Section */}
            <div className="solutionimage-left">
              <div
                className="solutionimage-play"
                onClick={() => setShowModal(true)}
              >
                <FaPlay />
              </div>
              <p className="solutionimage-subtitle">
                <b>Do You Need a Meeting?</b>
              </p>
              <h1 className="solutionimage-title">
                Save Time and Money <br />
                with a Top IT Solution <br />
                Agency
              </h1>
            </div>

            {/* Right Section */}
            <div className="solutionimage-right">
              <div className="solutionimage-box box-light">
                <div className="solutionimage-box-padding">
                  <h2>9280</h2>
                  <p className="solutionimage-box-p">
                    We have satisfied <br /> customers
                  </p>
                </div>
              </div>
              <div className="solutionimage-box box-dark">
                <div className="solutionimage-box-padding">
                  <h2>6420</h2>
                  <p>
                    Projects has been <br /> completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Website Modal */}
      {showModal && (
        <div className="website-modal">
          <div className="website-modal-content">
            <button
              className="website-modal-close"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
            <iframe
              src="https://iwetechs.vercel.app/ " 
              title="Website Preview"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default Solutionimage;

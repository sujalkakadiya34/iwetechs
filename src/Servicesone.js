import React from 'react'
import "./Services.css";
import ServicesoneData from './ServicesoneData';

function Servicesone() {
  return (
    <>
      <div className="Servicesone-frame">
        <div className="Servicesone-layer">
          <h1 className="Servicesone-title">Services</h1>
          <p className="Servicesone-breadcrumbs">
            HOME <span>/</span> OUR TEAM
          </p>
        </div>
      </div>

      <ServicesoneData/>
    </>
  )
}

export default Servicesone
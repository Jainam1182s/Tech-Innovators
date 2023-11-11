// PathSelectionPage.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faShareAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const PathSelectionPage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Select Your Path</h2>

          <div className="card-deck mb-4">
            <div className="card text-center">
              <Link to="/events" className="card-link">
                <FontAwesomeIcon icon={faCalendarAlt} className="card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">Events</h5>
                </div>
              </Link>
            </div>

            <div className="card text-center mt-4">
              <Link to="/club" className="card-link">
                <FontAwesomeIcon icon={faUsers} className="card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">Clubs</h5>
                </div>
              </Link>
            </div>

            <div className="card text-center mt-4 ">
              <Link to="/home" className="card-link">
                <FontAwesomeIcon icon={faShareAlt} className="card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">Social Media</h5>
                </div>
              </Link>
            </div>

            <div className="card text-center mt-4 ">
              <Link to="/NGO" className="card-link">
                <FontAwesomeIcon icon={faHandsHelping} className="card-img-top icon" />
                <div className="card-body">
                  <h5 className="card-title">NGOs</h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathSelectionPage;

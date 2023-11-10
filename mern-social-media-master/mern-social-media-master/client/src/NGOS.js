// NgosPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import SF from './img/SF.png';
import AP from './img/AP.jpg';
import AW from './img/AW.jpg';
import DF from './img/DF.png';
import OA from './img/OA.jpeg';
import MCF from './img/MCF.jpeg';

// Add more NGO images as needed

const ngosData = [
    {
        name: 'Smile Foundation',
        description: 'Smile Foundation is a non-profit organization that works for the welfare of children and their families through intensive programmes focused on education, healthcare, livelihood, and women empowerment.',
        imageSrc: SF,
        website: 'https://www.smilefoundationindia.org/'
    },
    {
        name: 'Akshaya Patra',
        description: 'Akshaya Patra is a non-profit organization that works towards fighting issues like hunger and malnutrition in India. The organization strives to eliminate classroom hunger by implementing the Mid-Day Meal Scheme in the government schools and government-aided schools.',
        imageSrc: AP,
        website: 'https://www.akshayapatra.org/'
    },
    {
        name: 'Age-Well Foundation',
        description: 'Age-Well Foundation is a non-profit organization that works towards improving the quality of life of senior citizens in India. The organization provides various services like healthcare, financial assistance, and emotional support to the elderly.',
        imageSrc: AW,
        website: 'https://www.agewellfoundation.org/'
    },
    {
        name: 'Dignity Foundation',
        description: 'Dignity Foundation is a non-profit organization that works towards improving the quality of life of senior citizens in India. The organization provides various services like healthcare, financial assistance, and emotional support to the elderly.',
        imageSrc: DF,
        website: 'https://www.dignityfoundation.com/'
    },
    {
        name: 'Old-Age Solutions',
        description: 'Old-Age Solutions is a non-profit organization that works towards improving the quality of life of senior citizens in India. The organization provides various services like healthcare, financial assistance, and emotional support to the elderly.',
        imageSrc: OA,
        website: 'https://www.oldagesolutions.org/'
    },
    {
        name: 'Maya Care Foundation',
        description: 'Maya Care Foundation is a non-profit organization that works towards improving the quality of life of senior citizens in India. The organization provides various services like healthcare, financial assistance, and emotional support to the elderly.',
        imageSrc: MCF,
        website: 'https://mayacare.org/'
    }
    // Add more NGOs as needed
];



const NgosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNgos = ngosData.filter(ngo =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container bg-success mx-auto mt-4 w-screen  p-4">
     

     
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search NGOs..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredNgos.map(ngo => (
          <div key={ngo.name} className="col-md-4 mb-4">
            <div className="card" style={{ height: '100%' }}>
              <img src={ngo.imageSrc} className="card-img-top" alt={ngo.name} />
              <div className="card-body">
                <h4 className="text-primary font-weight-bold mb-2">{ngo.name}</h4>
                <p className="mt-2">{ngo.description}</p>
                <a href="#" className="btn btn-primary mt-4">Join</a>
              </div>
            </div>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default NgosPage;

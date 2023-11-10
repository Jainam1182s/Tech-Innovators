// ClubsPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import marathonImage from './img/marathon.jpeg';
import chessImage from './img/chess.jpg';
import yogaImage from './img/yoga.jpg';
import gardeningImage from './img/gardening.jpg';
import bookImage from './img/book.jpg';
import artAndCraftImage from './img/art and craft.jpg';
import musicImage from './img/music.jpg';
// Add more Club images as needed



const clubsData = [
    {
        name: 'Chess club',
        description: 'Strategic Moves, Lasting Bonds.',
        imageSrc: chessImage,
    },
    {
        name: 'Yoga club',
        description: 'Flex, Flow, Flourish: Wellness for Every Senior.',
        imageSrc: yogaImage,
    },
    {
        name: 'Gardening club',
        description: 'Blooms of Friendship: Where Gardens and Hearts Flourish.',
        imageSrc: gardeningImage,
    },
    {
        name: 'Book club',
        description: 'Turning Pages, Sharing Stories, Building Connections.',
        imageSrc: bookImage,
    },
    {
        name: 'Art and Craft club',
        description: 'Crafting Memories, Painting Tomorrows.',
        imageSrc: artAndCraftImage,
    },
    {
        name: 'Music club',
        description: 'Harmony of Ages: Where Music Unites Generations.',
        imageSrc: musicImage,
    },
    // Add more Clubs as needed
];


const ClubsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredClubs = clubsData.filter(club =>
        club.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container bg-info mx-auto mt-4 w-screen h-screen p-4">
            <div className="mb-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search Clubs..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="row justify-content-center text-center">
                {filteredClubs.map(club => (
                    <div key={club.name} className="offset-sm-1 col-sm-5 mb-4">
                        <div className="card" style={{ height: '100%' }}>
                            <img src={club.imageSrc} className="card-img-top img-fluid" alt={club.name} />
                            <div className="card-body">
                                <h4 className="text-primary font-weight-bold mb-2">{club.name}</h4>
                                <p className="mt-2">{club.description}</p>
                                <a href="#" className="btn btn-primary mt-4">Join</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ClubsPage;

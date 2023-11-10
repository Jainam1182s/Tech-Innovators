import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marathonimg from './img/marathon.jpeg';
import Cyclingimg from './img/Cycling.jpg';
import MusicTherapyimg from './img/MusicTherapy.jpg';
import CinemaNightsimg from './img/CinemaNights.jpg';
import MemoryGamesimg from './img/MemoryGames.jpg';
import HistoryToursimg from './img/HistoryTours.jpeg';

const eventsData = [
  {
    name: 'Marathon',
    date: '23/11/2023',
    description: 'Rediscover Your Stride: Embrace the Journey at  Senior Marathon!',
    imageSrc: Marathonimg,
  },
  {
    name: 'Cycling',
    date: '29/11/2023',
    description: 'Rediscover the Joy of Pedaling: Embrace the Ride, Age with Pride.',
    imageSrc: Cyclingimg,
  },
  {
    name: 'Music Therapy Sessions',
    date: '15/11/2023',
    description: 'Rediscover Harmony: Embrace the Rhythm of Life in Our Music Therapy Sessions for Seniors.',
    imageSrc: MusicTherapyimg,
  },
  {
    name: 'Senior Cinema Nights',
    date: '19/11/2023',
    description: 'Embrace the magic of ageless tales. Join our Senior Cinema Night, where memories unfold, and laughter echoes through timeless films.',
    imageSrc: CinemaNightsimg,
  },
  {
    name: 'Memory Games Tournament',
    date: '27/11/2023',
    description: 'Unleash the power of your mind! Join the Memory Game Tournament.',
    imageSrc: MemoryGamesimg,
  },
  {
    name: 'Local History Tours',
    date: '05/12/2023',
    description: 'Rediscover your roots, embrace the past. Join local history tours.',
    imageSrc: HistoryToursimg,
  },
];

const EventList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter events based on search term
  const filteredEvents = eventsData.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container bg-danger mx-auto  mt-4  w-screen h-screen p-4">
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Search events..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>

    <div className="row">
      {filteredEvents.map(event => (
        <div key={event.name} className="col-md-4 mb-4">
          <div className="card" style={{ height: '100%' }}>
            <img src={event.imageSrc} className="card-img-top" alt={event.name} />
            <div className="card-body">
              <h4 className="text-primary font-weight-bold mb-2">{event.name}</h4>
              <h6>Date: {event.date}</h6>
              <p className="mt-2">{event.description}</p>
              <a href="#" className="btn btn-primary mt-4">Join</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default EventList;

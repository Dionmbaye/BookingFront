
import React from 'react';
import './Rooms.css';

const rooms=[
    {
        'id':1,
        'name':'Room1'
    },
    {
        'id':2,
        'name':'Room2'
    }
]
function Rooms() {
    return (
    <div>
        <h1>All Rooms</h1>
        <ul className='roomsList'>
        {rooms.map((room) => (
        <li key={room.id}>
            <h3>{room.name}</h3>
        </li>
        ))}
        </ul>
    </div>)
  }
  
  export default Rooms;
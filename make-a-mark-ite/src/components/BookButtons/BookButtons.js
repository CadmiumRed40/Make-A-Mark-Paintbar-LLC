import React from 'react'
import './BookButtons.css'

function BookButtons() {
  return (
    <div>
      <h1>Danbury's own Paint-and-Sip experience</h1>
        <div className='bookingContainer'>
        <button id="Public Event" className='bookButton'>Join A Public Event</button>
        <button id="PrivateParty" className='bookButton'>Book Your Own Private Party</button>
        </div>
    </div>
  )
}

export default BookButtons

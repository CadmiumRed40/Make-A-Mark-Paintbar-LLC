import React from 'react'
import './BookButtons.css'

function BookButtons() {
  return (
    <div>
        <div className='bookingContainer'>
        <button id="Public Event" className='bookButton'>Join A Public Event</button>
        <button id="PrivateParty" className='bookButton'>Book Your Own Private Party</button>
        </div>
    </div>
  )
}

export default BookButtons

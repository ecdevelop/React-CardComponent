import React from 'react';
import './style.css';
import contacts from './components/contacts.js';
import Card from './components/Card.jsx';

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.img}
      tel={contact.tel}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <div className="Contacts">
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
      </div>
    </div>
  );
}

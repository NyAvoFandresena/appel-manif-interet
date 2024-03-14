import React, { useState } from 'react';
import './DemandeDossierForm.css';
import axios from 'axios';

const DemandeDossierForm = () => {
  const [nomPrenom, setNomPrenom] = useState('');
  const [cinNif, setCinNif] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuez ici les actions nécessaires lors de la soumission du formulaire
    console.log('Nom et prénom :', nomPrenom);
    console.log('CIN ou NIF :', cinNif);
    console.log('Nom de l\'entreprise :', nomEntreprise);
    console.log('Email :', email);
    console.log('Contact :', contact);

    // ! TEST SEND DATA TO BACKEND
    let data = {
        "nom et prenom": nomPrenom,
        "nom entreprise" : nomEntreprise
    }
    axios.post('http://localhost:5000/api/test/entreprise', data)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })
  };
  // ! END TEST SEND DATA TO BACKEND: success

  return (
    <div className="form-container">
      <form className="demande-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom et Prénom</label>
          <input
            type="text"
            value={nomPrenom}
            onChange={(e) => setNomPrenom(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CIN ou NIF</label>
          <input
            type="text"
            value={cinNif}
            onChange={(e) => setCinNif(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nom de l'entreprise</label>
          <input
            type="text"
            value={nomEntreprise}
            onChange={(e) => setNomEntreprise(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Demander</button>
      </form>
    </div>
  );
};

export default DemandeDossierForm;

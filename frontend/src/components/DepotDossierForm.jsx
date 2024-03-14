import React, { useState } from 'react';
import './DepotDossierForm.css';

const DepotDossierForme = ({onSubmit}) => {
  const [valeurInput, setValeurInput] = useState({
    file: '',
    nomAmi: '',
    description: ''
  })

  // ! nom de fichier = fichier en sois à checker 
  const handleChange = (event) => {
    const {name, value} = event.target
    setValeurInput({ ...valeurInput, [name]: value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Effectuez ici les actions nécessaires lors de la soumission du formulaire
    onSubmit(valeurInput)
    console.log(valeurInput.file)
    setValeurInput({
      file: '',
      nomAmi: '',
      description: ''
    })
  };

  return (
    <form className="depot-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Dossier DAO</label>
        <input className="form-input" type="file" onChange={handleChange} name="file" required multiple/>
      </div>

      <div className="form-group">
        <label className="form-label">AMI</label>
        <input className="form-input" type="text" value={valeurInput.nomAmi} onChange={handleChange} name="nomAmi" required/>
      </div>

      <div className="form-group">
        <label className="form-label">Description</label>
        <textarea id="" cols="30" rows="7" value={valeurInput.description} onChange={handleChange} name="description" required></textarea>
      </div>

      <button className="submit-button" type="submit">Soumettre</button>
    </form>
  );
};

export default DepotDossierForme;

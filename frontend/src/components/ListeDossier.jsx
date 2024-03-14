import React from 'react';
import './ListeDossier.css';

const ListeDossier = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>AMI</th>
            <th>Dossier</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.nomAmi}</td>
              <td>{item.dossier}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => handleAction(item)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleAction = (item) => {
  // Handle action for the specific item
  console.log('Action for:', item);
};

export default ListeDossier;

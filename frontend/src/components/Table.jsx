import React from 'react';
import './Table.css';

const Table = ({ data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>AMI</th>
            <th>Liste des fichiers</th>
            <th>Générer un lien</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.nomAmi}</td>
              <td>
                <ul>
                  {row.fichiers.map((fichier, idx) => (
                    <li key={idx}>{fichier}</li>
                  ))}
                </ul>
              </td>
              <td>
                <a href={`#${row.nomAmi}`} className="lien-groupe">
                  Generer un lien pour le groupe AMI
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

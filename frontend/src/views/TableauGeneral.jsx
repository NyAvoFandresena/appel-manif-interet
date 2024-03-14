import React from 'react'
import Header from '../components/Header'
import Table from '../components/Table'

const TableauGeneral = () => {

    // exemple de format de data à passer en props
    const data = [
        {
          nomAmi: 'Ami 1',
          nomFichier: 'Fichier 1',
          fichiers: ['Fichier1.txt', 'Fichier2.txt', 'Fichier3.txt']
        },
        {
          nomAmi: 'Ami 2',
          nomFichier: 'Fichier 2',
          fichiers: ['Fichier4.txt', 'Fichier5.txt']
        },
        {
          nomAmi: 'Ami 3',
          nomFichier: 'Fichier 3',
          fichiers: ['Fichier6.txt']
        }
      ];

  return (
    <div>
        <Header/>
        <Table data={data}/>
    </div>
  )
}

export default TableauGeneral
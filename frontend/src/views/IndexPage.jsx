import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import DepotDossierForme from '../components/DepotDossierForm'
import ListeDossier from '../components/ListeDossier'

const IndexPage = () => {
  const [formData, setFormData] = useState('')

  const [data, setData] = useState(
    [
      { nomAmi: 'AMI PG36 A',
        dossier: 'Contrat préalable.pdf', 
        description: 'Liste des normes et regles régissant le contrat' },
    ]
  )

  const handleSoumissionForm = (value) => {
    setFormData(value)
    let newData = {
      nomAmi: value.nomAmi,
      dossier: value.file,
      description: value.description
    }
    data.push(newData)
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])



  return (
    <>
        <Header/>
        <DepotDossierForme onSubmit={handleSoumissionForm}/>
    </>
  )
}

export default IndexPage
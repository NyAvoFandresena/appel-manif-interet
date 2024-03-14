import './App.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import IndexPage from './views/IndexPage'
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import TableauGeneral from './views/TableauGeneral'
import DemandeDossier from './views/DemandeDossier'
import Index from './views/Index';



function App() {
  // ! DEBUT API TEST
  const [data, setData] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/api/number')
    .then(response => {
      setNumber(response.data.year)
      console.log(response.data.year)
    })
    .catch(error => {
      console.log(error)
    })
  })
  // ! FIN API TEST

  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/depot/ajout",
      element: <IndexPage />,
    },
    {
      path: "/depot/liste",
      element: <TableauGeneral />,
    },
    {
      path: "/demande",
      element: <DemandeDossier />,
    },
  ])

  return (
      <>
        <RouterProvider router={router} />
        {/* <h1>{data}</h1> */}
        {/* <h3>{number}</h3> */}
      </>
  )
}

export default App

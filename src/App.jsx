import { useState } from 'react';
import CompAssignment from './componentAssignment.jsx';
import { createBrowserRouter, Link, Navigate, RouterProvider, useNavigate } from 'react-router-dom';
//import OpenDataAssignment from './OpenDataAssignment';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

function Home(){
  return(
    <>
      <h2>Choose Assingment to check</h2>
      <Link to='/componentassignment'>
      <button>component assignment</button>
      </Link>
      <Link to='/opendataassignment'>
      <button>opendata assignment coming soon</button>
      </Link>
    </>
  );
}

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/componentassignment',
    element: <CompAssignment/>,
  },
 // {
  //  path: '/opendataassignment',
  //  element: <OpenDataAssignment/>
 // };
]);

function App() {
  return (
    <>
      <RouterProvider router={myRouter}/>
    </>
  );
}

export default App

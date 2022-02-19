import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <h1 className="mt-3">Go Wath a Movie!</h1>
          <hr className='mb-3'></hr>
        </div>

        <div className='row'>
          <div className='col-md-2'>
            <nav>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to="/">Home</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/movies">Movies</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-md-10'>
            <Routes>
              <Route path='/movies' element={Movies}/>
              <Route path='/admin' element={Admin}/>
              <Route path='/' element={Home}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );  
}

function Home() {
  return <p>a</p>
}

function Admin() {
  return <h2>Admin</h2>
}

function Movies() {
  return <h2>Movies</h2>
}


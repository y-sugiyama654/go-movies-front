import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useMatch} from 'react-router-dom';
import Movies from './components/Movies';
import Admin from './components/Admin';
import Home from './components/Home';
import Categories from './components/Categories';
import Category from './components/Category';
import Movie from './components/Movie';

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
                  <Link to="/categories">Categories</Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/admin">Manage Catalogue</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='col-md-10'>
            <Routes>
            <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<Movie />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/categories/drama"  
                element={<Category Message="Category: Drama" />}
              />
              <Route
                path="/categories/comedy"  
                element={<Category Message="Category: Comedy" />}
              />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );  
}

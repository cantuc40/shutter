import React from 'react';
import {Route, Routes} from 'react-router-dom';
//import './App.css';

import Display from './pages/display.component';
import Header from './components/header.component';
import AddFilm from './pages/add-film.component';
import DeleteFilm from './pages/delete-film.component';
import EditFilm from './pages/edit-film.component';
import Register from './pages/register.component'


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' exact component={Display}/>
        <Route path='/register' component={Register}/>
        <Route path='/add' component={AddFilm}/>
        <Route path= '/modify' component={EditFilm}/>
        <Route path='/delete' component={DeleteFilm}/>
      </Routes>

    </div>
  );
}

export default App;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import Display from './pages/display.component';
import Header from './components/header.component';
import AddFilm from './pages/add-film.component';
import DeleteFilm from './pages/delete-film.component';
import EditFilm from './pages/edit-film.component';


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path='/' exact component={Display}/>
        <Route path='/add' component={AddFilm}/>
        <Route path= '/modify/:id' component={EditFilm}/>
        <Route path='/delete/:id' component={DeleteFilm}/>
      </Switch>

    </div>
  );
}

export default App;

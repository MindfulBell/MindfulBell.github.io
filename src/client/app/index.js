import React, { Component } from 'react';
import { render } from 'react-dom';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
import style from '../public/css/style.scss';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';

import Layout from './routes/Layout'
import HomeAbout from './routes/Home-About'
import Portfolio from './routes/Portfolio'
import Contact from './routes/Contact'
import PortfolioPiece from './routes/Portfolio-Piece'


render((<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={HomeAbout}/>
            <Route path='portfolio' component={Portfolio}/>           
            <Route path='contact' component={Contact}/>
          </Route>
        </Router>
  ), document.getElementById('app'));

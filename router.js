import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//import Components to be rendered here
import App from './App';
import PropsChildren from './components/props.children/propsChildren';
import HigherOrderComponents from './components/hoc/HigherOrderComponents';

export default(
  <BrowserRouter>
    <div>
      <Route component= { App } exact path='/' />
      <Route component= { PropsChildren } path='/props_children' />
      <Route component= { HigherOrderComponents } path='/hoc' />
    </div>
  </BrowserRouter>
)
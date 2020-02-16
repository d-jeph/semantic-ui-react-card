import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import StatCard from './components/StatCard'
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/' component={StatCard} />
      <Route  path='/test' component={()=>{ return <p>Testing Component</p> }} />
      </BrowserRouter>
    </div>
  );
}

export default App;

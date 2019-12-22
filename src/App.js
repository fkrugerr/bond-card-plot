import React from 'react';

import BondCard from './components/BondCard';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto py-4">
          <BondCard />
        </div>
      </div>
    </div>
  );
}

export default App;

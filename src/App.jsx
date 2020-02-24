import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="container">
        <div className="row">
          <MainSection/>
          <RightSection/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

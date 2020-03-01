import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import RightSection from './components/RightSection';
import DetailCard from './components/DetailCard/DetailCard';

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
      <DetailCard/>
    </React.Fragment>
  );
}

export default App;

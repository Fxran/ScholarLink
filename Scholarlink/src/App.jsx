import React from 'react';
import './App.css';
import ScholarLink from './components/landingpage/scholarlink';
import StudentOnboarding from './components/onBoarding/studentOnboarding';

function App() {
  const path = window.location.pathname.toLowerCase();
  const Page = path === '/onboarding' ? StudentOnboarding : ScholarLink;

  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;

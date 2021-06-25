import {BrowserRouter as Router, } from 'react-router-dom'

import Header from './components/Header'
import SectionSwitch from './components/SectionSwitch'


function App() {
  return (
    <Router>
    <div className="flex flex-col h-screen">
      <Header />
      <SectionSwitch />
    </div>
  </Router>
  );
}

export default App;

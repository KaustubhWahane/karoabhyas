import { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Classes from './components/Classes/Classes'; 

function App() {
  const [showClasses, setShowClasses] = useState(false); 

  const handleClassesClick = () => {
    setShowClasses(true);
  };

  return (
    <>
      <Navigation handleClassesClick={handleClassesClick} />
      {showClasses && <Classes />} 
    </>
  );
}

export default App;

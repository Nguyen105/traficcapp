import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const [activeCircle, setActiveCircle] = useState<number>(1);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const colors = ["grey", "red", "yellow", "green"];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    switch (activeCircle) {
      case 1:
        if (direction === 'down') {
          timer = setTimeout(() => setActiveCircle(2), 3500);
        } else {
	  setDirection('down');
        }
        break;
      case 2:
        if (direction === 'down') {
          timer = setTimeout(() => setActiveCircle(3), 1000);
        } 
	else {
          timer = setTimeout(() => setActiveCircle(1), 1000);
        }
        break;
      case 3:
        if (direction === 'down') {
          timer = setTimeout(() => {
            setActiveCircle(2);
            setDirection('up');
          }, 3500);
	}
        break;
      default:
        break;
    }
    return () => clearTimeout(timer);
  }, [activeCircle, direction]);

  return (
    <div className="App">
      <div className="circle" style={{ backgroundColor: activeCircle === 1 ? colors[1] : colors[0] }}></div>
      <div className="circle" style={{ backgroundColor: activeCircle === 2 ? colors[2] : colors[0] }}></div>
      <div className="circle" style={{ backgroundColor: activeCircle === 3 ? colors[3] : colors[0] }}></div>
    </div>
  );
}

export default App;

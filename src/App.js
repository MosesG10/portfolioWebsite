import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import WAVES from 'vanta/dist/vanta.waves.min';
import SubHeader from './components/SubHeader';

const App = ()=> {
  const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
  
    useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(WAVES({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x334c8c,
          shininess: 27.00,
          waveHeight: 12.50
        }))
      }
      return () => {
        if (vantaEffect) vantaEffect.destroy()
      }
    }, [vantaEffect]);

  return (
    <div ref={myRef}>
      <Header/>
      <SubHeader/>
      <Card></Card>
    </div>
  )
}

export default App;

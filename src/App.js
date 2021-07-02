import React, {useState, useEffect, useRef} from 'react';
import './App.css';
import Header from '../src/components/Header';
import Card from '../src/components/Card';
import WAVES from 'vanta/dist/vanta.waves.min';
import SubHeader from './components/SubHeader';
import schoolImage from '../src/static/TAM-Logo.svg';
import amexImage from '../src/static/American_Express-Logo.wine.svg';
import styles from './styles.module.css';

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
    <div ref={myRef} className={styles.pageWrapper}>
      <Header/>
      <SubHeader/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Card 
              image={schoolImage} 
              subHeader="B.S Industrial Engineering"
              details="August 2015 - May 2019"
              showButton={true}
              buttonTitle="More info"
              modalDetails={"blah blah blah"}
              />
          </div>
          <div className="col-md-6">
            <Card
              image={amexImage} 
              subHeader="Software Engineer"
              details="August 2019 - Present"
              showButton={true}
              buttonTitle="More info"
              modalDetails={"Blah blah blah"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;

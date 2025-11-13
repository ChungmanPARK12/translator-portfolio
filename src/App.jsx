import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Portfolio2 from './components/Portfolio2';
import AttitudeAI from './components/EnglishKorean/AttitudeAI';
import Climatechange from './components/EnglishKorean/Climatechange';
import Earthspace from './components/EnglishKorean/Earthspace';
import ForestManagement from './components/EnglishKorean/ForestManagement';
import GreenRoofs from './components/EnglishKorean/GreenRoofs';
import WiseDicision from './components/EnglishKorean/WiseDicision';
import ContainMulti from './components/EnglishKorean/ContainMulti';
import IdealCity from './components/EnglishKorean/IdealCity';
import Material from './components/EnglishKorean/Material';
import Mindset from './components/EnglishKorean/Mindset';
import Plant from './components/EnglishKorean/PlantThermometer';
import Polarbear from './components/EnglishKorean/Polarbear';
import Romanian from './components/EnglishKorean/RomanianShip';
import Stonehenge from './components/EnglishKorean/Stonehenge';
import Thefuturework from './components/EnglishKorean/Thefuturework';
import Steppyramid from './components/EnglishKorean/Steppyramid';
import Whitehouse from './components/EnglishKorean/Whitehouse';
import Casemixed from './components/EnglishKorean/Casemixed';
import Steamcar from './components/EnglishKorean/Steamcar';
import Urbanfarming from './components/EnglishKorean/Urbanfarming';

import AILiner from './components/KoreanEnglish/AILIner';
import Gptmini from './components/KoreanEnglish/Gptmini';
import Imf from './components/KoreanEnglish/Imf';
import Cloud from './components/KoreanEnglish/Cloud';
import SK from './components/KoreanEnglish/SK';
import Gal24 from './components/KoreanEnglish/Gal24';
import Google from './components/KoreanEnglish/Google';
import Nano from './components/KoreanEnglish/Nano';
import Twofold from './components/KoreanEnglish/Twofold';
import Disney from './components/KoreanEnglish/Disney';
import Line from './components/KoreanEnglish/Line';
import Robot from './components/KoreanEnglish/Robot';
import Microsoft from './components/KoreanEnglish/Microsoft';
import Samsung from './components/KoreanEnglish/Samsung';
import Iphone from './components/KoreanEnglish/Iphone';
import Apple from './components/KoreanEnglish/Apple';
import Eu from './components/KoreanEnglish/Eu';
import Insta from './components/KoreanEnglish/Insta';
import Musk from './components/KoreanEnglish/Musk';
import Fly from './components/KoreanEnglish/Fly';
import Trump from './components/KoreanEnglish/Trump';
import Trump2 from './components/KoreanEnglish/Trump2';
import Troops from './components/KoreanEnglish/Troops';
import Kuj from './components/KoreanEnglish/Kuj';

function App() {
  useEffect(() => {
    // Prevent browser from resetting scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Save scroll position on unload
    const saveScroll = () => {
      sessionStorage.setItem('scroll-position', window.scrollY);
    };
    window.addEventListener('beforeunload', saveScroll);

    // Restore scroll on mount
    const saved = sessionStorage.getItem('scroll-position');
    if (saved !== null) {
      window.scrollTo(0, parseInt(saved, 10));
    }

    return () => {
      window.removeEventListener('beforeunload', saveScroll);
    };
  }, []);

  return (
    <Router>
      <div className="app-layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="section">
                    <Intro />
                  </section>
                  <section className="section">
                    <Portfolio />
                  </section>
                  <section className="section">
                    <Portfolio2 />
                  </section>
                </>
              }
            />
            <Route path="/english-korean/attitude-ai" element={<AttitudeAI />} />
            <Route path="/english-korean/climate-change" element={<Climatechange />} />
            <Route path="/english-korean/earth-space" element={<Earthspace />} />
            <Route path="/english-korean/forest-management" element={<ForestManagement />} />
            <Route path="/english-korean/green-roof" element={<GreenRoofs />} />
            <Route path="/english-korean/wise-dicision" element={<WiseDicision />} />
            <Route path="/english-korean/contain-multi" element={<ContainMulti />} />
            <Route path="/english-korean/ideal-city" element={<IdealCity />} />
            <Route path="/english-korean/material-concrete" element={<Material />} />
            <Route path="/english-korean/mindset" element={<Mindset />} />
            <Route path="/english-korean/plant" element={<Plant />} />
            <Route path="/english-korean/polarbear" element={<Polarbear />} />
            <Route path="/english-korean/romanian" element={<Romanian />} />
            <Route path="/english-korean/stonehenge" element={<Stonehenge />} />
            <Route path="/english-korean/thefuturework" element={<Thefuturework />} />
            <Route path="/english-korean/steppyramid" element={<Steppyramid />} />
            <Route path="/english-korean/whitehouse" element={<Whitehouse />} />
            <Route path="/english-korean/casemixed" element={<Casemixed />} />
            <Route path="/english-korean/steamcar" element={<Steamcar />} />
            <Route path="/english-korean/urbanfarming" element={<Urbanfarming />} />

            <Route path="/korean-english/ailiner" element={<AILiner />} />
            <Route path="/korean-english/gptmini" element={<Gptmini />} />
            <Route path="/korean-english/imf" element={<Imf />} />
            <Route path="/korean-english/cloud" element={<Cloud />} />
            <Route path="/korean-english/sk" element={<SK />} />
            <Route path="/korean-english/gal24" element={<Gal24 />} />
            <Route path="/korean-english/google" element={<Google />} />
            <Route path="/korean-english/nano" element={<Nano />} />
            <Route path="/korean-english/twofold" element={<Twofold />} />
            <Route path="/korean-english/disney" element={<Disney />} />
            <Route path="/korean-english/line" element={<Line />} />
            <Route path="/korean-english/robot" element={<Robot />} />  
            <Route path="/korean-english/microsoft" element={<Microsoft />} />  
            <Route path="/korean-english/samsung" element={<Samsung />} />
            <Route path="/korean-english/iphone" element={<Iphone />} />  
            <Route path="/korean-english/apple" element={<Apple />} />   
            <Route path="/korean-english/eu" element={<Eu />} />
            <Route path="/korean-english/insta" element={<Insta />} />
            <Route path="/korean-english/musk" element={<Musk />} />
            <Route path="/korean-english/fly" element={<Fly />} />
            <Route path="/korean-english/Trump" element={<Trump />} />
            <Route path="/korean-english/trump2" element={<Trump2 />} />  
            <Route path="/korean-english/troops" element={<Troops />} />  
            <Route path="/korean-english/kuj" element={<Kuj />} />            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

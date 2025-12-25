import './CSS1.css';
import aiEssayImage from '../../assets/Mos/1.png';
import aiEssayImage2 from '../../assets/Mos/2.png';
import aiEssayImage3 from '../../assets/Mos/3.png';



const Fly = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image3" />
            </div>
          </div>

          <div className="translation-col-E" style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
            <p>
              <h3>The super high speed sensor that copied the fruit fly optic nerve…AI smartphone application.</h3>
            </p>
            <p>
              <h6>Published: February 29, 2024, 09:15 AM Updated: February 29, 2024, 09:16 AM  (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Park Geon-hee</h5>
            </p>
             <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            <p>KAIST, Department of Materials Science and Engineering Research Team</p>
        
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-fly" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.85rem' }}>
            <h4>English</h4>
          
            <p>
              The national research team has developed an intelligence sensor operating at super high speed, inspired by a fruit fly optic nerve. 
              It seems that it can be used in various fields such as traffic, safety, and security.    
            </p>

            <p>
              KAIST(Korean Science Technology) announced that the research team in the Department of Materials Science and Engineering with the professor 
              Mr.Kim has developed a motion recognition device that copies the insect’s vision intelligence of the nerve by fusing a Memristor Device. 
              The result of the research was uploaded to the National Technology, Materials online on 29 January.
            </p>
          
            <p>
              The memristor is a combination of Memory and Resistance. It is the device that fluctuates by the input signal. The research team developed a sensor operating motion recognized by high speed with the various Memristor devices.
            </p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>
              A schematic diagram showing the basic motion recognition process at the insect body boundary. The boundary of the body of an insect consists of the retina and the optic nerve. 
              The basic motion sensor consists of Tm3 neurons that delay signal transmission, Mi1 neurons that immediately transmit signals, and T4 neurons that process and respond to signals. 
              Signals from outside are transmitted to T4 neurons through Tm3 neurons and Mi1 neurons, respectively, and respond differently depending on the direction of operation of the object. 
            </p>
            
          </div>
        </div>

         {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage3} alt="AI Essay B" className="translation-image2" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.89rem' }}>
            <h4>English</h4>
            <p>
              The research team copied the insect’s optic nerve. Usually, insects such as fruit flies process their visual information through the optic nerve route which is called by motion recognition sensor. 
              Processing visual information means detecting visible objects and recognizing motion. There were some difficulties copying the optic nerve to the device because of the complicated circuitry and structure. 
            </p>
            <p>
              The motion recognition device the research team developed is a kind of simple structure because it works with only a Memristor device and Resistance. The two types of memristors are responsible for signal delay and signal integration and speech, respectively. 
              So it detects the motion of objects operating like an insect’s optic nerve.   
            </p>
          
            <p>
              The research team designed the computing system that predicts vehicle driving routes to confirm the application of the developed device. They add the motion recognition sensor to the system. As a result, they verified that not only does it reduce energy consumption 
              by 92.9% but it can also predict the motion of objects accurately by 15% compared with the previous technology.
            </p>
              
            <p>
              The Professor Mr.Kim from the research team said that insects can recognize the motion of objects rapidly using their visual ability. We were inspired by this and copied it using Memristor, so the AI devices will be able to contribute to implementing an efficient vision system 
              for motion recognition now that AI devices are becoming very important like on-board smartphones.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fly;

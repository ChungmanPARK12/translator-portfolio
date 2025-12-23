import './CSS1.css';
import aiEssayImage from '../../assets/Nano/1.png';
import aiEssayImage2 from '../../assets/Nano/2.png';

const Nano = () => {
    return (
      <div className="translation-page-KE">
        <div className="translation-table-KE">
          {/* SECTION A */}
          <div className="translation-row-KE">
            <div className="translation-col-K">
              <h4>Korean</h4>
              <div className="image-text-wrapper">
                <img src={aiEssayImage} alt="AI Essay A" className="translation-image-nano" />
              </div>
            </div>
  
            <div className="translation-col-E">
              <h4>English</h4>
              <p>
                <h3>[IT Hot tech]Analysis of AI in real-time...reducing consumption of energy the Nano device.</h3>
              </p>
              <p>
                <h6>Published: October 15, 2023, 1:02 PM. (Original Article)</h6>
              </p>
              <p>
                <h5>Reporter Jeong Hyun-jeong</h5>
              </p>
              <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            </div>
          </div>
  
          {/* SECTION B */}
          <div className="translation-row-KE">
            <div className="translation-col-K">
              <h4>Korean</h4>
              <div className="image-text-wrapper">
                <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-nano2" />
              </div>
            </div>
  
            <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
              <h4>English</h4>
            
              <p>
                An electronic Nano device has been developed that can confirm analysis AI instead of relying on cloud systems.
                This device can process a large amount of data so it can save the consumption of energy.  
              </p>
  
              <p>
                The research team at Northwestern University, America, developed this new device that can process classification work of "machine learning" in an effective way. 
              </p>
              
              <p>
                The research team classified a huge amount of information in the ECG dataset that can be used officially for the rest. 
              </p>
              <p>-</p>
              <p>
                For the result, they found out that it not only can distinguish the irregular rate of cardiac-impulse effectively and precisely but also, classified the subtypes of 
                arrhythmia in the six cases with 95% accuracy.
              </p>
              <p>
                In modern technology, they need more than 100 trasistors to classify huge data such as ECG but this Electronic Nano device that was developed by the research them can perform 
                for it with only 2 of devices equally. 
              </p>
              <p>
                This Nano Device is composed of a transistor miniaturized by "Molybdenum disulfide" and "Carbon nanotube" instead of existing silicone material. 
              </p>
              <p>
                The point of this theory is to reduce the consumption of energy by minimizing the number of devices and the small size enough to connect to a Wearable device.
              </p>
              
              <p>
                The professor at Northwestern University, Mark Husam who led the study about this explains that almost all sensors collect the data and then transfer them to the cloud 
                which requires higher consumption of energy, and finally, sending the data to users. 
                Still, this method is ineffective as it consumes a lot of amounts of energy as well as time wasting. 
                But this new Electronic Nano Device can detect data and process it on a Wearable Machine instantly so it can address emergencies rapidly related to human health. 
              </p>
              <p>
                The result of this study has been published in an Electronics journal related to international academics. 
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };
export default Nano;

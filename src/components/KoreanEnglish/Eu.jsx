import './CSS1.css';
import aiEssayImage from '../../assets/EUAI/1.png';
import aiEssayImage2 from '../../assets/EUAI/2.png';



const Eu = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image" />
            </div>
          </div>

          <div className="translation-col-E" style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
            <p>
              <h3> The regulation of AI targeting big technology, accelerating EU, unanimous agreement. </h3>
            </p>
            <p>
              <h6>Published: February 05, 2024, 10:21 AM (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Lee Jong-hyun</h5>
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
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.93rem' }}>
            <h4>English</h4>
          
            <p>
              [DigitalDaily = Lee Jong-hyun] The EU Union had an agreement to publicize the regulation of how AI learns and gets data. 
              They will have the final result for that after the last reference this April. It seems to be interpreting the EU’s business competition against the Bic technology in the United States, 
              and it is expected that it will have an impact on the industry.  
            </p>

            <p>
              EU News and other foreign media announced that representatives of the EU had an agreement for the details of the technology of the first AI laws in the world. 
              It was unanimous for the 27 countries that attended the meeting.
            </p>
          
            <p>
              Since OpenAI announced the Chatgpt in 2022, it started to discuss about the AI laws. The fundamental direction of the AI laws is to forbid the collection of biometric data and the obligation for security. In the case of Deepfake(AI Company), 
              they have a regulation that lets people know that it was created with AI.  
            </p>
                
            <p>-</p>
            <p>
              If the company violates the rule, they have to pay the penalty of 7% of its benefits. That means it could be over tens of trillions of dollars for MS or Google that major company in the AI industry.
            </p>
            <p>-</p>
            <p>
              The experts say that it’s been quite a long time since discussing the restrictions about the penalty but, it’s not sure if the regulation could get permission from the government yet. Because some countries in the EU preferred self-regulation of corporations, 
              but it was unanimous agreement in this EU ambassador’s meeting this time.
            </p>
            <p>
              The final result of the restriction will be through the EU Union. It is expected to get the result by March or April, unless there are any issues. Plus, it will not confirm the regulation right after getting permission, it will have a period for suspension for like 1 – 2 years to publish the regulation. 
            </p>
            
            <p>
              Meanwhile, Korea is also considering to prepare the law of AI as well. They are considering the regulation that is related to restrict industry and promotion, and suggesting that to the National Assembly. The Korean government wants to get the result quickly but, 
              they are still on standby for permission from the Science and Technology Commission. 
            </p>
          
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Eu;

import './CSS1.css';
import aiEssayImage from '../../assets/Gptmini/1.png';
import aiEssayImage2 from '../../assets/Gptmini/2.png';
import aiEssayImage3 from '../../assets/Gptmini/3.png';


const Gptmini = () => {
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

          <div className="translation-col-E">
            <h4>English</h4>
            <p>
              <h3>OpenAI, released GPT-4 mini reduced price.</h3>
            </p>
             <p>
              <h6>Published: July 19, 2024, 4:22 AM. Updated: July 19, 2024, 5:44 AM (Original Article)</h6>
            </p>
        
            <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            
            <p>
              [OpenAI Logo(Royter=Yonhap News File Photo)]
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

          <div className="translation-col-E">
            <h4>English</h4>
              <p>
              The generative AI ChatGPT development company, OpenAI announced the launch of GPT-4o mini 
              the compact version of 'GPT4o' the recent AI model on the 18th local time.
            </p>
            <p>
              Plus, they had explained that 'GPT-4o' is the most useful and effective for the price ever 
              and then they will integrate the functions of image, video, and sound later.
            </p>   
          </div>
        </div>

        
        {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage3} alt="AI Essay B" className="translation-image" />
            </div>
          </div>

          <div className="translation-col-E">
            <h4>English</h4>
              <p>
              GPT-4o gained significant attention for moving beyond traditional models that primarily 
              engaged in text based conversations to enable not only images and videos but also real-time 
              voice interations.
            </p>
            <p>
              The subscription price of 'GPT-4o' is measured to $0.15 for 1 million of input-token and 
              OpenAI explained this is a cheaper price for over 60% compared with 'GPT-3.5 Turbo'
            </p>  
            <p>
              'GPT-4o' has surpassed 'GPT-4' which had been rated as the recent version, in terms of user 
              preference for chatbot interactions and they emphasized that it achieved an accuracy 
              rate of 82% in the large-scale multitask language understanding evaluation, a test for 
              evaluation AI models. 
            </p>
            <p>
               OpenAI said that this 'GPT-4o' model will be provided to the users of ChatGPT-Plus and 
               Team and the user of ChatGPT-Enterprise which is an enterprise model can use it.
            </p> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gptmini;

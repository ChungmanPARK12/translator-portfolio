import './CSS1.css';
import aiEssayImage from '../../assets/Insta/1.png';
import aiEssayImage2 from '../../assets/Insta/2.png';



const Insta = () => {
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
              <h3> “Even Instragram”, annoyed users due to the advertisement system. </h3>
            </p>
            <p>
              <h6>Published: June 08, 2024, 05:31 AM (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Yang Ji-hye</h5>
            </p>
            <p>
              Instagram, advertisement system introducing test.
            </p>
            <p>
              There is no skip ad, increasing grievance.
            </p>
            <p>
              Would it lead to reduced users?
            </p>
        
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-insta" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.93rem' }}>
            <h4>English</h4>
            <p>
              [Seoul Economy]
            </p>
            <p>
              -
            </p>
          
            <p>
              The U.S. Social Networking Service, Instagram preparing to introduce interim advertisement. 
              User dissatisfaction is growing because you can not see the post without watching the ad. 
            </p>

            <p>
              According to IT Industry the 8th, Instagram has been testing the interim advertisement system since last week. 
              This ad, which has set the timer for 3-5 seconds, appears in the middle of the Feed on Instagram, you can not access the next posting until the timer is set to 0. 
              There is no skip ad function, so users have to wait until they finish the ad. Users used to skip the ad if they wanted before the system. 
            </p>
          
            <p>
              Some users are responding negatively to the introduction of the interim advertisement, such as “horrible”. The IT Specialized media, “Android Authority,” reported that SNS is responding that they are not using Instagram anymore. 
              In particular, it seems the reasons why users are dissatisfied with this is because they used to skip the ad if they wanted to in Feed on Instagram before.
            </p>
                
           
            <p>
              The IT Industry analysis that Facebook's parent company, “Meta”, is testing an interim advertisement system to expand the profit of the advertising business and create a subscription model because it could get more ads from clients, 
              broaden the exposure of the advertisement, and shows a subscription model like “YouTube Premium”. In particular, “Meta” introduced a subscription system without advertisements to the EU last November, 
              so users can use SNS without ads with a payment 9.99 euros per month. This was the result and solution for the European Court’s claim that there should be a service for users without the agreement of Data acquisition.
            </p>
           
            <p>
              Meanwhile, with the number of Instagram users steadily increasing in Korea, attention is being paid to whether this issue will affect the number of users. According to Mobile Index, the time of using Instagram was 100 million hours, and it ranked in 4th place following YouTube, Kakaotalk, and Naver. 
              The time of use per person was 889.2 minutes, and this is the highest figure.
            </p>
                      
          </div>
        </div>

      </div>
    </div>
  );
};

export default Insta;

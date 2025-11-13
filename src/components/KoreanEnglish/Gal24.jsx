import './CSS1.css';
import aiEssayImage from '../../assets/Gal24/1.png';
import aiEssayImage2 from '../../assets/Gal24/2.png';

const Gal24 = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image-gal24" />
            </div>
          </div>

          <div className="translation-col-E">
            <h4>English</h4>
            <p>
              <h3>Galaxy S24, Ultra Maintains No.1 Spot in U.S. Consumer Reports New iPhone released.</h3>
            </p>
              <p>
              <h6>Published: October 15, 2024, 8:29 AM. Updated: October 15, 2024, 13:19 PM (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Hwang Seoul</h5>
            </p>
          
            <p>
              <h4>Galaxy S24 Ultra and iPhone15 Promax tied for the first place.</h4> 
            </p>
            <p>
              <h4>iPhone16 Promax ranked third.</h4> 
            </p>
            <p>
              The Samsung 'Galaxy S24 Ultra', an AI-powered phone, maintains its No.1 spot in U.S. consumer market rankings, 
              even after the release of the iPhone 16 Pro Max.
            </p>    
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-gal24" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.98rem' }}>
            <h4>English</h4>
          
            <p>
              According to the industry reports on the 15th, based on the announcement from U.S. Consumer Reports, the Galacy S24 Ultra 
              scored a total of 87 points, maintaining its No.1 spot, while the iPhone 16 Pro Max tied for first place. 
            </p>

            <p>
              This smartphone ranking has announced after released iPhone 16 Pro Max. 
              Galaxy S24 was also No.1 with a total of 87 points in the last ranking on March. 
            </p>
            <p>
              iPhone Pro Max ranked on third with a total of 86 points, Galaxy S24 Plus ranked on forth with a total of 85 points.
            </p>
            <p>
              Galaxy S24 Ultra received the highest score of 5 out of 10 in several key catagories of the Consumer Reports evaluation, 
              including reliability, customer satisfaction, camera, display, durability, performance, sound, ease of use, and call quality.
            </p>
            <p>
              On the other hand, the iPhone 16 Pro Max received a score of 4 in ease of use and call quality, giving it an overall score 1 point lower than the Galaxy.
            </p>
            <p>
              Consumer Reports described the Galaxy as a fantastic option for most consumers who want premium features. 
              "They went on to say," Overall, it's superior with a brighter display, advanced processor and camera, and improved battery life. 
              However, the most attractive features are the Galaxy's AI capabilities, such as 'real-time translation', 'circle to search', and 
              'AI editing', which are practical and quite impressive.
            </p>
            <p>
              Consumer Reports is the largest consumer goods monthly magazine published by the Consumers Union in the United States.
              Each month, it compares the performance and prices of various consumer products, providing valuable information to consumers. 
              Funded solely by membership fees, donations, and magazine sales, it enjoys a high level of trust among consumers.
            </p>
            <p>
              By Hwang Seoul
            </p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gal24;

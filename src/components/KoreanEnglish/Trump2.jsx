import './CSS1.css';
import aiEssayImage from '../../assets/Trump2/1.png';
import aiEssayImage2 from '../../assets/Trump2/2.png';


const Trump2 = () => {
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

          <div className="translation-col-E" style={{ fontSize: '0.95rem' }}>
            <h4>English</h4>
            <p>
              <h3>Trump, the highest small donation after he got a guilty conviction, 40 million in a day.
              </h3>
            </p>
            <p>
              <h6>Published: July 01, 2024, 1:39 AM.  Updated: July 01, 2024, 1:42 AM. (Original Article) </h6>
            </p>
            <p>
              <h5>Reporter Lee ji-young</h5>
            </p>
          
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-trump2" />
            </div>
          </div>

          <div className="translation-col-E" >
            <h4>English</h4>
           
            <p>
              The candidate of democracy the former president, Trump received the highest rate after he was convicted of the suspicion of money to silence for his sexual harassment. 
            </p>
        
            <p>
              30th, the Trump campaign committee said that the amount of sponsored money broke the previous record after the conviction of Trump.
            </p>
        
            <p>
              The committee will announce that 40 million, the donation money which is almost double the previous record after Biden's shameful trial verdict.
            </p>
        
            <p>
              The committee argued that 30% of the donation is from the new sponsors and that the political witch hunt for former President Trump is waking up sponsors.
            </p>
            <p>
              There was an issue that the website, Supporting Donation for Election was shut down due to a huge group of sponsors flocking to the website after Trump’s conviction.
            </p>
            <p>
              Meanwhile, former President Trump used to create fundraising records with enthusiastic supporters flocking to fundraising campaigns during political crises, such as being criminally prosecuted in four previous cases. 
            </p>
            <p>By Lee Ji-young</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trump2;

import './CSS1.css';
import aiEssayImage from '../../assets/Disney/1.png';
import aiEssayImage2 from '../../assets/Disney/2.png';
import aiEssayImage3 from '../../assets/Disney/3.png';


const Disney = () => {
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
              <h3>Disney Plus restricting share accounts with multiple users, 
                an unavoidable choice? Or a business of guts?</h3>
            </p>
            <p>
              <h6>Published: October 2, 2023, 1:04 PM (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Kwon Ha-yong</h5>
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

          <div className="translation-col-E"  style={{ fontSize: '0.88rem' }}>
            <h4>English</h4>
          
            <p>
              [By Kwon Ha-young, Digital Daily] It’s been a big issue that Disney Plus introduced restrictions (no account sharing policy) for 
              password-sharing accounts with multiple users following Netflix. 
              There are a lot of complaints among users that it is a business of guts which disappoints every user.  
            </p>

            <p>
              According to the related industry on the 22nd, Disney Plus will implement the no password sharing policy 
              in Canada and the USA from the first day of next month. As they have sent a notice about this issue 
              to a Korean user’s Email as well, it is expected to begin the restriction soon.
            </p>
          
            <p>
              Disney Plus mentioned that they will not allow all users to share their password and connect to other 
              devices or TV in the terms and conditions specifically, they will only allow users to connect to the 
              device or TV in the subscriber’s home which means all users cannot share their account with people from 
              different places.
            </p>
            <p>
              Previously on Disney Plus, Netflix also banned account sharing. They introduced an extra charge policy 
              to share the account with people who are not family in 100 countries last May. 
              This restriction will be applied to more countries in the future.
            </p>
            <p>
              Regarding OTT’s business such as Netflix or Disney Plus, it can be interpreted as a natural procedure 
              because of the increasing a huge amount of investment funds and higher competition of business 
              in the global market so they got a big blow to their business this year. 
            </p>
            <p>
              However, Netflix managed to get over 5.9 million new users which is double as estimated number for the second quarter 
              of this year by going through this account-sharing restriction. 
              Netflix also managed to keep about 8.79 million users this third quarter of the year, 
              they overcame this market disaster and laid the foundation for profit improvement of their business.
            </p>
            <p>
              Analysts say that deciding to restrict account sharing for users would have been inevitable as Disney has also 
              struggled with $ 10 billion in losses since it entered the business OTT market in 2019. 
              However, Disney’s decision has attracted considerable opposition from users.
            </p>
            <p>
              Especially, it was not a good achievement the business for Disney in Korea but, they are getting better business thanks to the 
              recent popularity of the Disney original Korean series “Moving” Disney got the number of Korean users over 
              1 million after “Moving” streaming.
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

          <div className="translation-col-E"  style={{ fontSize: '0.87rem' }}>
            <h4>English</h4>
            <p>
              Also, Disney Plus has implemented a promotion that discounts an annual pass subscription fee 
              by 41% to make long-term users for the streaming service which was an unusual business strategy 
              as other OTT global platforms such as Netflix didn’t have discounts promotion often that Disney tried.
            </p>
            <p>
              Because of this, there are quite a lot of complaints about feeling betrayed by Disney among users 
              about Disney locking in users with the discounts promotion as well as using the popularity of the Korean show 
              “Moving” and then trying to introduce restrictions that all users don’t like.
            </p>
            <p>
              It seems hard to predict whether Disney could get the same business outcome achievement following 
              Netflix achieving increased new users after introducing the account prohibition policy. 
              Overall, this would be the problem linked to the competitiveness of the original series, 
              because, in the case of Disney, the number of viewers of the Killer series has diminished results recently.
            </p>
            <p>
              Disney Plus had to restructure the company, due to the continuing deterioration of their business so, 
              they had to stop their production of OTT content and TV channels for the international market. 
              Recently, Disney stopped filming the Canada original series and they had to break up the OTT team in Korea. 
            </p>
          
            <p>
              Meanwhile, Disney will have an increase in subscription fees for new users in the next month. 
              The membership which is currently 9900 won will change to Disney+ premium and raise to 13900 won 
              as well as the yearly subscription fee from 99000 won to 139000 won.
            </p>
            <p>
              By Kwon Ha-young
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disney;

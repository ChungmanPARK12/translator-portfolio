import './CSS1.css';
import aiEssayImage from '../../assets/Iphone/1.png';
import aiEssayImage2 from '../../assets/Iphone/2.png';

const Iphone = () => {
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
              <h3>Apple, iPhone 15 series, has a similar sales pattern to the previous version.
              </h3>
            </p>
            <p>
              <h6>Published: October 18, 2023, 05:12 AM. (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Jang Yu-mi</h5>
            </p>
            <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>
              <p>
              -
            </p>

              <p>
              -
            </p>
            <p>
              The new iPhone15 series shows a similar sales pattern to the iPhone14. 
        
            </p>
            <p>
              Since the iPhone 15 was officially released in Korea last month, there has been a shortage of iPhone 15 Pro models. 
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

          <div className="translation-col-E"  style={{ fontSize: '0.95rem' }}>
            <h4>English</h4>
          
            <p>
              The Financial Cloud Support Business conducted by the "Korean Fintech Support Center" is 
              supporting their consulting and cloud to small and medium-sized companies to have their business and 
              development for Fintech service in an identified security environment. So about 60 companies would get 
              nominated kt Cloud will provide customized cloud service, consulting, and a voucher maximum of 
              $100,100,00 as the supplier.
            </p>

            <p>
              The features and advantages of the Financial Cloud in kt Cloud are infrastructure customizing, providing 
              a container platform, and rational network cost. They will provide an additional coupon of $5000 to the 
              companies attended that can spend on kt Cloud services such as infrastructure Technology, Convert Cloud, 
              Electronic Finance Business, and Financial Security Consulting. 
            </p>
            <p>
              Also, kt Cloud will provide HAC(Hyperscale AI Computing) that supports a huge scale of clustering and AI 
              Serve(Serv) that AI inference service with GPU slicing technology for free to support Fintech's AI service 
              Business.
            </p>
            <p>
              Meantime, various companies such as Nick that has an Analysis Financial Trade Platform, Bizplay that provides 
              None-Evidence Expenditure Management Service, Cloud VAN company, Pinebo and Cashmelo that has Transfer Abroad 
              Global Expression etc... has been using financial cloud service in kt Cloud. 
            </p>
            <p>
              The owner of "I aurora", Mr.Jang who published the card service, "Namane" said that the small scale companies 
              usually have some difficulty integrating server and network equipment at an early stage of business but, 
              kt cloud's support was really helful for intruducing cloud and service development and also, additional coupon 
              helped us to reduce the cost of our business as well. 
            </p>
            <p>
              You can apply for the Webinar in kt Cloud's portal for free and they will send the link through email or message 
              on the Webinar's day. Also, everyone can participate in the quiz and survey event when applying, they can also 
              get a small prize through a lottery. 
            </p>
            <p>
              The director of kt Cloud, Mr.Nam said that they provide a variety of services to financial companies after publishing 
              the financial cloud service for the first time in Korea, so they will actively support effective cloud tranformation 
              and successful businesses based on the stable infrastructure, professional consulting capabilities, and know-how.
            </p>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iphone;

import './CSS1.css';
import aiEssayImage from '../../assets/Twofold/1.png';
import aiEssayImage2 from '../../assets/Twofold/2.png';
import aiEssayImage3 from '../../assets/Twofold/3.png';
import aiEssayImage4 from '../../assets/Twofold/4.png';

const Twofold = () => {
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

          <div className="translation-col-E">
            <h4>English</h4>
            <p>
              <h3>Will Foldable Phones That Fold Twice Become the Trend? Samsung Is Actively Developing Them</h3>
            </p>
               <p>
              <h6>Published: September 21, 2024, 10:00 AM. Updated: September 21, 2024, 10:00 AM (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Jo Hyun-young</h5>
            </p>  
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-twofold1" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
          
            <p>
              (Seoul=Yonhap News)China's largest telecommunications equipment company, Huawei has become the first in the world to launch a smartphone with a so-called "triple-fold" design, 
              while Samsung Electronics is also reportedly actively developing a product in this form. 
            </p>

            <p>
              According to industry sources in the IT sector, Samsung Electronics concentrates on developing a smartphone with a twice-fold design and is carefully considering its release timing. 
              The goal is to reduce thickness while enhancing usability.  
            </p>
            
            <p>
              Samsung Electronics has already launched the dual-folding "Flex-G", and the inward-and outward-folding "Flex-S" models in 2022.
            </p>
            <p>
              As a result, a major showdown between manufacturers in the triple-fold smarphone market is expected to unfold soon. 
            </p>
            <p>
              Samsung Electronics has led the foldable smartphone market since launching the world's first foldable smartphone, the "Galaxy Fold" in 2019. 
              However, with Huawei's release of the "Mate-XT", Samsung lost its lead in the commercialization of dual-fold smartphones. 
            </p>
            
          </div>
        </div>

         {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage3} alt="AI Essay B" className="translation-image-twofold1" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
            <p>
              The Mate-XT(Local Time) got significant attention, recording 3.6million pre-orders within just three days of starting pre-orders in the 7th.
            </p>
            <p>
              Even before the official sales began on the 19th, there were reports from foreign media that the price jumped threefold. 
            </p>
            <p>
              When fully unfolded, the screen of this product measures 10.2 inches, with a thickness of 3.6mm, resembling a tablet PC. 
              When folded into three layers, the thickness is estimated to be around 12mm. 
            </p>
            <p>
              The price is set at $4,000 positioning in the high-end luxury segment. 
            </p>
            <p>
              Another Chinese company, Xiaomi has also reportedly been developing a triple-fold product after receiving a patent for it from the China National Intellectual Property Administration. 
              It is expected to be released as early as 2025.
            </p>
            <p>
              Meanwhile, Apple which received a patent for a dual-fold display in 2019, has yet to make any significant announcements regarding the development or release of such a product.
            </p>
          </div>
        </div>

          {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage4} alt="AI Essay B" className="translation-image-twofold2" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
            <p>
              However, they still say in the industry that it should be improved for part of the usable to be popular of Triple fold. 
            </p>
            <p>
              An industry insider stated, "The currently released triple-fold devices carry significant symbolic meaning, primarily showcasing
              technological prowess and pioneering a new form factor." To expand demand beyond early adopters and appeal to the general public, 
              there must be a clear reason for the necessary of triple-folds, specifically in terms of usability.  
            </p>
            <p>
              The foldable market is still relatively small in scale, but it is experiencing rapid growth and it could become a new driving force for the stagnant smartphone market.
            </p>
            <p>
              According to a report by market research firm Conterpointer Research, global foldable phone shipments in the first quarter reached 3.1 million units, 
              representing a 49% increase compared to the same period last year. 
            </p>
            <p>-</p>
            <p>
              During this period, Huawei leveraged its massive domestic market to achieve a 35% market share, surpassng Samsung Electronics, 
              which had consistently held the top spot. With the launch of its triple-fold device, competition is expected to intensify even further. 
            </p>
            <p>
              Meanwhile, companies around the world are developing various types of smartphones in addition to the triple-fold design, including smartphones that open 
              and close like a wardrobe, site-out smartphones with screens that expand sideways, and rollable smartphones with screens that can be rolled up. 
            </p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>
               By Jo Hyun-young
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twofold;

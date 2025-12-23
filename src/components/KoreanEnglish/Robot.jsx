import './CSS1.css';
import aiEssayImage from '../../assets/Robot/1.png';
import aiEssayImage2 from '../../assets/Robot/2.png';

const Robot = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image-robot" />
            </div>
          </div>

          <div className="translation-col-E">
            <h4>English</h4>
              <p>
              -
            </p>
            
            <p>
              <h3>3D Automatic Driving and Mapping, Robot Cleaner.</h3>
            </p>
            <p>
              <h6>Published: March 24, 2024, 1:24 PM Updated: March 24, 2024 (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Lee Ho-gil</h5>
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
              -
            </p>
        
            <p>
              <h4>
                Matic's inddor robot vacuum cleaner. (Photo = Matic)
              </h4>
            </p>
            <p>
              The Robot Cleaner with the technology of AI (Artificial intelligence), Mapping, and 3D image recognition has been developed. 
              This robot performs cleaning smartly ‘like a person’ with a higher understanding of indoor space.
            </p>  
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-line2" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.95rem' }}>
            <h4>English</h4>
          
            <p>
              The Startup Matic in the United States has announced that this robot cleaner is moving based on target searching on the 3D map, 
              and it can explain that the accuracy has been increased based on the 3D visual understanding of the space pictured by camera shooting.  
            </p>

             <p>
              The previous model was developed relying on a 2D linear design. However, Matic’s recent model is equipped with an RGB camera capable of processing data, 
              it is designed with recognition 3D and SLAM(Simultaneous Localization and Mapping). 
              The company pointed out this model is the first robot cleaner in the world capable of automatic driving indoors. 
            </p>

            <p>
              It moves indoors effectively, and when it detects any dirt or stain, it cleans them with vacuuming and mopping. 
              It also has a voice recognition function so it can move by the owner’s order as well. 
            </p>
          
            <p>
              Matic is a venture business company created by Navneet who was Google’s researcher last 2017. He decided to concentrate 
              on developing this technology after he realized that no products were working by recognition 3D technology. 
            </p>
            <p>
              The best CEO of Matic mentioned that just as an automatic driving car needs Google map or GPS(Global Positioning System) to drive, 
              the automatic driving indoor robot also needs a 3D map which provides precise information about space, so he concluded that 
              it would need the function of mapping for indoor robots.
            </p>
            <p>
              Furthermore, this robot cleaner can detect human-like places that often get dirty. For example, it can determine that 
              the kitchen will need to be cleaned after cooking and perform cleaning automatically.
            </p>
            <p>
              The downside of this robot cleaner is its higher price. The selling price of this robot was estimated at $1795 which is 
              quite a higher price compared with the rival company’s product with $1399 to 1600. Matic will offer a limited-term discount sale and free refills for consumables to increase consumer accessibility.
            </p>     
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Robot;

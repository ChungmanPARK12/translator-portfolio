import './CSS1.css';
import aiEssayImage from '../../assets/Apple/1.png';
import aiEssayImage2 from '../../assets/Apple/2.png';
import aiEssayImage3 from '../../assets/Apple/3.png';


const Apple = () => {
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
              <h3>Manipulation iPhone with the eye, Appl releasing ‘The eyes of AI(Artificial Intelligence) this year.</h3>
            </p>
            <p>
              <h6>Published: May 17, 2024, 09:24 AM Updated: May 17, 2024, 10:08 AM  (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Min Dan-bi</h5>
            </p>
            <p>Celebrating World Accessibility Awareness Day</p>
            <p>Music haptic, the queue motion of the vehicle</p>
            <p>The CEO of TeamCook continuously extends technical boundaries.</p>  
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-apple" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
          
            <p>
              [Dailyian = Min Dan-bi] Apple will release the eye-tracking function based on AI that can manipulate iPhones and iPads the second half year.   
            </p>

            <p>
              Apple has already announced new general functions in the iPhone, such as ‘Haptic Music’, and ‘The queue motion of the vehicle’, 
              including the eye tracking function on 17th May on World Accessibility Awareness Day. It is going to be released in the second half year officially.
            </p>
          
            <p>
              This eye-tracking function can support people who have a physical disability to finish the settings and adjustments using a front camera. 
              So all of the data that is used in this process will keep safely with an on-device machine running and will not be shared with Apple.
            </p>
            <p>
              The Haptic Music uses the iPhone’s ‘Taptic engine’ to allow users with hearing impairments or hearing loss to experience music in a new way. 
              This function of the Tatic engine implements taps, texture, and dedicated vibrations depending on the sound of the music.
            </p>
            <p>
              Haptic Music operates on the millions of pieces of music in the Apple Music Catalog and it’ll be released as an application programming interface(API) 
              for developers from the applications developed by numerous developers.
            </p>
            <p>
              The queue, motion of the vehicle helps reduce motion-sickness using iPhone and iPad in a car. Moving points at the edge of the screen indicate changes in the vehicle’s movement, 
              reducing sensory collisions without disturbing the main content. 
            </p>
            <p>
              This function uses sensors built into iPhones and iPads to recognize the moment a user gets into a moving vehicle and respond appropriately. It can be set to display automatically 
              on the user’s iPhone, and users can also change the active state in the settings. 
            </p>
            <p>
              Plus, iphone and iPad users can use voice shortcuts to allow voice assistant Siri to perform complex tasks. The other new function, ‘Listen for atypical Speech’ detects the user’s speaking pattern using on-device machine learning. 
              This has been developed for users has a disease that affects their language ability such as cerebral palsy, Lou Gehrig’s disease, stroke 
            </p>
            
          </div>
        </div>

         {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage3} alt="AI Essay B" className="translation-image2" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
            <p>
              The easy-to-use function scheduled to be updated in VisionOS this year include all-round real-time captions that allow everyone, 
              including users with hearing impairments or hearing loss, to understand real-time chat and voice conversations in audio in the app. 
            </p>
            <p>
              Apple explained, “The new functions introduced this year are the result of the aggregation of Apple’s system-on-chip, 'Apple Silicon and 
              AI', and Apple hardware and software that utilize on-device machine learning.  
            </p>
            <p> - </p>
            <p>
              The CEO of Team Cook Apple said “I’m sure that the power of change through innovation made our lives abundantly”, Apple has spent nearly 40 years developing 
              inclusive designs by making easy-to-use a key functions of hardware and software. 
            </p>
                <p> - </p>
            <p>
              In addition, I will extend our technology continuously, and these new functions will reflect our long-term effort to provide the best experience to all users.  
            </p>
          
     
            <p>
              By Min Dan-bi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apple;

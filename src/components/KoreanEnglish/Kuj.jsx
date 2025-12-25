import './CSS1.css';
import aiEssayImage from '../../assets/kuji/1.png';
import aiEssayImage2 from '../../assets/kuji/2.png';

const Kuj = () => {
  return (
      <div className="translation-page-KE">
        <div className="translation-table-KE">
          {/* SECTION A */}
          <div className="translation-row-KE">
            <div className="translation-col-K">
              <h4>Korean</h4>
              <div className="image-text-wrapper">
                <img src={aiEssayImage} alt="AI Essay A" className="translation-image-kuj" />
              </div>
            </div>
  
            <div className="translation-col-E" style={{ fontSize: '0.90rem' }}>
              <h4>English</h4>
              <p>
                <h3> The South Korean ruling party met the USA, Secretary of Defense. Japan, and Hamas’s ambush, requesting the state of immediate retribution.   </h3>
              </p>
              <p>
                <h6>Published: November 13, 2023, 04:08 AM (Original Article)</h6>
              </p>
              <p>
                <h5>Reporter Lee Teak-hyun</h5>
              </p>
              <p>
                <h5>(Recomendation) (Comments)</h5>
              </p>
              <p>
                The first meeting of the defense ministers was held between South Korea, The United States, and Japan. 
              </p>
              <p>
                Establish the missile information shared system within this year.
              </p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>
              <p>
                South Korean Defense Minister Shin Won-sik and U.S. Secretary of Defense Lloyd Austin attend, via video link, a trilateral meeting of defense chiefs with Japanese Defense Minister Minoru Kihara at the Ministry of National Defense in Yongsan, Seoul, on Dec. 12.
                The meeting marks the first standalone trilateral defense talks among South Korea, the United States, and Japan. (Yonhap) 
              </p>
              <p>
                The South Korean president, Mr. Youn, has met the USA Secretary of Defense, Austin, and Youn requested Austin to keep the South Korea-USA alliance that can retribution immediately and decidedly against North Korea’s attack or provocation, including Hamas’s ambush.
              </p>
            </div>
          </div>
  
          {/* SECTION B */}
          <div className="translation-row-KE">
            <div className="translation-col-K">
              <h4>Korean</h4>
              <div className="image-text-wrapper">
                <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-kuj" />
              </div>
            </div>
  
            <div className="translation-col-E"  style={{ fontSize: '0.85rem' }}>
              <h4>English</h4>
            
              <p>
                Mr. Youn made this statement in the assembly with the Secretary, Austine, and the USA Joint Chiefs of Staff Chairman, Brown.
              </p>
  
              <p>
                South Korea, the USA, and Japan had a conference and agreed on an operation that shared information systems in real-time for North Korea’s missile alarm next month. Especially, the Secretary of Defense, Mr. Shin, and Austin are expecting to exchange opinions in the Korea-USA Security Consultative Meeting (SCM) 
                about the suspension of the 9.19 Inter-Korean Military Agreement on the 13th in Seoul. So, it draws keen attention to the result.
              </p>
            
              <p>
                Austine visited Korea with Mr. Shin and they attended the defense minister’s conference of South Korea, the USA, and Japan at the Ministry of National Defense building in Seoul, and  Defense Minister Minoru Kihara of Japan attended by video. So far, the defense minister’s meeting between South Korea, the USA, and Japan has been held only as an opportunity for multilateral meetings(Asian Security Council) and it was the first defense minister’s meeting exclusively between 
                South Korea, the USA and Japan, even though Japan attended the meeting by video. 
              </p>
              <p>
                The defense ministers of South Korea, the USA, and Japan had reviewed “Camp David” on the 8th of August, about the follow-up to the summit agreement of South Korea, the USA, and Japan. Especially, they had an agreement on the operation of the sharing information system since the next month, as they thought the sharing of information in real-time about the missile that North Korea launched had reached the final stage. The information of the alarm contains the estimated location that launched the missile, 
                the flight orbit, and the location of estimated target.
              </p>
              
              <p>
                The defense of ministers, South Korea, the USA, and Japan condemned the trading weapons between North Korea and Russia as an act of violation. This reference to the defense ministers of three countries is meaningful in that it also dealt with discussions on security cooperation between South Korea, the USA, and Japan at the level of the head of defense.
              </p>      
              <p>
                Mr. Shin and Austine expect to discuss the 9.19 Suspension of Military Agreement issue in SCM on the 13th. Mr. Shin still insists on the Suspension of the Military Agreement regarding the establishment of a no-fly zone under the military agreement because it restricts the Korean military’s ability to surveillance and reconnaissance for military targets such as North Korea’s artillery.  
              </p>
              <p>
                By Lee Teak-hyun
              </p>
            </div>
          </div>
  
        </div>
      </div>
    );
  };

export default Kuj;

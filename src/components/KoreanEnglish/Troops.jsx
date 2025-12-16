import './CSS1.css';
import aiEssayImage from '../../assets/Troops/1.png';
import aiEssayImage2 from '../../assets/Troops/2.png';
import aiEssayImage3 from '../../assets/Troops/3.png';


const Troops = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image-troops" />
            </div>
          </div>

          <div className="translation-col-E" style={{ fontSize: '0.95rem' }}>
            <h4>English</h4>
            <p>
              <h3>South Korea and U.S. to Discuss Deployment Measures on Russia… Security Consultative Meeting scheduled for the 30th.</h3>
            </p>
            <p>
              <h6>Published: October 25, 2024, 11:36 AM. Updated: October 25, 2024, 01:36 PM. (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Huh Go-un. Reporter Park Eung-jin</h5>
            </p>
            <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            <p>
              One Week Before the U.S Presidential Election… ”The U.S.-South Korea Alliance Will Develop Independently of Domestic Politics.”
            </p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>-</p>
            <p>File photo. (Courtesy of the Ministry of National Defense)</p>
            <p>(Seoul=News) Reporter Huh Go-un Park Eung-jin = Next week, defense chiefs from the U.S. and South Korea are scheduled to meet in the U.S. to discuss joint measures in response to North Korea’s troop deployment to Russia. 
              The meeting will also serve to reaffirm their commitment to strengthening the “U.S.-South Korea Integrated Extended Deterrence” against North Korea’s nuclear and missile threats.  </p>
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-troops2" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.81rem' }}>
            <h4>English</h4>
          
            <p>
              South Korea’s Ministry of National Defense said on the 25th that Defense Minister Kim Yong-hyun and U.S. Secretary of Defense Lloyd Austin will hold the 56th Security Consultative Meeting (SCM) in Washington, D.C., on Oct. 30.
              The ministry added that senior defense officials from both countries will attend the meeting to discuss bilateral defense and security issues.
            </p>

            <p>
              The SCM, established in 1968, is an annual meeting between the defense ministers of South Korea and the United States. It primarily addresses alliance issues related to military and security matters, including the security of the Korean Peninsula and the U.S and Korea combined defense posture. 
            </p>
            
            <p>
              At this year’s SCM, South Korea and the United States plan to discuss various aspects of their defense alliance to establish a foundation for the practical implementation of the “U.S.-ROK Defense Vision” agreed upon last year. 
              This meeting aims to further solidify their progression toward a “global comprehensive strategic alliance.”
            </p>
            <p>
              In this context, key agenda items will include assessments of recent security developments on the Korean Peninsula, such as the deployment of North Korean troops to Russia, coordination on North Korea policy, strengthening U.S-ROK integrated extended deterrence and combined defense posture, 
              cooperation in defense science and technology as well as the defense industry, U.S-ROK-Japan security cooperation, and security collaboration in the Indian Ocean and the Pacific region. 
            </p>
            <p>
              Following the SCM, South Korea and the United States plan to hold a joint press conference and release a joint statement to discuss the outcomes of the meeting. The announcement is expected to include an assessment of achievements made in the past two and a half years since the Yoon Suk-yeol administration took office, 
              such as enhanced extended deterrence and the Nuclear Consultative Group, and to emphasize further strengthening of alliance cooperation.  
            </p>
            <p>
              A Ministry of National Defense official stated, “The most significant aspect of this year’s SCM is that the South Korean and U.S defense ministers are meeting to discuss cooperation strategies at a time when global dynamics have become more critical than ever, with developments such as the deployment of North Korean troops 
              to Russia and the release of contaminated balloons.” The official added, “This will be Minister Kim Yong-hyun’s first overseas trip since his appointment and his first fact-to-fact meeting with the U.S Secretary of Defense.”
            </p>
            <p>
              The official added, “This meeting will send a stronger-than-ever message of the U.S-ROK alliance,” noting that, from the U.S. perspective, this is also significant as it will be the Biden administration’s last SCM and comes just a week before the presidential election.  
            </p>
            <p>
              The U.S and South Korea may announce a joint response plan regarding the deployment of North Korean troops to Russia at this SCM. According to military authorities, a South Korean delegation is scheduled to visit NATO headquarters in Brussels, Belgium, early next week to discuss information sharing related to the North Korean deployment. 
              The government has also indicated that it may consider providing “offensive weapons” support to Ukraine. 
            </p>
            <p>
              A Ministry of National Defense official stated, “At this stage, we cannot say what the outcome will be,” adding, “What is certain is that the ministers of both countries will engage in depth discussions regarding the current grave situation.”
            </p>
            
          </div>
        </div>

         {/* SECTION C */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage3} alt="AI Essay B" className="translation-image-troops3" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
    
            <p>
              At this SCM, the U.S. and South Korea also plan to assess advancements in integrated extended deterrence, which involves the combined operation of U.S. nuclear capabilities and South Korea’s advanced conventional forces. 
              However, since extended deterrence is primarily discussed through the NCG, it is unlikely that new commitments related to extended deterrence will be announced at the SCM. 
            </p>
            <p>
              A Ministry of National Defense official responded to concerns that U.S. government policies could shift following the upcoming election, stating, “We will send a message that the U.S.-ROK alliance will continue to develop strongly and robustly, independent of domestic politics in either country.
            </p>
        
            <p>
              During the SCM, Minister Kim is also scheduled to lay a wreath at the Korean War Veterans Memorial and visit research institutions focused on manned-unmanned teaming systems. A Ministry of National Defense official explained that the visit to these research institutions is intended to convey the commitment of both nations to advancing their alliance as a science and technology partnership.
            </p>
            <p>
              By Huh Go-un, Park Eung-jin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troops;

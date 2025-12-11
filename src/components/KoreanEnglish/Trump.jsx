import './CSS1.css';
import aiEssayImage from '../../assets/Trump/1.png';
import aiEssayImage2 from '../../assets/Trump/2.png';
import aiEssayImage3 from '../../assets/Trump/3.png';
import aiEssayImage4 from '../../assets/Trump/4.png';

const Trump = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image-trump1" />
            </div>
          </div>

          <div className="translation-col-E" style={{ fontSize: '0.85rem' }}>
            <h4>English</h4>
            <p>
              <h3>Trump Calls Zelensky a ‘Dictator’… U.S.-Ukraine War of Words While Putin Smiles [Russia-Ukraine Invasion]
              </h3>
            </p>
            <p>
              <h6>Published: Februray 21, 2025, 3:03 AM. (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Kim Hyo-jin</h5>
            </p>
            <p>-</p>
            <p>-</p>
      
            <p><h4>“The Guardian: ‘Zelensky Spoke the Truth, but It Could Harm Ukraine’…Putin: ‘I Would Happily Meet Trump’”</h4></p>
            <p>
      
              U.S. President Donald Trump has sparked controversy by calling Ukrainian President Volodymyr Zelensky a “dictator.” As the United States conducts ceasefire negotiations 
              with Russia while excluding Ukraine, tensions between the U.S. and Ukrainian leaders continue to worsen. Concerns are growing that Ukraine will ultimately bear the brunt of the consequences. 
              Russian President Vladimir Putin praised the United Stated for not being bound by the “past” and stated that he would be “happy” to meet with President Trump. 
            </p>
            <p>
              On the 19th, President Trump criticized Volodymyr Zelensky on his Truth Social account, stating, “The unelected dictator Zelensky had better move quickly.” He further warned, 
              “Otherwise, he will lose his country.” He also referred to President Zelensky as a “moderately successful comedian,” claiming that his “approval ratings are very low” and accusing him of having done “terrible things.”
            </p>
            <p>
              President Zelensky’s term officially ended in May last year, but Ukraine has not held elections since imposing martial law following Russia’s invasion in February 2022. With Russia having occupied approximately 20% of Ukraine’s territory, 
              primarily in the eastern regions, and a significant portion of the population displaced either abroad or as internal refugees, holding an election under the current circumstances remains highly challenging. Additionally, many Ukrainian soldiers are 
              actively engaged in combat, further complicating the feasibility of an election. President Zelensky, a former comedian, was democratically elected and has been in office since 2019.
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

          <div className="translation-col-E" style={{ fontSize: '0.85rem' }}>
            <h4>English</h4>
           
            <p>
              European leaders swiftly refused President Trump’s claim that Zelensky is a “dictator.” On the evening of the 19th, UK Prime Minister Keir Starmer spoke with President Zelensky and expressed his 
              “support for Zelensky as Ukraine’s democratically elected leader.” He also stated that “halting elections during wartime is entirely reasonable, just as the UK did during World War 2.” According to AP, 
              German Chancellor Olaf Scholz also told Der Spiegel that undermining President Zelensky’s democratic legitimacy is “wrong and dangerous.” He emphasized, “The fact that orderly elections cannot be held during wartime aligns with Ukraine’s constitution and electoral laws. No one should claim otherwise.”
            </p>
            <p>
              President Trump claimed the previous day, without providing any evidence, that President Zelensky’s approval rating was “4%.” However, according to a poll conducted earlier this month by the Kyiv International Institute of Sociology in Ukraine, Zelensky’s approval rating stands at 57%, which cannot be considered “very low.” 
              This is even higher than President Trump’s approval rating reported in a joint Reuters-Ipsos poll released on the 19th.  
            </p>
           
            <p>
              President Trump’s claims regarding the scale of U.S. aid to Ukraine are also exaggerated. President Trump claimed on social media that U.S. aid to Ukraine amounts to $350 billion, however, according to data from the U.S. Special Inspector General overseeing Ukraine aid, the actual amount of U.S. support from February 2022 to September last year stands at $183 billion.
            </p>
            <p>
              President Trump’s remarks appear to be a reaction to President Zelensky’s earlier strong criticism, in which he accused Trump of being trapped in Russian “disinformation.” According to The New York Times and NPR, President Zelensky stated during a press conference on the 19th, “President Trump lives in a space of disinformation,” adding that “he knows this disinformation comes from Russia.” He urged, 
              “I want to see more truth from Trump’s team because all of this does not have a positive impact on Ukraine.”
            </p>
            <p>
              Ukrainian President Volodymyr Zelensky’s remarks came in response to former U.S. President Donald Trump’s recent claim that Ukraine had “started” the war, a statement Zelensky dismissed as false.

              On Jan. 1, Trump was asked during a post-presidency U.S.–Russia meeting about the exclusion of Ukraine from the talks, and responded by saying that Ukraine “should not have started the war” and that a negotiated settlement “could have been possible.”

              In reality, Russia forcibly annexed Crimea in 2014 and launched a full-scale invasion of Ukraine in February 2022, marking the true start of the ongoing war.
            </p>
  
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trump;

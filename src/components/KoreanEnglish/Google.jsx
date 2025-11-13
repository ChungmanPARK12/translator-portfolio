import './CSS1.css';
import aiEssayImage from '../../assets/Google/1.png';
import aiEssayImage2 from '../../assets/Google/2.png';
import aiEssayImage3 from '../../assets/Google/3.png';

const Google = () => {
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
              <h3>Google, invested $2 billion in Anthropic's open AI rival company.</h3>
            </p>
            <p>
              <h6>Published: October 30, 2023, 4:08 AM. (Original Article)</h6>
            </p>
            <p>
              <h5>Reporter Moon Dong-seong</h5>
            </p>
            <p>
              <h5>(Recomendation) (Comments)</h5>
            </p>
            <p>
              <h4>Challenge the MS Open AI Ailliance.</h4> 
            </p>
            <p>
              <h4>Big Tech's AI Market Leadership Competition Fierce</h4> 
            </p>
             <p>
              <h4>Microsoft is about to regain the top market cap over Apple.</h4> 
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

          <div className="translation-col-E"  style={{ fontSize: '0.98rem' }}>
            <h4>English</h4>
          
            <p>
              Google will invest a maximum of $2 billion in 'Anthropic' the start-up company for AI(Artificial Intelligence) this year.
              Anthropic is the most rival company of generative development AI and they developed ChatGPT.
              It seems like among the global big technology companies the AI market is becoming increasingly competitive with the alliance between 
              Microsoft and OpenAI. 
            </p>

            <p>
              According to WSJ(World street journal), Google and Enthropic had an agreement to invest $500 million in Enthropic as the initial investment 
              and then invest $1.5 billion later. Google had already invested $500 million in Anthropic earlier this year. 
            </p>
            
            <p>
              The Anthropic company was created by the sister of Danniella Amherday and Dario Amherday who was a member of the openAI's creator. 
              They have Chatbot cloud2. This company has discrimination from other AI start-up companies as they aim at training to pursue the value of morality for AI. 
              The company value of Anthropic is evaluated at approximately 4 billion standards this year.
              Amazon decided to invest in Anthropic a miximum 4 billion last September as well so Amazon will invest $1.2 billion as the initial investment 
              and then increase the investment following the condition later.
            </p>
            <p>
              Chatbot cloud2 can input more data at once thatn other clouds. The capacity of the input window is 100,000 tokens(The text data unites recognized by AI).
              It has a higher capacity 3 times than ChatGPT which is based on open AI's GPT-4.
            </p>
            <p>
              Google's action can be interpreted as tyring to get one step ahead of the market against the alliance of 'MS Open AI'. 
              MS already has a stake of 49% after investment in OpenAI at approximately $14 billion. 
              The size of Google and Amazon's stake in Anthropic is still unknown.
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

          <div className="translation-col-E"  style={{ fontSize: '0.98rem' }}>
            <h4>English</h4>
          
            <p>
              <h3>Global big tech's investment in AI companies</h3> 
            </p>

            <p>
              <h4>Microsoft - invested $14 billion in OpenAI</h4> 
            </p>
            <p>
              <h4>Amazon - invested $4 billion in Anthropic</h4>
            </p>
            <p>
              <h4>Google - 2.5 billion in Anthropic</h4>
            </p>
            <p>
              MS(Microsoft) is on the verge of retaking the first ranking in the world's capitalization.
              MS's market capitalization is at approximately $2 trillion, and they are chasing Apple which ranked in first place
              ($3 trillion) as of 27th this month. The last time MS's capitalization broke Apple's record was in November 2021.
            </p>
            <p>
              The market gives MS a high level of evaluation for MS integrating the generative AI into the product and then providing that 
              with the cloud service, it was impressed that it increased 29% for MS's business income of cloud computing platform 'Azure' 
              in this third quarter compared as the last year. The estimate was 26%.
            </p>
            <p>
              It is expected that MS's capitalization will get the first place ranked early next month because Apple's announcement of their 
              business achievement for the third quarter will be on the 2nd of next month. 
              It is possible to get a fall in stock price for Apple if they got the lower business achievement in the announcement. 
              The market predicts that Apple's business income will decrease by 1% for the third quarter as the last second quarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Google;

import './CSS1.css';
import aiEssayImage from '../../assets/Gal24/1.png';
import aiEssayImage2 from '../../assets/Gal24/2.png';

const Gal24 = () => {
  return (
    <div className="translation-page-KE">
      <div className="translation-table-KE">
        {/* SECTION A */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage} alt="AI Essay A" className="translation-image-gal24" />
            </div>
          </div>

          <div className="translation-col-E">
            <h4>English</h4>
            <p>
              <h3>Galaxy S24, Ultra Maintains No.1 Spot in U.S. Consumer Reports New iPhone released.</h3>
            </p>
            <p>
              <h4>Galaxy S24 Ultra and iPhone15 Promax tied for the first place.</h4> 
            </p>
            <p>
              <h4>iPhone16 Promax ranked third.</h4> 
            </p>
            <p>
              The Samsung 'Galaxy S24 Ultra', an AI-powered phone, maintains its No.1 spot in U.S. consumer market rankings, 
              even after the release of the iPhone 16 Pro Max.
            </p>    
          </div>
        </div>

        {/* SECTION B */}
        <div className="translation-row-KE">
          <div className="translation-col-K">
            <h4>Korean</h4>
            <div className="image-text-wrapper">
              <img src={aiEssayImage2} alt="AI Essay B" className="translation-image-gal24" />
            </div>
          </div>

          <div className="translation-col-E"  style={{ fontSize: '0.90rem' }}>
            <h4>English</h4>
          
            <p>
              SK Group owns major semiconductor-related companies, including memory giant SK hynix as well as firms 
              such as SKC, SK Materials, and SK Siltron.
            </p>

            <p>
              Recently SK hynix acquired Key Foundry(8-inch foundry), SKC took over ISC(back-end components), and 
              SK Inc. bought Evertech(special adhesives for packaging), underscoring the group's active push to expand its 
              semiconductor business portfolio. 
            </p>
            <p>
              This strategy by SK Group is expected to continue throughout this year
            </p>
            <p>
              A semiconductor industry official explained, "SK Group has selected six to seven candidates for new business and 
              is expected to move forward with some of them," adding that "its related affiliates are already moving busily
              in line with the plan."
            </p>
            <p>
              For example, SK Siltron is understood to have entered talks in the first quarter of this year to establish 
              a partnership with a domestic company specializing in power semiconductor materials.
            </p>
            <p>
              In addition to its mainstay silicon wafer business, SK Silstron is also developing next-generation power semiconductor 
              materials such as silicon carbide(SiC) wafers. The discussions are reportely focued on galium nitride(GaN), another next-generation power semiconductor material 
              that is drawing attention alongside SiC.
            </p>
            <p>
              Compared with silicon-based semiconductors, SiC and GaN offer higher durability under high temperatures and 
              voltages as well as greater power efficiency. In particular, SiC excels in high-temperature and high-voltage endurance, 
              while GaN stands out for its switching properties(the ability to turn electrical signals on and off) driving growing market 
              demand for each material in their respective applications. 
            </p>
            <p>
              ISC, which was acquired by SKC in October last year, is also reviewing acquisitions of companies that can be linked to its 
              existing back-end component business. Although the specific business area and candidate firms have not been disclosed, 
              the M&A deal is expected to be finalized as early as the second half of this year. 
            </p>
            <p>
              Another semiconductor industry official said "These recent moves by the affiliates reflect SK Group's strong intention to build 
              a broader semiconductor ecosystem," adding that "the group is focusing on securing fundamental technologies and 
              areas that can generate synergy effects."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gal24;

import './CSS.css';

const ContainMulti = () => {
  return (
    <div className="translation-page">
      <div className="translation-table">

        {/* Section A */}
        <div className="translation-row">
          <div className="translation-col">
            <h4>English</h4>
            <h3>I contain multitudes</h3>
            <h4>Wendy Moore reviews Ed Yong's book about microbes</h4>
            <p>
              <strong>A.</strong> Microbes, most of them bacteria, have populated this planet since long before animal life developed 
              and they will outlive us. Invisible to the naked eye, they are ubiquitous. 
              They inhabit the soil, air, rocks and water and are present within every form of life, from seaweed and coral to dogs and humans. 
              And, as Yong explains in his utterly absorbing and hugely important book, we mess with them at our peril.   
            </p>
          </div>
          <div className="translation-col2">
            <h4>Korean</h4>
            <h3>미생물의 다양성.</h3>
            <h4>"웬디 무어"의 미생물에 관한 "에드 영"의 연구에 대한 검토</h4>
            <p>
              <strong>A.</strong> 흔히 "박테리아"라고 알려진 육안으로는 보이지 않는 미생물들은 오래전부터 우리의 삶 속에 존재해 왔습니다. 
              이러한 미생물들은 토양, 공기, 바위, 물 등에 서식하고, 해초와 산호부터 개와 인간에게 이르기까지 모든 형태의 생명체 안에 존재합니다. 
              "에드 영"의 "박테리아"에 대한 연구 자서에 설명되어 있듯이, 인간에게 있어서 미생물의 위험성을 불가피할 것입니다.   
            </p> 
          </div>
        </div>

        {/* Section B */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>B.</strong> Every species has its own colony of microbes, called a 'microbiome', and these microbes vary not only between 
              species but also between indivisuals and within different parts of each individual. What is amazing is that while the number of human cells 
              in the average person is about 30 trillion, the number of microbial ones is higher - about 39 trillion. 
              At best, Yong informs us, we are only 50 percent human. Indeed, some scientists even suggest we should think of each species and its 
              microbes as a single unit, dubbed a 'holobiont'
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>B.</strong> '마이크로바이옴'(microbiome)은 미생물들 중 다양성을 지닌 종입니다. 이 미생물은 셀 수 없을정도의 종으로 나누어지기도 합니다. 
              한 가지 놀라운 사실은, 평범한 사람이 가지고 있는 세포의 수는 대략 30조, 마이크로옴은 이보다 더 높은 수치인 39조의 세포를 가지고 있습니다. 
              "에드 영"은 존재하는 미생물의 수에 비하면 인간은 기껏해야 50% 정도의 숫자라고 언급한 바 있습니다. 
              실제로, 몇몇 과학자들은 각각의 종과 그 미생물들을 '홀로비온트'(holobiont)라고 불리는 각 단위의 이론을 설명하기도 하였습니다. 
            </p>
          </div>
        </div>

        {/* Section C */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>C.</strong> In each human there are microbes that live only in the stomach, the mouth or the armpit and by and large they do so peacefully.
              So 'bad' microbes are just microbes out of context. Microbes that sit contentedly in the human gut(where there are more microbes that there are stars in the galaxy)
              can become deadly if they find their way into the bloodstream. These communities are constantly changing too. 
              The right hand shares just one sixth of its microbes with the left hand. And, of course, we are surrounded by microbes. 
              Every time we eat, we swallow a million microbes in each gram of food; we are continually swapping microbes with other humans, pets and the world at large. 
              
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>C.</strong> 보통 인간의 뱃속, 입, 겨드랑이에 서식하는 미생물은 인체에 무해하지만, 인간의 내장 속(은하계의 별들보다 많은 미생물들이 서식하는)의 미생물들이 혈액속으로 
              들어오게 된다면 치명적일 수 있습니다. 이러한 공동체들은 계속해서 변화 중이고, 우리는 미생물들속에 항상 노출되어 살고 있습니다. 우리가 음식을 먹을 때마다 그램당 100만 마리의 미생물들이 우리 입속에 
              들어오듯이, 우리는 꾸준히 일상에서 미생물들을 접촉하며 살고 있습니다. 
            </p>
        
          </div>
        </div>

        {/* Section D */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>D.</strong> It's a fascinating topic and Yong, a young British science journalist, is an extraordinarily adept guide. 
              Writing with lightness and panaches, he has a knack of explaining complex science in terms that are both easy to understand and totally enthralling. 
              Young is on a mission. Leading us gently by the hand, he takes us into the world of microbes - a bizarre, alien planet - in a bid to persuade us to love them 
              as much as he does. By the end, we do.   
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>D.</strong> 영국의 젊은 과학 저널리스트 '영'은 이러한 일반적이지 않은 이론과 흥미로운 주제에 대한 능숙한 브리핑능력을 갖추고 있습니다. 
              보드판에 글씨를 빠르게 갈겨쓰는 그의 솜씨는 듣는사람들이 과학의 복잡한 이론에 대한 쉬운 이해와 흥미를 북돋아 줍니다. 영 저널리스트 에게는 임무가 하나 있는데 그것은, 
              우리들을 미생물들의 세계로 인도해 주는것 - 기이한 외계행성 같은 - 그리고 우리들도 영 저널리스트가 미생물을 사랑하는 만큼 사랑할수 있도록 설득하는 것이고 우리는 미생물을 사랑하게 될 것입니다.   
            </p>
          </div>
        </div>

        {/* Section E */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>E.</strong> For most of human history we had no idea that microbes existed. The first man to see these extraordinarily potent creatures was a Dutch lens-maker called Antony van
              Leeuwenhoek in the 1670s. Using microscopes of his own design that could magnify up to 270 times, he examined a drop of water from a neary lake and found it teeming with tiny creatures he called 
              'anumalcules'. It wasn't until nearly two hundred years later that the research of French biologist Louis Pasteur indicated that some microbes caused disease. 
              It was Pasteur's 'germ theory' that gave bacteria the poor image that endures today.    
            
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>E.</strong> 대부분의 인간의 역사 속에서 우리는 미생물에 존재해 대해 모르고 있었습니다. 최초로 미생물을 발견한 사람은 1670년 네덜란드의 렌즈 개발자 'Antony van Leeuwenhoek'입니다. 
              270배까지 확대할 수 있는 현미경으로 근처 호숫가에서 실험 도중 동물성 생명체를 발견했습니다. 
              그 이후 200년이 지난 후에야 프랑스의 물리학자 'Louis Pasteur'에 의해 일부 미생물들이 질병을 일으킨다는 사실을 발표하였습니다. 
              그리고 이 사실은 그의 게놈이론, 오늘날 우리가 흔히 알고 있는 박테리아에 관한 기본이론이 되었습니다.    
            </p>
          </div>
        </div>

           {/* Section F */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>F.</strong> Yong's book is in many ways a plea for microbial tolerance, pointing out that while fewer than one hundred species of bacteria bring disease, 
              many thousands more play a vital role in maintaining our health. The book also acknowledges that our attitude towards bacteria is not a simple one. 
              We tend to see the dangers posed by bacteria, yet at the same time we are sold yoghurts and drinks that supposedly nurture 'friendly' bacteria. 
              In reality, says Yong, bacteria should not be viewed as either friends or foes, villains or heroes. Instead we should realise we have a symbiotic relationship, 
              that can be mutually beneficial or mutually destructive.     
            
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>F.</strong> 에드 영의 자서는 여러가지 면에서 미생물에 대한 오해와 진실이 실려있습니다. 100종 이하의 미생물들은 질병을 유발할 수 있으나, 그 외에 수많은 다른동의 미생물들은 인류의 건강에 좋은 
              영향을 끼칠 수 있다는 사실과 사람들의 박테리아에 대한 편견입니다. 사람들은 보통 박테리아에 대해 위험하다는 인식을 가지고있지만, 흔히 우리가 먹는 요거트에도 친 박테리아가 포함되어 있습니다. 
              에드 영은 박테리아는 우리에게 이로운 존재도 해로운 존재도 아닌, 공생관계 라는 것을 생각할 필요가 있다고 언급 하였습니다. 
            </p>
          </div>
        </div>

          {/* Section G */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>G.</strong> What then do these millions of organisms do? The answer is pretty much everything. New research is now unravelling the ways in which bacteria aid digestion, 
              regulate our immune systems, eliminate toxins, produce vitamins, affect our behaviour and even combat obesity. 
              'They actually help us become who we are,' says Yong. But we are facing a growing problem. 
              Our obsession with hygiene, our overuse of antibiotics and our unhealthy. Low-fibre diets are disrupting the bacterial balance and may be responsible for soaring rates of allergies and 
              immune problems, such as inflammatory bowel disease(IBD).    
            
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>G.</strong> 그렇다면 과연 이 수많은 유기체는 인류를 위해 무엇을 해 줄 수 있을까요? 정답은 없을 것입니다. 
              박테리아는 우리의 소화 기능과 면역력을 촉진할 수 있고 또한 우리 몸의 독소 제거, 비타민 제공 그리고 비만 퇴치에도 도움을 줄 수 있다는 새로운 연구 결과가 있습니다. 
              에드 영 또한 이 연구 결과에 대해 언급하였습니다. 하지만, 청결에 대한 강박관념으로 인한 세제 사용과 건강애 해로울 수 있는 과도한 다이어트는 
              박테리아의 이러한 장점들을 방해할 수 있는 요소이며, 또한 장염 같은 질병을 유발할 수 있습니다.  
            </p>
          </div>
        </div>

         {/* Section H */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>H.</strong> The most recent research actually turns accepted norms upside down. For example, there are studies indicating that the excessive use of household detergents and 
              antibacterial products actually destroys the microbes that normally keep the more dangerous germs at bay.
              Other study show that keeping a dog as a pet gives children early exposure to a diverse range of bacteris, which may help protect them against allergies later.    
            
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>H.</strong> 최근 이 연구는 이전 연구 결과를 뒤집는 결과를 보여주었습니다. 대표적인 예시로, 가정용 세제 또는 살균제의 과도한 사용은 우리에게 유해한 세균을 없애주는 역할을 하는 미생물까지도 
              파괴 할 수 있다는 점입니다. 다른 연구 결과로, 개와 같은 반려동물을 키우는 것은 어린이들에게 다양한 범위의 박테리아들로부터 노출할 수 있는 환경이 되고, 이것은 이후 어린이들의 면역력 향상에 좋은 영향을 끼칠 것입니다.   
            </p>
          </div>
        </div>

          {/* Section I */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>I.</strong> The readers of Yong's book must be prepared for a decidedly unglamorous world. Among the less appealing case studies is one about a fungus 
              that is wiping out entire populations of frogs and that can be halted by a rare microbial bacterium. 
              Another is about squid that carry luminescent bacteria that protect them against predators. 
              However, if you can overcome your distaste for some of the investigations, the reasons for Yong's enthusiasm become clear. 
              The microbial world is a place of wonder. Already, in an attempt to stop mosquitoes spreading dengue fever - a disease that infects 400 million people a year - mosquitoes 
              are being loaded with a bacterium to block the disese. In the future, our ability to manipulate microbes means we could construct buildings with useful microbes built into 
              their walls to fight off infections. Just imagine a neonatal hospital ward coated in a specially mixed cocktail of microbes so that babies get the best start in life. 
            
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>I.</strong> 에드 영의 연구에 관심이 있는 사람이라면 이러한 문제점에 대해 생객해봐야 할 것 입니다. 대표적인 케이스 중 하나는 개구리를 박멸할 수 있는 균종에 대한 연구인데, 
              이것은 희귀종 미생물 박테리아에 의해 멈출 수 있습니다. 다른 사례의 연구 대상은 포식자로부터 보호받을 수 있는 발광성의 박테리아를 수반할 수 있는 오징어 입니다.  
              우리는 이러한 에드 영의 연구 결과에 대해 진지하게 생각해 볼 필요가 있습니다. 
              미생물의 세계는 미지의 세계라 볼 수 있습니다. 실제로, 고열을 유발하는 무기의 경우 - 400만명 이상 감염시킨 - 박테리아에 의해 보호받을 수 있습니다. 미래에 우리가 미생물을 다룬다는것은 
              인류의 발전에 큰 도움이 될 것입니다. 병원의 신생아 실에 아기들 보호용으로 사용되는 박테리아 혼합 칵테일이 하나의 좋은 예시라 볼 수 있겠습니다.  
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainMulti;

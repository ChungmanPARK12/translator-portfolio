import './CSS.css';

const AttitudeAI = () => {
  return (
    <div className="translation-page">
      <div className="translation-table">

        {/* Section A */}
        <div className="translation-row">
          <div className="translation-col">
            <h4>English</h4>
            <h3>Attitudes Towards Artificial Intelligence</h3>
            <p>
              <strong>A.</strong> Artificial intelligence (AI) can already predict the future. 
              Police forces are using it to map when and where crime is likely to occur. 
              Doctors can use it to predict when a patient is most likely to have a heart attack or stroke. 
              Researchers are even trying to give AI imagination so it can plan for unexpected consequences.   
            </p>
            <p>
              Many decisions in our lives require a good forecast, and AI is alomost always better at forecasting then we are.
              Yet for all these technological advances, we still seem to deeply lack confidence in AI predictions.
              Recent cases show that people don't like relying on AI and prefer to trust human experts, even if these expoerts are wrong.
            </p>
            <p>
              If we want AI to really benefit people, we need to find a way to get people to trust it.
              To do that, we need to understand why people are so reluctant to trust AI in the first place.
            </p>

          </div>
          <div className="translation-col2">
            <h4>Korean</h4>
            <h3>인공지능에 대처하는 우리의 자세</h3>
            <p>
              <strong>A.</strong> 인공지능(AI)은 미래를 예측할 수 있습니다. 경찰은 언제, 어디서 범죄가 발생할지를 
              예측하는 데 이를 사용하고, 의사는 환자의 심장마비나 뇌졸중 가능성을 예측할 수 있습니다. 
              연구자들은 AI에 상상력을 부여하려는 시도도 하고 있습니다.
            </p>
             <p>
              우리의 삶에서 많은 결정은 정확한 기상 예보를 필요로 합니다. 오늘날 인공지능(AI)은 인간보다 
              더 높은 정확도로 기상 예측을 수행할 수 있는 기술적 역량을 갖추고 있습니다. 
              이러한 AI 기술의 발전에도 불구하고, 우리는 여전히 그 예측 결과를 100% 신뢰하지는 못합니다. 
              최근 연구에 따르면, 사람들은 인공지능의 분석 결과보다 인간의 경험과 신뢰에 더 의존하는 경향이 
              있으며, 그 판단이 틀릴 가능성이 있더라도 이러한 경향은 지속됩니다. 
            </p>
            <p>
              인공지능을 더욱 발전시키기
              위해서는 사람들이 인공지능을 신뢰할 수 있도록 만드는 것이 중요합니다. 이를 위해서는 먼저, 
              사람들이 인공지능을 받아들이기를 꺼려하는 이유에 대한 이해가 선행되어야 합니다.
            </p>
          </div>
        </div>

        {/* Section B */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>B.</strong> Take the case of Watson for Oncology, one of technology giant IBM's supercomputer programs.
              Their attempt to promote this program to cancer doctors was a PR disaster.
              The AI promised to deliver top-quality recommendations on the treatment of 12 cancers that accounted for 80%
              of the world cases. But when doctors first interacted with Watson, they found themselves in a rather difficult situation.
              On the one hand, if Watson provided guidance about a treatment that coincided with their own opinions, 
              physicians did not see much point in Watson's recommendations. 
              The supercomputer was simply telling them what they already knew,
              and these recommendations did not change the actual treament.
            </p>
            <p>
              On the other hand, if Watson generated a recommendation that contradicted the experts' opinion,
              doctors would typically conclude that Watson wasn't competent.
              And the machine woudn't be ablt to explain why its treament was plausible because its machine-learning
              algorithms were simply too complex to be fully understood by humans.
              Consequently, this has caused even more suspicion and disbelief, leading many doctors to ignore the
              seeminly outlandish AI recommendations and stick to their own expertise.
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>B.</strong> 종양학 전문 대기업 IBM의 슈퍼컴퓨터 "왓슨(Watson)" 암 연구에 활용된 사례는 인공지능에
              대한 신뢰 형성의 어려움을 잘 보여줍니다. 당시 왓슨은 전 세계 암 치료의 약 80%를 차지하는 12가지
              유형의 암에 대해 높은 수준의 지식을 보유하고 있었던 것으로 알려졌습니다. 
            </p>
            <p>
              그러나 실제로 의사들이
              이를 처음 사용했을 떄, 오히려 어려움을 겪었다고 합니다. 이는 인공지능이 제공한 정보와 의료진이
              이미 알고 있는 지식 수준이 크게 다르지 않았기 때문입니다. 
            </p>
            <p>
              반면에, 인공지능이 의사들의 판단과 다른
              치료법을 제시했을 경우, 의료진은 이를 받아들이지 않았습니다. 왜냐하면, 머신러닝 알고리즘은 구조적으로
              복합하여, 인공지능이 특정 치료법을 권장하는 이유를 명확하고 설득력 있게 설명하지 못했기 때문입니다.
              결과적으로 인공지능은 사용자에게 신뢰와 확신을 주지 못하였고, 의사들은 자신들의 경험과 지식에 더 
              의존 하게 되었습니다.
            </p>

          </div>
        </div>

        {/* Section C */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>C.</strong> This is just one example of people's lack of confidence in AI and their reluctance
              to accept what AI has to offer.
              Trust in other people is often based on our understanding of how others think and having experience
              of their reliability. 
              This helps create a psychological feeling of safety.
              AI, on the other hand, is still fairly new and unfamiliar to most people.
              Even if it can be technically explained(and that's not always the case), AI's decision-making process is
              usually too difficult for most people to comprehend. And interacting with something we don't understand
              can cause anxiety and give us a sense that we're losing control.
            </p>
            <p>
              Many people are also simply not familiar with many instances of AI actually working,
              because it often happens in the background. Instead, they are acutely aware
              of instances where AI goes wrong. Embarrassing AI failures receive a disproportionate
              amount of media attention, emphasising the message that we cannot rely on technology.
              Machine learning is not foolproof, in part because the humans who design it aren't.
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>C.</strong> 이 사례는 사람들이 인공지능을 받아들이기를 꺼리는 대표적인 예 중에 하나입니다. 인간의 신뢰는
              개인의 경험과 사고를 바탕으로 형성되며, 이해와 감정의 공감을 통해 강화됩니다. 반면, 인공지능은
              아직까지 많은 사람들에게 낯설고 비인격적인 존재로 인식되고 있습니다. 인공지능이 아무리 논리적으로
              사고하더라도, 감정이 없는 객체라는 점에서 인간과의 상호 이해에 한계가 있으며, 이는 사람들이
              인공지능을 온전히 신뢰하기 어렵게 만드는 요인 중 하나입니다. 
            </p>
            <p>
              또한 인공지능은 정해진 알고리즘에 따라 사고하고 작동하기 때문에, 인간의 유연하고 직관적인
              사고방식과는 다르며, 이러한 차이는 사람들에게 낮설게 느껴지는 요인입니다.
              사람들은 인공지능이 오류를 범할 수 있다는 사실을 잘 알고 있으며, 실제로 그러한 실패 사례를
              경험하거나 목격한 바 있습니다. 더불어, 언론은 인공지능의 실패 사례를 집중적으로 보도하며,
              인간이 기술에 지나치게 의존해서는 안 된다는 메시지를 강하게 전달하는 경향이 있습니다. 
              이러한 요소들은 인공지능에 대한 대중의 신뢰 형성을 더욱 어렵게 만들고 있습니다. 
            </p>
          </div>
        </div>

        {/* Section D */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>D.</strong> Feelings about AI run deep. In a recent experiment, people from a 
              range of backgrounds were given various sci-fi films about AI to watch and then asked
              questions about automation in everyday life. It was found that, regardless of whether
              the film they watched depicted AI in a positive or negative light, simply watching a 
              cinematic vision of our technological future polarised the participants' attitudes.
              Optimistics became more extreme in their enthusiasm for AI and sceptics became even
              more guarded.
            </p>
            <p>
              This suggests people use relevant evidence about AI in a biased manner to support
              their existing attitudes, a deep-rooted human tendency known as "confirmation bias".
              As AI is represented more and more in media and entertainment, it could lead to a
              society split between those who benefit from AI and those who reject it.
              More pertinently, refusing to accept the advantages offered by AI could place a large
              group of people at a serious disadvange. 
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>D.</strong> 하지만, 인공지능에 대한 인식은 점점 긍정적으로 변화하고 있습니다. 최근 한 실험에서는 다양한
              사람들에게 인공지능와 관련된 공상과학 영화를 시펑하게 한 뒤, 이에 대한 인식을 조사하였습니다. 
              흥미로운 점은, 인공지능이 영화 속에서 긍정적으로 또는 부정적으로 묘사되었는지와는 관계없이, 
              미래 기술의 시각적 표현만으로도 참가자들은 또렷한 반응을 보였습니다. 낙관론자들은 인공지능에
              대해 더욱 열광하였고, 회의론자들은 더욱 경계심을 갖게 되었습니다. 
            </p>
            <p>
              결과적으로, 인간의 내면에는 편견이 깊이 자리 잡고 있다는 것을 의미합니다. 인공지능이 점점
              더 대중화될수록, 사람들은 인공지능을 받아들이는 쪽과 받아들이지 않는 쪽으로 나뉘게 될 것입니다. 
              보다 정확하게 말하면, 사람들이 인공지능의 장점을 받아들이지 않는다면, 그것을 오히려 단점으로 
              작용하게 될 것입니다. 
            </p>
          </div>
        </div>

        {/* Section E */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>E.</strong> Fortunately, we already have some ideas about how to improve
              trust in AI. Simply having previous experience with AI can significantly improve
              people's opinions about the technology, as was found in the study mentioned above.
              Evidence also suggests the more you use other technologies such as the internet, 
              the more you trust them.
            </p>
            <p>
              Another solution may be to reveal more about the algorithms which AI uses and the 
              purposes they serve. Serveral high-profile social media companies and online marketplaces
              alrealdy release transprency reports about government requests and surveillance disclosures.
              A similar practice for AI could help people have a better understanding of the way
              algorithmic decisions are made.
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>E.</strong> 다행히 인공지능의 신뢰성을 입증할 수 있는 방밥은 존재합니다. 
              앞에서 언급된 "공상과학 영화에대한 사람들의 의견" 연구처럼, 인공지능의 장점을 직접 경험할 수 있다면, 그 신뢰성을 입증 할 수 
              있을 것 입니다. 인터넷의 사용이 바로 그 대표적인 예입니다.
            </p>
            <p>
              인공지능의 사고 및 동작 방식인 알고리즘에 대해서도 해결책이 존재할 수 있습니다. 
              최근 주목받고 있는 소셜미디어나 온라인 쇼핑몰은 이미 정부의 요청 및 감시에 대한 내용을
              포함한 추명성 보고서를 발표하고 있으며, 이는 사용자가 인공지능을 직접 사용해 볼 경우 
              알고리즘에 대한 이해도가 높아질 수 있다는 점을 보여주는 사례입니다. 
            </p>
          </div>
        </div>

        {/* Section F */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>F.</strong> Research suggests that allowing people some control over 
              AI decision-making could also improve trust and enable AI to learn from human
              experience. For example, one study showed that when people were allowed the freedom
              to slightly modify an algorithm, they felt more satisfied with its decisions, more
              likely to believe it was superior and more likely to use it in the future.
            </p>
             <p>
              We don't need to understand the intricate inner workings of AI systems, but if people
              are given a degree of responsibility for how they are implemented, they will be more
              willing to accept AI into their lives.
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>F.</strong> 사람들이 인공지능의 판단에 대해 통제할 수 있다면 인공지능에 대한
              신뢰를 입증할 수 있고, 인공지능이 인간의 경험을 학습할 수 있다는 연구 결과가 있습니다.
              한 실험의 예로, 사람들이 인공지능의 알고리즘을 자유롭게 수정할 수 있는 환경이 주어졌을 때, 
              인공지능에 대한 놀라움과 만족도를 느끼며, 일단 사용하기 시작하면 지속적으로 사용하게 된다고 
              합니다.  
            </p>
            <p>
              우리는 인공지능의 자세한 이론까지 이해할 필요는 없습니다 하지만, 
              인공지능 사용에 대한 책임감을 가진다면 사람들은 좀 더 인공지능에 대한 긍정적인 삶은 살수 있을 것 입니다.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AttitudeAI;

import './CSS.css';

const Earthspace = () => {
  return (
    <div className="translation-page">
      <div className="translation-table">

        {/* Section A */}
        <div className="translation-row">
          <div className="translation-col">
            <h4>English</h4>
            <h3>Conquering Earth's space junk problem</h3>
            <h4>Satellites, rocket shards and collision debris are creating major traffic risks in orbit around 
              the planet. Researchers are working to reduce these threats.
            </h4>
            <p>
              <strong>A.</strong> Last year, commercial companies, military and civil departments and amateurs sent
              more than 400 satellites into orbit, over four times the yearly average in the previous decade. 
              Numbers could rise even more sharply if leading space companies follow through on plans to deply 
              hundreds to thousands of large constellations of satellites to space in the next few years.  
            </p>
            <p>
              All that traffic can lead to disaster. Ten years ago, a US commercial Iridium satellite smashed into 
              an inactive Russian communications satellite called Cosmos-2251, creating thousands of new pieces of 
              space sharpnel that now threaten other satellites in low Earth orbit - the zone stretching up to 
              2,000 kilometres in altitude.  Altogether, there are roughly 20,000 human-made objects in orbit, 
              from working satellites to small rocket pieces. And satellite operators can't steer away from every 
              potential crash, because each move consumes time and fuel that could otherwise be used for the 
              spacecraft's main job.
            </p>
          </div>
          <div className="translation-col2">
            <h4>Korean</h4>
            <h3>우주오염 문제에대한 해결방안</h3>
            <h4>위성, 로켓조각, 잔해의 충돌은 궤도를 자전하는 생성에 위험부담을 야기합니다. 이 논문은 이러한 문제의 해결방안에 대해 이야기 하고자 합니다. </h4>
            <p>
              <strong>A.</strong> 지난해, 군사 민간정부에서 발사한 400개 이상의 위성이 궤도로 진입하였습니다. 
              이로써 지난 10년간 1년 평균 4번 이상의 궤도진입 성공이라 할 수 있겠습니다. 몇년안으로, 우주정부에서 100대 에서 
              1000대의 위성발사 프로젝트를 실행한다면, 더 많은 위성의 궤도진입이 가능해 질 것 입니다. 
            </p>
             <p>
              10년전, 미국의 "상업용 이리듐 위성(Iridium satellite)"이 러시아의 "Cosmos-2251"이라 불리는 통신전용 위성과 
              충돌한 사건이 있었는데, 이 충돌로 인하여 발생한 수천개의 파편들이 2,000km 이상 퍼져 나갔습니다. 
              작은 단위의 로켓으로 만들어진 위성의 갯수까지 합치면, 궤도상의 파편 갯수는 대략 20,000개 정도가 될 것으로 추정됩니다. 
              그리고, 각 위성은 많은 연료를 소비하고 시간도 오래걸리기 때문에 이 파편조각들과의 충돌은 불가피할 것 입니다. 
            </p>
        
          </div>
        </div>

        {/* Section B */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>B.</strong> Concern about space junk goes back to the beginning of the satellite era, 
              but the number of objects in orbit is rising so rapidly that researchers are investigating 
              new ways of attacking the problem. Serveral teams are trying to improve methods for assessing 
              what is in orbit, so that satellite operators can work more efficiently in ever-more-crowded space. 
              Some researchers are now starting to compile a massive data set that includes the best possible 
              imformation on where everything is in orbit. Others are developing taxonomies of space debris - working
              on measuring properties such as the shape and size an object, so that satellite operators know 
              how much to worry about what's coming their way. 
            </p>
            <p>
              The alternative, many say, is unthinkable. Just a few uncontrolled space crashes could generate 
              enough debris to set off a runaway cascade of fragments, rendering near-Earth space unusuable. 
              'If we go on like this, we will reach a point of no return.' says Carolin Frueh, an astrodynamical 
              researcher at Purdue University in West Lafayette, Indiana. 
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>B.</strong> 이러한 우주 파편조각에 대한 우려는 인공위성기술 초기때부터 시작되었고, 그 수가 급격히 
              늘고 있기 때문에, 전문가들은 이 문제에 대한 새로운 방안을 조사중입니다. 몇 몇 연구팀은 위성 관리자들이 좀 더 
              효과적으로 이러한 문제들을 해결할 수 있는 방안을 개선중이고, 몇 몇 연구원들은 많은 양의 데이터를 컴파일하여 
              궤도안에 있는 모든 정보들을 불러올수 있게하는 셋업작업을 진행중입니다. 또 다른 연구팀은 궤도상에서 잔해의 양과 
              모양을 측정하고 분류하는 작업으로, 관리자들이 유언하게 일할 수 있는 방법에 대해서 연구중입니다. 
            </p>
            <p>
              반면에 우려의 목소리도 있습니다. 통제불가능한 우주의 충돌 몇 번만으로도 폭발적인 파편 조각들을 터뜨릴 수 있을 
              만큼의 파편들이 생성되어 지구 근처까지 피해를 줄 수 있습니다. "Purdue University in West Lafayette, Indiana" 
              의 천문학자 "Carolin Fureh"교수는 "이러한 문제가 발생된다면 되돌릴 수 없을 것" 이라고 말하였습니다. 
            </p>
          </div>
        </div>

        {/* Section C */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>C.</strong> Even as our ability to monitor space objects increases, so too does the total 
              number of items in orbit. That means companies, governments and other players in space are collaborating 
              in new ways to avoid a shared threat. International groups such as the Inter-Agency Space Debris Coordination 
              Committee have developed guidelines on space sustainability. Those include inactivating satellites at the 
              end of their useful life by venting pressurised materials or leftover fuel that might lead to explosions. 
              
            </p>
            <p>
              The intergovernmental groups also advise lowering satellites deep enough into the atmosphere that 
              they will burn up or disintegrate within 25 years. But so far, only about half of all missions 
              have abided by this 20-year goal, says Holger Krag, head of the European Space Agency's space-debris 
              office in Darmstadt, Germany. Operators of the planned large constellations of satellites say they 
              will be responsible stewards in their enterprises in space, but Krag worries that problems could increase, 
              despite their best intentions. 'What happens to those that fail or go bankrupt?' he asks. 'They are probably
              not going to spend money to remove their satellites from space.'  
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>C.</strong> 우주 무니터링 기술이 발전함에 따라, 우리가 관찰 해야하는 궤도상의 물체도 증가하기 때문에, 
              기럽, 정부 또는 우주연구팀은 서로 협력하여 지구와 우주환경에 피해를 줄 수 있는 문제들에 대한 해결방법을 연구해야 
              할 것입니다. 국제기관 "Inter-Agency Space Debris Coordination Committee(우주 잔해물 관리 위원해)"는 
              우주의 지속가능성에 관한 지침을 개발하였는데, 여기에는 폭발이 포함되어 있었습니다. 
            </p>
            <p>
              또한, 어느 정부소속 단체에서는 
              25년 이내로 위성들이 타버리거나 분해될 수 있는 정도의 대기 깊은곳에 있는 위성의 고도를 낮추는 방안을 제시하였고, 
              현재까지 절반정도의 절차가 진행된 상태라고, "European Space Agency's space-debris(유럽 우주 잔해물 관리국)"의 
              대표 "Holger Krag"는 말하였습니다. 별자리 관측위성의 관리자들은 '앞으로 이러한 사업을 적극 추진할 것' 이라 말하지만,
              "krag"대표는 비용이 너무 많이들어가는 문제가 생길것 이라고 말하였습니다. 
            </p>
          </div>
        </div>

        {/* Section D */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>D.</strong> In theory, given the vastness of space, satellite operators should have plenty of 
              room for all these missions to fly safely without ever nearing another object. So some scientists are 
              tackling the problem of space junk by trying to find out where all the debris is to a high degree of precision. 
              That would alleviate the need for many of the unnecessary manoeuvres that are carried out to avoid potential collisions. 
              'If you knew precisely where everything was, you would almost never have a problem.' says Marion Sorge, 
              a space-debris specialist at the Aerospace Corporation in EI Segundo, Califonia. 
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>D.</strong> 이론적으로, 궤도상에서 위성끼리의 충돌을 줄이고 위성을 발사할 수 있는 방대한 공간이 
              필요하기 때문에 많은 과학자들이 우주의 파편조각들에 대한 문제해결을 위해 박차를 가하고 있습니다. 
              또한, 위성의 필요없는 움직임을 완화함으로써 위성간의 충돌을 줄이는 부분도 필요할 것 입니다. 
              "미국 캘리포니아주 EI Segundo, 우주항공사 전문가 Marlon Sorge"는 각 움직이는 위성의 위치를 서로 알수있다면
              이러한 문제를 해결할 수 있을것 이라고 말하였습니다. 
            </p>
          </div>
        </div>

        {/* Section E */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>E.</strong> The field is called space traffic management, because it's similar to managing traffic 
              on the roads or in the air. Think about a busy day at an airport, says Moria Jah, an astrodynamicist at the 
              University of Texas at Austin: planes line up in the sky, landing and taking off close to one another in a 
              carefully choreographed routine. Air-traffic controllers know the location of the planes down to one metre 
              in accuracy. The same can't be said for space debris. Not all objects in orbit are known, and even those 
              included in databases are not tracked consistently. 
            </p>
          </div>
          <div className="translation-col2">
            <p>
              <strong>E.</strong> 도로교통, 항공교통 분야 관리와도 비슷한 부분이 있기때문에 우주교통 관리 분야 하고 불리기도 합니다. 
              "어스틴 텍사스대학 천체 역학자 Moriba jah"교수는 항공기들이 대열을 유지하며 비행을 하는 퍼포먼스를 예시로 설명하였는데, 
              여기서 사용되는 항공교통 제어기를 통해 항공기들의 1미터 간격의 위치까지 정확하게 파악할 수 있다고 합니다. 하지만, 우주의 
              잔해물같은 문제는 우리의 기술로 통제하기에는 아직 한계점이 있다고 합니다. 
            </p>
          </div>
        </div>

        {/* Section F */}
        <div className="translation-row">
          <div className="translation-col">
            <p>
              <strong>F.</strong> An additional problem is that there is no authoritative catalogue that accurately lists 
              the orbits of all known space debris. Jah illustrates hit with a web-based database that he has developed. 
              It draws on several sources, such as catalogues maintained by the US and Russian governments, to visualise 
              where objects are in space. When he types in an identifier for a particular space object, the database of objects, 
              such as Russian rocket body designated in the database as object number 32280. When Jah enters that number, 
              the database draws two purple lines: the US and Russian sources contain two completely different orbits for the 
              same object. Jah says that it is almost impossible to tell which is correct, unless a third source of information 
              made it possible to cross-correlate. 
            </p>
             <p>
              Jah describes himself as a space environmentalist: "I want to make space a place that is safe to operate, that is free 
              and useful for generations to come." Until that happens, he argues, the space community will continue devolving into a 
              tragedy in which all spaceflight operators are polluting a common resource. 
            </p>

          </div>
          <div className="translation-col2">
            <p>
              <strong>F.</strong> 또다른 한계점으로는, 궤도상에 존재하는 잔해물에 대한 정확한 메뉴얼이 아직 없다는 것. Jah 교수는 자신이 개발한 
              데이터베이스를 보여주었고, 미국과 러시라가 관리하는 우주상의 물체를 비주얼상으로 보여주는 카달로그를 구현 할 수 있다고 합니다. 
              물체의 형상을 입력하면 궤도상에서 감지되는 형상을 따라서 보라색 라인으로 그려낸다고 합니다. 러시아의 "로켓 32280"이 그중 하나의 예시 입니다. 
              데이터베이스에 로켓 넘버를 입력하면 두 개의 보라색 라인을 그려내고 미국과 러시아의 데이터에는 동일한 궤도상의 객체에 대한 전혀 다른 
              두개의 소스가 입력되는데, 두개의 소스 중 어떤 소스가 정확한 데이터인지 세번째 소스를 생성하여 데이터를 비교해보지 않는 이상
              판단하기 힘들것이라고 합니다.  
            
            </p>
            <p>-</p>
            <p>-</p>
            <p>
              Jah 교수는 우주의 환경 결정론자 적으로 설명하였는데, "좀 더 안전하고 자유로운 우주공간을 만들고 싶다"라고 말하였고, "하지만 우주도 계속해서 
              오염되고 악화될 것"이라고 덧 붙였습니다. 
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Earthspace;

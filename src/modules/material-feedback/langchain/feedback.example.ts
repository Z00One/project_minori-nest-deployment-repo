export const FeedbackExamples = {
  MATERIAL: 'material',
  PART_RELEVANT_TO_THE_QUESTIONS:
    'Areas with many questions in the material',
};

export const pageFeedbackExamples = [
  {
    input: `${FeedbackExamples.MATERIAL}: "10 페이지의 내용 - 구글, 앤스로픽에 20억 달러 투자
  n 구글이 앤스로픽에 최대 20억 달러 투자에 합의하고 5억 달러를 우선 투자
  n 3대 클라우드 사업자인 구글, 마이크로소프트, 아마존은 앤스로픽 및 오픈AI와 협력 확대
  KEY Contents
  £ 구글, 앤스로픽에 최대 20억 달러 투자 합의 및 클라우드 서비스 제공
  ∙ 구글은 2023년 2월 앤스로픽에 이미 5억 5,000만 달러를 투자
  ∙ 앤스로픽은 구글의 클라우드 서비스 사용을 위해 4년간 30억 달러 규모의 계약 체결
  ∙ 앤스로픽은 챗GPT의 대항마 ‘클로드(Claude)’ LLM을 개발
  ∙ 구글은 차세대 AI 모델 ‘제미니(Gemini)’를 포함한 자체 AI 시스템 개발에 수십억 달러 투자
  ☞ 출처 : The Wall Street Journal, Google Commits $2 Billion in Funding to AI Startup Anthropic, 2023.10.27.
  Bloomberg, AI Startup Anthropic to Use Google Chips in Expanded Partnership, 2023.11.09."
  
  ${FeedbackExamples.PART_RELEVANT_TO_THE_QUESTIONS}: "
∙ 구글은 챗GPT의 기반 기술과 직접 경쟁할 수 있는 차세대 LLM ‘제미니(Gemini)’를 포함한 자체 AI
∙ 구글은 2023년 2월 앤스로픽에 이미 5억 5,000만 달러를 투자 ∙
n구글이 앤스로픽에 최대 20억 달러 투자에 합의하고 5억 달러를 우선 투자 ∙
∙ 구글은 앤스로픽 외에도 AI 동영상 제작 도구를 개발하는 런웨이(Runway)와 오픈소스 소프트웨어 기업 허깅 페이스(Hugging Face)에도 투자"`,
    output: `"자료의 10페이지의 내용에 대해서 개선사항이 있습니다. 구글의 차세대 LLM, 제미니(Gemini) 개발 관련 정보 보강
    현재 제공된 정보는 구글이 챗GPT와 경쟁할 수 있는 차세대 LLM인 제미니(Gemini)를 개발 중이라는 사실만 언급하고 있습니다. 이 부분에 대해 추가적인 설명을 포함시켜 독자들이 제미니의 주요 특징, 예상되는 사용 사례, 개발 배경 및 목표 등을 이해할 수 있도록 하는 것이 좋습니다. 예를 들어, 제미니의 기술적 혁신, 차별화된 기능, 출시 일정 등에 대한 정보를 포함시킬 수 있습니다.",
    "구글의 앤스로픽 및 다른 기업들에 대한 투자 정보 상세화
    구글이 앤스로픽에 투자한 배경, 목적 및 구체적인 기대효과에 대해 자세히 설명하는 것이 도움이 될 것입니다. 또한, 아마존의 투자 계획과 비교하여 구글의 전략적 접근 방식이 어떻게 다른지 분석하는 내용을 추가하는 것도 유익할 것입니다.
    런웨이(Runway)와 허깅 페이스(Hugging Face)에 대한 투자 역시 마찬가지로, 이들 기업이 개발하는 기술의 특징과 구글의 투자로 인해 기대되는 시너지 효과에 대해 상세하게 설명하는 것이 좋습니다.",
    "정보 구조 및 표현의 명확성 강화
    각 투자 사례별로 별도의 소제목을 사용하여 구분하고, 각 소제목 아래에서는 투자의 세부 사항, 목적, 기대 효과 등을 명확하고 간결하게 서술하는 것이 좋습니다. 이를 통해 독자가 각 투자 사례의 핵심 내용을 빠르게 파악할 수 있도록 합니다.
    시각적 요소를 활용하는 것도 고려할 수 있습니다. 예를 들어, 투자 금액, 투자 대상 기업, 투자 목적 등을 요약한 표나 인포그래픽을 추가하여 정보의 이해와 가독성을 높일 수 있습니다."`,
  },
];
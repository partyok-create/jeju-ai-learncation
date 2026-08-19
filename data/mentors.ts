export type Mentor = {
  number: string;
  name: string;
  nameRoman: string;
  focus: string;
  roles: string[];
  bio: string;
  mentoring: string[];
  current: string[];
  image?: string;
  imageAlt: string;
  imagePosition?: string;
  tone: "sea" | "deep" | "sand" | "moss";
};

export const mentors: Mentor[] = [
  {
    number: "01",
    name: "박영미",
    nameRoman: "PARK YOUNGMI",
    focus: "AI Marketing · Personal Branding · Learncation",
    roles: ["IDINO JEJU Learncation PD", "AI 마케팅 · 콘텐츠 · 개인브랜딩 코치"],
    bio: "30여 년의 마케팅 경험을 바탕으로 생성형 AI를 개인 브랜드, 콘텐츠, 교육과 실제 비즈니스에 연결하고 있습니다. 제주에서 AI 교육과 프로젝트 기반 런케이션을 기획·운영하며, AI를 활용해 자신의 경험과 전문성을 브랜드와 새로운 일로 전환하는 과정을 돕습니다.",
    mentoring: ["Personal Branding", "AI Marketing", "Content Creation", "Brand Book"],
    current: [
      "『인생 2막, AI에 올라타라』 저자",
      "IDINO JEJU Learncation 기획·운영",
      "AI 마케팅 콘텐츠 개발 및 AI 코칭",
    ],
    imageAlt: "AI 마케팅 및 개인브랜딩 멘토 박영미",
    tone: "deep",
  },
  {
    number: "02",
    name: "최규문",
    nameRoman: "CHOI GYUMUN",
    focus: "AI Practical Use · Digital Marketing · AI Contents",
    roles: ["AI 실무활용 강사 · 코치"],
    bio: "오랜 디지털 마케팅과 SNS 실무 경험을 기반으로 2023년부터 생성형 AI의 실무 활용 교육에 집중하고 있습니다. ChatGPT를 비롯한 다양한 생성형 AI와 Google AI Studio, 이미지·영상 생성 도구 등을 업무와 콘텐츠 제작에 직접 연결하는 실전형 AI 활용 교육을 진행합니다.",
    mentoring: ["Generative AI", "AI Productivity", "AI Content", "Digital Marketing"],
    current: [
      "AI 실무활용 교육 및 코칭",
      "생성형 AI 실전 활용 콘텐츠 연구",
      "Google AI Studio · AI 영상 · 콘텐츠 제작 실습",
    ],
    imageAlt: "AI 실무활용 멘토 최규문",
    tone: "moss",
  },
  {
    number: "03",
    name: "구스김 · Goos Kim",
    nameRoman: "GOOS KIM",
    focus: "AI Agent · Claude Code · Agentic Coding",
    roles: ["모두의AI · AI Agent Builder"],
    bio: "생성형 AI를 단순한 질문·답변 도구가 아니라 직접 일을 수행하는 AI Agent로 확장하는 작업을 하고 있습니다. Claude Code와 Agentic Coding을 중심으로 비개발자와 개발자 모두가 자신의 업무에 필요한 AI 에이전트와 자동화 시스템을 만드는 방법을 연구하고 교육합니다.",
    mentoring: ["AI Agent", "Claude Code", "Agentic Coding", "AI Automation"],
    current: [
      "모두의AI 에이전트 공장장",
      "MoAI-ADK 개발",
      "Claude Code · AI Agent 교육",
      "『클로드 코드로 시작하는 실전 에이전틱 코딩』 저자",
    ],
    imageAlt: "AI Agent 및 Claude Code 멘토 구스김",
    tone: "sea",
  },
  {
    number: "04",
    name: "정은상",
    nameRoman: "JUNG EUNSANG",
    focus: "AI Career · AI Writing · Life Design",
    roles: ["맥아더스쿨 교장 · AI 시대 커리어 멘토"],
    bio: "AI를 새로운 기술 하나로 보지 않고 일과 삶의 방식을 다시 설계하는 도구로 활용합니다. 생성형 AI와 LLM의 이해부터 AI 글쓰기, 이미지 제작, 업무 활용까지 교육하며 AI 시대에 자신의 경험과 전문성을 새로운 직업과 콘텐츠로 연결하는 방법을 연구하고 있습니다.",
    mentoring: ["AI Writing", "Career Design", "Personal Branding", "Generative AI"],
    current: [
      "생성형 AI · LLM 실전 교육",
      "AI 글쓰기 · 이미지 제작 교육",
      "AI 시대 커리어 · 창직 연구",
      "맥아더스쿨 운영",
    ],
    imageAlt: "AI 커리어 및 글쓰기 멘토 정은상",
    tone: "sand",
  },
];

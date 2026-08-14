export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const projects: Project[] = [
  {
    id: "brand",
    number: "01",
    title: "나만의 브랜드 만들기",
    description: "생각뿐이던 나를 하나의 브랜드로 정리합니다.",
    deliverables: [
      "개인 브랜드 이름",
      "한 줄 소개",
      "브랜드 스토리",
      "자기소개",
      "프로필",
      "콘텐츠 주제",
      "SNS 소개문",
    ],
  },
  {
    id: "website",
    number: "02",
    title: "AI 홈페이지 만들기",
    description: "아이디어를 실제 웹페이지로 만듭니다.",
    deliverables: [
      "브랜드 메시지",
      "서비스 소개",
      "고객 정의",
      "AI 이미지",
      "랜딩페이지",
      "문의 폼",
      "실제 URL",
    ],
  },
  {
    id: "content",
    number: "03",
    title: "AI 콘텐츠 시스템 만들기",
    description: "혼자서도 계속 만들 수 있는 콘텐츠 구조를 세웁니다.",
    deliverables: [
      "콘텐츠 핵심 주제",
      "한 달 콘텐츠 캘린더",
      "블로그 글",
      "인스타그램 콘텐츠",
      "쓰레드",
      "쇼츠 기획",
      "반복 제작 프롬프트",
    ],
  },
  {
    id: "assistant",
    number: "04",
    title: "나만의 AI 업무비서 만들기",
    description: "매일의 일을 대신 처리해줄 나만의 비서를 만듭니다.",
    deliverables: [
      "콘텐츠 비서",
      "마케팅 비서",
      "강의자료 비서",
      "고객응대 비서",
      "리서치 비서",
      "사업기획 비서",
    ],
  },
];

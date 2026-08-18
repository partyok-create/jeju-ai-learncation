export type Project = {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "brandbook",
    number: "01",
    title: "제주에서 나만의 브랜드북 만들기",
    headline: "당신의 경험을 한 권의 책으로 만듭니다.",
    description:
      "경력과 경험을 개인 브랜드로 정리하고, 책의 제목·목차·샘플 원고·표지 콘셉트와 출간 실행계획까지 설계합니다.",
    deliverables: [
      "Brand Story",
      "Author Profile",
      "Book Title",
      "Subtitle",
      "Book Concept",
      "Table of Contents",
      "Sample Chapters",
      "Cover Concept",
      "Publishing Plan",
    ],
    featured: true,
  },
  {
    id: "website",
    number: "02",
    title: "AI 홈페이지 완성하기",
    headline: "아이디어를 실제 웹페이지로 만듭니다.",
    description: "브랜드 메시지부터 실제 URL까지, 5일 안에 살아있는 웹페이지를 완성합니다.",
    deliverables: ["브랜드 메시지", "서비스 소개", "AI 이미지", "랜딩페이지", "실제 URL"],
  },
  {
    id: "content",
    number: "03",
    title: "AI 콘텐츠 시스템 만들기",
    headline: "혼자서도 계속 만들 수 있는 구조를 세웁니다.",
    description: "한 달치 콘텐츠 캘린더와 반복 제작 프롬프트로 지치지 않는 시스템을 만듭니다.",
    deliverables: ["콘텐츠 캘린더", "블로그 글", "인스타그램 콘텐츠", "쇼츠 기획", "반복 제작 프롬프트"],
  },
  {
    id: "assistant",
    number: "04",
    title: "나만의 AI 업무비서 만들기",
    headline: "매일의 일을 대신 처리해줄 비서를 만듭니다.",
    description: "콘텐츠, 마케팅, 고객응대까지 — 나에게 맞는 AI 비서를 직접 설계합니다.",
    deliverables: ["콘텐츠 비서", "마케팅 비서", "고객응대 비서", "리서치 비서", "사업기획 비서"],
  },
];

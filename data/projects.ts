export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  leaveWith: string[];
  moreDeliverables?: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "brandbook",
    number: "01",
    title: "제주에서 나만의 브랜드북 만들기",
    description:
      "당신이 살아온 경험과 전문성을 하나의 개인 브랜드로 정리하고, 그 이야기를 한 권의 브랜드북으로 완성합니다. SNS 프로필이 아니라, 실제로 출간 가능한 브랜딩 도서의 기획과 초안을 완성하는 것이 목표입니다.",
    leaveWith: ["브랜드 스토리", "저자 프로필", "책 제목·부제", "전체 목차", "샘플 원고"],
    moreDeliverables: ["개인 브랜드 정의", "책 기획안", "표지 콘셉트", "출간 실행계획"],
    featured: true,
  },
  {
    id: "website",
    number: "02",
    title: "AI 홈페이지 완성하기",
    description: "브랜드 메시지부터 실제 URL까지, 5일 안에 살아있는 웹페이지를 완성합니다.",
    leaveWith: ["브랜드 메시지", "서비스 소개", "AI 이미지", "랜딩페이지", "실제 URL"],
  },
  {
    id: "content",
    number: "03",
    title: "AI 콘텐츠 시스템 만들기",
    description: "한 달치 콘텐츠 캘린더와 반복 제작 프롬프트로 지치지 않는 시스템을 만듭니다.",
    leaveWith: ["콘텐츠 캘린더", "블로그 글", "인스타그램 콘텐츠", "쇼츠 기획", "반복 제작 프롬프트"],
  },
  {
    id: "assistant",
    number: "04",
    title: "나만의 AI 업무비서 만들기",
    description: "콘텐츠, 마케팅, 고객응대까지 — 나에게 맞는 AI 비서를 직접 설계합니다.",
    leaveWith: ["콘텐츠 비서", "마케팅 비서", "고객응대 비서", "리서치 비서", "사업기획 비서"],
  },
];

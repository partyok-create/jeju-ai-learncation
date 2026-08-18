export type ScheduleDay = {
  day: number;
  title: string;
  emotion: string;
  items: string[];
};

export const schedule: ScheduleDay[] = [
  {
    day: 1,
    title: "ARRIVE",
    emotion: "잠시 멈춥니다.",
    items: ["제주 도착", "Orientation", "프로젝트 선택", "목표 정의"],
  },
  {
    day: 2,
    title: "CREATE",
    emotion: "만들어 봅니다.",
    items: ["생성형 AI", "개인 브랜드", "콘텐츠 기획", "제주 산책"],
  },
  {
    day: 3,
    title: "EXPERIENCE",
    emotion: "제주로 나갑니다.",
    items: ["제주 자연", "로컬 체험", "기록", "콘텐츠 소재 수집"],
  },
  {
    day: 4,
    title: "BUILD",
    emotion: "결과물로 만듭니다.",
    items: ["Vibe Coding", "홈페이지", "AI Assistant", "프로젝트 완성"],
  },
  {
    day: 5,
    title: "SHARE",
    emotion: "세상에 내놓습니다.",
    items: ["결과 발표", "피드백", "30일 실행계획", "Graduation Brunch"],
  },
];

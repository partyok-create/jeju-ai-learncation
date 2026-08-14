export type ScheduleDay = {
  day: number;
  title: string;
  titleKo: string;
  items: string[];
};

export const schedule: ScheduleDay[] = [
  {
    day: 1,
    title: "ARRIVE & DISCOVER",
    titleKo: "도착 & 시작",
    items: ["제주 도착", "Orientation", "프로젝트 선택", "목표 정의"],
  },
  {
    day: 2,
    title: "CREATE",
    titleKo: "만들기",
    items: ["생성형 AI", "개인브랜드", "콘텐츠 기획", "제주 산책"],
  },
  {
    day: 3,
    title: "EXPERIENCE",
    titleKo: "경험하기",
    items: ["제주 자연", "로컬 체험", "기록", "콘텐츠 소재 수집"],
  },
  {
    day: 4,
    title: "BUILD",
    titleKo: "완성하기",
    items: ["Vibe Coding", "홈페이지", "AI Assistant", "프로젝트 완성"],
  },
  {
    day: 5,
    title: "SHARE & RETURN",
    titleKo: "나누기 & 돌아가기",
    items: ["결과 발표", "피드백", "30일 실행계획", "Graduation Brunch"],
  },
];

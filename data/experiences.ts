export type ExperienceCategory = {
  id: string;
  title: string;
  headline: string;
  items: string[];
  tone: "sea" | "deep" | "sand" | "moss";
  image?: string;
};

export const experiences: ExperienceCategory[] = [
  {
    id: "walk",
    title: "WALK",
    headline: "걸으면 생각이 정리됩니다.",
    items: ["올레길", "곶자왈", "오름"],
    tone: "moss",
    image: "/images/experiences/walk-forest.jpg",
  },
  {
    id: "ocean",
    title: "OCEAN",
    headline: "때로는 노트북에서 멀어져야 새로운 생각이 시작됩니다.",
    items: ["카약", "SUP", "스노클링", "서핑", "요트"],
    tone: "sea",
    image: "/images/experiences/ocean-snorkel.jpg",
  },
  {
    id: "local",
    title: "LOCAL",
    headline: "사람을 만나면 이야기가 생깁니다.",
    items: ["해녀문화", "제주 마을", "포구", "시장", "농장", "로컬 음식"],
    tone: "sand",
    image: "/images/experiences/local-market.jpg",
  },
  {
    id: "slow",
    title: "SLOW",
    headline: "잘 만들기 위해서는 잠시 멈추는 시간도 필요합니다.",
    items: ["바다 산책", "카페", "독서", "노을", "대화"],
    tone: "deep",
    image: "/images/experiences/slow-umbrella.jpg",
  },
];

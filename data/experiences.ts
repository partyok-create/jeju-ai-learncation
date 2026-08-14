export type ExperienceCategory = {
  id: string;
  title: string;
  titleKo: string;
  items: string[];
};

export const experiences: ExperienceCategory[] = [
  {
    id: "walk",
    title: "WALK",
    titleKo: "걷다",
    items: ["올레길", "곶자왈", "오름"],
  },
  {
    id: "ocean",
    title: "OCEAN",
    titleKo: "바다",
    items: ["카약", "SUP", "스노클링", "서핑", "요트"],
  },
  {
    id: "local",
    title: "LOCAL",
    titleKo: "마을",
    items: ["해녀문화 체험", "제주 마을", "포구", "시장", "농장", "로컬 음식"],
  },
  {
    id: "slow",
    title: "SLOW",
    titleKo: "쉼",
    items: ["바다 산책", "카페", "독서", "노을", "대화"],
  },
];

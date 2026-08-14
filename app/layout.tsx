import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeju-ai-learncation.vercel.app"),
  title: "제주는 또 하나의 교실이다 | JEJU AI LEARNCATION",
  description:
    "제주에서 4박5일 동안 AI를 배우고, 내 브랜드·홈페이지·콘텐츠·AI 업무비서를 완성하는 체류형 프로젝트 프로그램",
  keywords: [
    "제주 AI 교육",
    "제주 워케이션",
    "AI 여행",
    "AI Learncation",
    "제주 AI 프로그램",
    "인생2막 AI",
    "Vibe Coding",
    "제주 체류형 교육",
  ],
  openGraph: {
    title: "제주는 또 하나의 교실이다 | JEJU AI LEARNCATION",
    description:
      "AI를 배우고, 제주를 걷고, 내 일을 만들어가는 4박5일. 생각만 하던 일을, 제주에서 완성합니다.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={cormorant.variable}>
      <body>{children}</body>
    </html>
  );
}

import React from "react";
import { SETTINGS } from "../settings.generated";

type Theme = "blackboard" | "slide";

interface BackgroundProps {
  theme?: Theme;
}

// 黒板風デザイン
const BlackboardBackground: React.FC = () => (
  <>
    {/* 黒板背景 */}
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        right: 60,
        bottom: 160,
        background: "#2d5a3d",
        borderRadius: 8,
      }}
    />
    {/* 黒板の茶色フチ（下部） */}
    <div
      style={{
        position: "absolute",
        left: 60,
        right: 60,
        bottom: 160,
        height: 24,
        background: "#8B4513",
        borderRadius: "0 0 8px 8px",
      }}
    />
  </>
);

// スライド風デザイン
const SlideBackground: React.FC = () => (
  <>
    {/* 白背景 */}
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        right: 60,
        bottom: 160,
        background: "#ffffff",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
        border: "3px solid #e0e0e0",
      }}
    />
    {/* ヘッダーバー（青いアクセント） */}
    <div
      style={{
        position: "absolute",
        top: 40,
        left: 60,
        right: 60,
        height: 8,
        background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
        borderRadius: "12px 12px 0 0",
      }}
    />
  </>
);

export const Background: React.FC<BackgroundProps> = ({ theme }) => {
  const currentTheme = theme || (SETTINGS as { theme?: Theme }).theme || "blackboard";

  switch (currentTheme) {
    case "slide":
      return <SlideBackground />;
    case "blackboard":
    default:
      return <BlackboardBackground />;
  }
};

import type { ReactNode } from "react";
import "./PatternCard.css";

type PatternVariant = "pattern-a" | "pattern-b" | "pattern-c";

type PatternCardProps = {
  variant: PatternVariant;
  children: ReactNode;
};

const patternImages: Record<PatternVariant, string> = {
  "pattern-a": "/images/Pattern-a.png",
  "pattern-b": "/images/Pattern-b.png",
  "pattern-c": "/images/Pattern-c.png",
};

export default function PatternCard({ variant, children }: PatternCardProps) {
  return (
    <article className="pattern-card">
      <img
        src={patternImages[variant]}
        alt=""
        className="pattern-card__decor"
      />
      <div className="pattern-card__content">{children}</div>
    </article>
  );
}

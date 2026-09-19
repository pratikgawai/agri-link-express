import { Clock, ShieldCheck, Users, TrendingDown } from "lucide-react";
import useCounter from "../hooks/useCounter";
import ScrollReveal from "./ScrollReveal";

const ICONS = {
  clock: Clock,
  shield: ShieldCheck,
  users: Users,
  "trend-down": TrendingDown,
};

const TONES = {
  green: "var(--forest-700)",
  gold: "var(--gold-600)",
  blue: "var(--blue-600)",
};

export default function StatCard({ stat, index }) {
  const Icon = ICONS[stat.icon] || Clock;
  const color = TONES[stat.tone] || TONES.green;
  const { ref, count } = useCounter(stat.value, 1400);

  return (
    <ScrollReveal
      delay={index * 90}
      style={{
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-md)",
        padding: "1.4rem 1.3rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          minWidth: 46,
          borderRadius: "50%",
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Icon size={22} />
      </div>
      <div ref={ref}>
        <div style={{ fontSize: "1.4rem", fontWeight: 800, color: "var(--ink-900)" }}>
          {stat.display ? stat.display : `${count.toLocaleString("en-IN")}${stat.suffix || ""}`}
        </div>
        <div style={{ fontSize: "0.88rem", color: "var(--ink-700)", fontWeight: 600 }}>
          {stat.label}
        </div>
      </div>
    </ScrollReveal>
  );
}

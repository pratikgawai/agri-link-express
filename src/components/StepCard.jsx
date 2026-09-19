import {
  UserPlus,
  Network,
  Receipt,
  Truck,
  ShieldCheck,
  FileCheck2,
  Wallet,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const ICONS = {
  "user-plus": UserPlus,
  network: Network,
  receipt: Receipt,
  "truck-check": Truck,
  "shield-lock": ShieldCheck,
  bill: FileCheck2,
  wallet: Wallet,
};

const TONES = {
  green: { bg: "var(--forest-50)", border: "var(--forest-100)", chip: "var(--forest-700)" },
  gold: { bg: "var(--gold-100)", border: "#f1d9a8", chip: "var(--gold-600)" },
  blue: { bg: "var(--blue-100)", border: "#c7dff2", chip: "var(--blue-600)" },
};

export default function StepCard({ step, index }) {
  const Icon = ICONS[step.icon] || UserPlus;
  const tone = TONES[step.tone] || TONES.green;

  return (
    <ScrollReveal
      delay={index * 70}
      style={{
        background: tone.bg,
        border: `1px solid ${tone.border}`,
        borderRadius: "var(--radius-md)",
        padding: "1.6rem 1.3rem",
        position: "relative",
        height: "100%",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "-14px",
          left: "1.3rem",
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: tone.chip,
          color: "#fff",
          fontWeight: 800,
          fontSize: "0.85rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        }}
      >
        {step.id}
      </span>
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: "12px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: tone.chip,
          marginTop: "0.6rem",
          marginBottom: "1rem",
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </div>
      <h4 style={{ fontSize: "1.02rem", marginBottom: "0.5rem", lineHeight: 1.3 }}>
        {step.title}
      </h4>
      <p style={{ fontSize: "0.9rem", color: "var(--ink-700)" }}>{step.desc}</p>
    </ScrollReveal>
  );
}

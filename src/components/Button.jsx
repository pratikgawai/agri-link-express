import { ArrowRight } from "lucide-react";

const VARIANTS = {
  primary: {
    background: "var(--forest-800)",
    color: "#fff",
    border: "1px solid var(--forest-800)",
  },
  outline: {
    background: "transparent",
    color: "var(--forest-800)",
    border: "1.5px solid var(--forest-800)",
  },
  gold: {
    background: "var(--gold-500)",
    color: "var(--ink-900)",
    border: "1px solid var(--gold-500)",
  },
  ghost: {
    background: "rgba(255,255,255,0.12)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.35)",
  },
};

export default function Button({
  children,
  variant = "primary",
  icon = true,
  onClick,
  href,
  type = "button",
  style,
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.85rem 1.5rem",
    borderRadius: "var(--radius-pill)",
    fontWeight: 700,
    fontSize: "0.95rem",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease",
    ...VARIANTS[variant],
    ...style,
  };

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={17} strokeWidth={2.4} />}
    </>
  );

  const handleEnter = (e) => {
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow = "0 10px 24px rgba(15,59,40,0.18)";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  };

  if (href) {
    return (
      <a
        href={href}
        style={base}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      style={base}
      onClick={onClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {content}
    </button>
  );
}

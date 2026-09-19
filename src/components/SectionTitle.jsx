import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}) {
  return (
    <ScrollReveal
      className="section-head"
      style={{
        marginLeft: align === "center" ? "auto" : undefined,
        marginRight: align === "center" ? "auto" : undefined,
        textAlign: align,
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={light ? { color: "var(--gold-500)" } : undefined}
        >
          {eyebrow}
        </span>
      )}
      <h2 style={light ? { color: "#fff" } : undefined}>{title}</h2>
      {description && (
        <p style={light ? { color: "rgba(255,255,255,0.78)" } : undefined}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}

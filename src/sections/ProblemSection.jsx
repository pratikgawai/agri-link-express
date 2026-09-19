import { Users, CircleHelp, Truck } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { challenges } from "../data/features";

const ICONS = { users: Users, question: CircleHelp, truck: Truck };

export default function ProblemSection() {
  return (
    <section id="about" className="section" style={{ background: "#fff" }}>
      <div className="container">
        <SectionTitle
          eyebrow="The Challenges Today"
          title="A System That Holds Farmers Back"
          description="Despite hard work, farmers still face many barriers in reaching fair markets."
        />

        <div
          className="problem-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {challenges.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <ScrollReveal
                key={item.title}
                delay={i * 100}
                style={{
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  border: "1px solid var(--line)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ aspectRatio: "16 / 10", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "grayscale(0.5)",
                    }}
                  />
                </div>
                <div style={{ padding: "1.2rem 1.3rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: "50%",
                        background: "var(--forest-900)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={16} />
                    </span>
                    <h4 style={{ fontSize: "1rem" }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--ink-700)" }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

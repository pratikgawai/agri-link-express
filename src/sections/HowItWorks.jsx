import SectionTitle from "../components/SectionTitle";
import StepCard from "../components/StepCard";
import ScrollReveal from "../components/ScrollReveal";
import { steps } from "../data/steps";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="section how-it-works-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--forest-950)",
      }}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          top: -180,
          right: -140,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,151,43,0.10), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 350,
          height: 350,
          bottom: -180,
          left: -160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(42,130,86,0.12), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "55px 55px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <SectionTitle
            eyebrow="How Agri Link Express Works"
            title="A Simple Journey from Farm to Fair Price"
            light
          />

          <ScrollReveal delay={100}>
            <div
              style={{
                maxWidth: 390,
                marginBottom: "2.75rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid var(--gold-500)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "0.94rem",
                  lineHeight: 1.7,
                }}
              >
                An end-to-end, AI-powered platform ensuring transparency,
                efficiency and trust at every step.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Process */}
        <div
          className="steps-grid"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "1.25rem",
            marginTop: "1.5rem",
          }}
        >
          {/* Connecting line */}
          <div
            className="steps-connector"
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "58px",
              left: "9%",
              right: "9%",
              height: "1px",
              background:
                "linear-gradient(90deg, transparent, rgba(197,151,43,0.45), rgba(197,151,43,0.45), transparent)",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <ScrollReveal
              key={step.id}
              delay={index * 100}
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  height: "100%",
                  padding: "0.5rem",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))",
                  border: "1px solid rgba(255,255,255,0.09)",
                  transition:
                    "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
                }}
              >
                <StepCard step={step} index={index} />
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust strip */}
        <ScrollReveal delay={450}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "3.5rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.48)",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>Farmer</span>

            <span style={{ color: "var(--gold-500)" }}>→</span>

            <span>AI Matching</span>

            <span style={{ color: "var(--gold-500)" }}>→</span>

            <span>Buyer</span>

            <span style={{ color: "var(--gold-500)" }}>→</span>

            <span>Smart Logistics</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Responsive */}
      <style>
        {`
          @media (max-width: 950px) {
            .steps-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }

            .steps-connector {
              display: none;
            }
          }

          @media (max-width: 600px) {
            .steps-grid {
              grid-template-columns: 1fr !important;
            }

            .how-it-works-section {
              padding-top: 4.5rem !important;
              padding-bottom: 4.5rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .steps-grid > div,
            .steps-grid > div > div {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
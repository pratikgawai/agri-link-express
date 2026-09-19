import { ArrowUpRight, Sparkles } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import StatCard from "../components/StatCard";
import ScrollReveal from "../components/ScrollReveal";
import { stats } from "../data/stats";

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, var(--cream) 0%, #ffffff 52%, var(--cream) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 420,
          height: 420,
          top: -180,
          right: -160,
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
          width: 380,
          height: 380,
          bottom: -200,
          left: -150,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,105,72,0.09), transparent 68%)",
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
        {/* Heading */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <SectionTitle
            eyebrow="Real Impact, Brighter Tomorrow"
            title="Creating Value for a Stronger Bharat"
          />

          <ScrollReveal delay={100}>
            <div
              style={{
                maxWidth: 360,
                marginBottom: "2.7rem",
                paddingLeft: "1rem",
                borderLeft: "2px solid var(--gold-500)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "var(--ink-600)",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                }}
              >
                Building measurable value across farmers, markets,
                logistics and the agricultural ecosystem.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "1.15rem",
            marginTop: "1rem",
          }}
        >
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.id}
              delay={index * 90}
              style={{ height: "100%" }}
            >
              <div
                className="impact-stat-wrapper"
                style={{
                  position: "relative",
                  height: "100%",
                  padding: "0.45rem",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(246,243,232,0.72))",
                  border: "1px solid rgba(15,59,40,0.09)",
                  boxShadow:
                    "0 16px 45px rgba(15,59,40,0.07)",
                  transition:
                    "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
              >
                <StatCard
                  stat={stat}
                  index={index}
                />

                <span
                  style={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    width: 30,
                    height: 30,
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "50%",
                    background: "rgba(15,59,40,0.055)",
                    color: "var(--forest-700)",
                  }}
                >
                  <ArrowUpRight
                    size={14}
                    strokeWidth={2}
                  />
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom statement */}
        <ScrollReveal delay={350}>
          <div
            style={{
              marginTop: "3rem",
              padding: "1.15rem 1.4rem",

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.5rem",
              flexWrap: "wrap",

              borderRadius: "18px",

              background:
                "linear-gradient(100deg, var(--forest-900), var(--forest-800))",

              boxShadow:
                "0 16px 40px rgba(15,59,40,0.13)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.8rem",
              }}
            >
              <span
                style={{
                  width: 38,
                  height: 38,
                  flexShrink: 0,
                  display: "grid",
                  placeItems: "center",
                  borderRadius: "11px",
                  background: "rgba(255,255,255,0.09)",
                  color: "var(--gold-500)",
                }}
              >
                <Sparkles size={18} />
              </span>

              <div>
                <strong
                  style={{
                    display: "block",
                    color: "#fff",
                    fontSize: "0.86rem",
                  }}
                >
                  Impact Beyond Transactions
                </strong>

                <span
                  style={{
                    color: "rgba(255,255,255,0.58)",
                    fontSize: "0.72rem",
                  }}
                >
                  Connecting technology, opportunity and sustainable growth.
                </span>
              </div>
            </div>

            <span
              style={{
                color: "var(--gold-500)",
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "0.95rem",
              }}
            >
              Farm → Market → Growth
            </span>
          </div>
        </ScrollReveal>
      </div>

      <style>
        {`
          .impact-stat-wrapper:hover {
            transform: translateY(-6px);
            border-color: rgba(15, 59, 40, 0.16) !important;
            box-shadow: 0 22px 55px rgba(15, 59, 40, 0.11) !important;
          }

          @media (max-width: 1000px) {
            #impact .stats-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }

          @media (max-width: 580px) {
            #impact .stats-grid {
              grid-template-columns: 1fr !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .impact-stat-wrapper {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
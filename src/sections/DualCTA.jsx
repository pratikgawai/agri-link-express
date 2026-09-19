import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import Button from "../components/Button";
import ScrollReveal from "../components/ScrollReveal";

const CARDS = [
  {
    tag: "Are You a Farmer?",
    title: "Get Better Prices for Your Hard Work",
    points: [
      "Register your produce",
      "Get fair price estimates",
      "Sell with confidence",
    ],
    image:
      "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=1000&auto=format&fit=crop",
    alt: "Smiling farmer holding freshly harvested wheat",
    cta: "Join as Farmer",
    variant: "primary",
  },
  {
    tag: "Are You a Buyer?",
    title: "Access Quality Produce with Ease",
    points: [
      "Find fresh produce",
      "Connect with verified farmers",
      "Ensure reliable supply",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
    alt: "Buyer reviewing fresh produce on a tablet at a market",
    cta: "Join as Buyer",
    variant: "gold",
  },
];

export default function DualCTA() {
  return (
    <section
      id="features"
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #ffffff 0%, var(--cream) 100%)",
      }}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-180px",
          left: "-180px",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(30,105,72,0.08), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-220px",
          right: "-160px",
          width: 440,
          height: 440,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,151,43,0.09), transparent 68%)",
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
        {/* Section intro */}
        <ScrollReveal>
          <div
            style={{
              textAlign: "center",
              maxWidth: 720,
              margin: "0 auto 2.8rem",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.42rem 0.8rem",
                borderRadius: "999px",
                background: "var(--forest-50)",
                border: "1px solid rgba(15,59,40,0.08)",
                color: "var(--forest-700)",
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <Sparkles size={13} />
              Built for Both Sides of the Ecosystem
            </div>

            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
                lineHeight: 1.12,
                color: "var(--forest-900)",
              }}
            >
              One Platform.
              <br />
              <span style={{ color: "var(--gold-600)" }}>
                Two Powerful Connections.
              </span>
            </h2>

            <p
              style={{
                maxWidth: 600,
                margin: "0.9rem auto 0",
                color: "var(--ink-600)",
                fontSize: "0.96rem",
                lineHeight: 1.7,
              }}
            >
              Whether you grow the produce or source it, Agri Link Express
              creates a simpler path between farmers and buyers.
            </p>
          </div>
        </ScrollReveal>

        {/* CTA cards */}
        <div
          className="dual-cta-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          {CARDS.map((card, i) => (
            <ScrollReveal
              key={card.tag}
              delay={i * 120}
              style={{
                height: "100%",
              }}
            >
              <article
                className="dual-cta-card"
                style={{
                  position: "relative",
                  height: "100%",
                  minHeight: 360,
                  overflow: "hidden",
                  display: "grid",
                  gridTemplateColumns: "0.9fr 1.25fr",
                  borderRadius: "26px",
                  border: "1px solid rgba(15,59,40,0.10)",
                  background: "#fff",
                  boxShadow: "0 18px 55px rgba(15,59,40,0.08)",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    minHeight: 360,
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.6s ease",
                    }}
                  />

                  {/* Image overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, rgba(15,59,40,0.02), rgba(15,59,40,0.38))",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Number */}
                  <span
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      width: 38,
                      height: 38,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.9)",
                      color: "var(--forest-900)",
                      fontSize: "0.78rem",
                      fontWeight: 900,
                      boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                {/* Content */}
                <div
                  style={{
                    position: "relative",
                    padding: "2rem 1.8rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background:
                      "linear-gradient(145deg, #ffffff, var(--forest-50))",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                      padding: "0.38rem 0.7rem",
                      marginBottom: "0.8rem",
                      borderRadius: "999px",
                      background:
                        card.variant === "gold"
                          ? "rgba(197,151,43,0.11)"
                          : "rgba(15,105,72,0.09)",
                      color:
                        card.variant === "gold"
                          ? "var(--gold-600)"
                          : "var(--forest-700)",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                    }}
                  >
                    {card.tag}
                  </span>

                  <h3
                    style={{
                      margin: 0,
                      maxWidth: 310,
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.35rem, 2vw, 1.65rem)",
                      lineHeight: 1.18,
                      color: "var(--forest-900)",
                    }}
                  >
                    {card.title}
                  </h3>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "1.3rem 0 1.6rem",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.7rem",
                    }}
                  >
                    {card.points.map((point) => (
                      <li
                        key={point}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.6rem",
                          color: "var(--ink-700)",
                          fontSize: "0.88rem",
                        }}
                      >
                        <span
                          style={{
                            width: 23,
                            height: 23,
                            flexShrink: 0,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: "50%",
                            background: "var(--forest-50)",
                            color: "var(--forest-700)",
                          }}
                        >
                          <CheckCircle2 size={14} />
                        </span>

                        {point}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={card.variant}
                    icon={false}
                    style={{
                      alignSelf: "flex-start",
                    }}
                  >
                    {card.cta}
                  </Button>

                  {/* Decorative icon */}
                  <ArrowUpRight
                    className="dual-cta-arrow"
                    size={22}
                    style={{
                      position: "absolute",
                      right: 20,
                      top: 20,
                      color: "rgba(15,59,40,0.18)",
                    }}
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>
        {`
          .dual-cta-card:hover {
            transform: translateY(-7px);
            box-shadow: 0 26px 70px rgba(15,59,40,0.13) !important;
          }

          .dual-cta-card:hover img {
            transform: scale(1.055);
          }

          .dual-cta-card:hover .dual-cta-arrow {
            color: var(--gold-600) !important;
            transform: translate(2px, -2px);
          }

          .dual-cta-arrow {
            transition: color 0.25s ease, transform 0.25s ease;
          }

          @media (max-width: 900px) {
            #features .dual-cta-grid {
              grid-template-columns: 1fr !important;
              max-width: 720px;
              margin: 0 auto;
            }
          }

          @media (max-width: 560px) {
            #features .dual-cta-card {
              grid-template-columns: 1fr !important;
            }

            #features .dual-cta-card > div:first-child {
              min-height: 220px !important;
            }

            #features .dual-cta-card > div:last-child {
              padding: 1.5rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .dual-cta-card,
            .dual-cta-card img,
            .dual-cta-arrow {
              transition: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
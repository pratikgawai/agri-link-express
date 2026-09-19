import {
  Network,
  Route,
  Tag,
  EyeOff,
  Zap,
  Leaf,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import { aiCoreLeft, aiCoreRight } from "../data/features";

const ICONS = {
  network: Network,
  route: Route,
  tag: Tag,
  "eye-off": EyeOff,
  zap: Zap,
};

function FeaturePill({ item, align }) {
  const Icon = ICONS[item.icon];

  return (
    <ScrollReveal
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: align === "right" ? "flex-end" : "flex-start",
        gap: "0.9rem",
        flexDirection: align === "right" ? "row-reverse" : "row",
        textAlign: align === "right" ? "right" : "left",

        padding: "1rem 1.15rem",

        borderRadius: "18px",

        background:
          "linear-gradient(135deg, rgba(255,255,255,0.095), rgba(255,255,255,0.035))",

        border: "1px solid rgba(255,255,255,0.13)",

        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), 0 12px 35px rgba(0,0,0,0.10)",

        backdropFilter: "blur(12px)",

        transition:
          "transform 0.3s ease, border-color 0.3s ease, background 0.3s ease",
      }}
    >
      {/* Icon */}
      <span
        style={{
          width: 44,
          height: 44,
          minWidth: 44,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          borderRadius: "13px",

          background:
            "linear-gradient(145deg, var(--gold-500), var(--gold-600))",

          color: "var(--forest-900)",

          boxShadow:
            "0 8px 20px rgba(201,151,42,0.18)",
        }}
      >
        <Icon size={19} strokeWidth={2.1} />
      </span>

      {/* Content */}
      <span
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.22rem",
        }}
      >
        <strong
          style={{
            display: "block",
            color: "#fff",
            fontSize: "0.94rem",
            fontWeight: 750,
            letterSpacing: "-0.01em",
          }}
        >
          {item.title}
        </strong>

        <span
          style={{
            fontSize: "0.76rem",
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.62)",
          }}
        >
          {item.desc}
        </span>
      </span>
    </ScrollReveal>
  );
}

export default function AICore() {
  return (
    <section
      id="features"
      className="section"
      style={{
        position: "relative",
        overflow: "hidden",

        padding:
          "clamp(5rem, 9vw, 8rem) 0",

        background:
          "radial-gradient(circle at 50% 45%, rgba(39,120,79,0.22), transparent 28%), linear-gradient(145deg, var(--forest-950), var(--forest-900))",
      }}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          top: "25%",
          left: "50%",

          transform: "translate(-50%, -50%)",

          borderRadius: "50%",

          background:
            "radial-gradient(circle, rgba(210,162,47,0.08), transparent 65%)",

          pointerEvents: "none",
        }}
      />

      {/* Grid texture */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,

          opacity: 0.035,

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
        {/* Section heading */}
        <SectionTitle
          eyebrow="Innovation at the Core"
          title="AI for a Smarter, Fairer Agri Ecosystem"
          description="Combining artificial intelligence with real-world farming needs to create a transparent and efficient marketplace."
          light
        />

        {/* AI Architecture */}
        <div
          className="aicore-grid"
          style={{
            display: "grid",

            gridTemplateColumns:
              "minmax(0, 1fr) minmax(190px, 240px) minmax(0, 1fr)",

            gap: "clamp(1.5rem, 4vw, 4rem)",

            alignItems: "center",

            marginTop: "4rem",
          }}
        >
          {/* LEFT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {aiCoreLeft.map((item, index) => (
              <FeaturePill
                key={item.title}
                item={item}
                align="left"
                delay={index * 80}
              />
            ))}
          </div>

          {/* CENTER AI HUB */}
          <ScrollReveal
            delay={150}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className="aicore-hub"
              style={{
                position: "relative",

                width: "clamp(170px, 18vw, 220px)",
                aspectRatio: "1",

                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",

                gap: "0.65rem",

                borderRadius: "50%",

                background:
                  "radial-gradient(circle at 35% 25%, #237b50, #0b3325 68%, #062319 100%)",

                border:
                  "2px solid var(--gold-500)",

                boxShadow:
                  "0 0 0 9px rgba(210,162,47,0.06), 0 0 55px rgba(210,162,47,0.16), inset 0 0 35px rgba(255,255,255,0.05)",

                zIndex: 2,
              }}
            >
              {/* Outer ring */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: -15,

                  borderRadius: "50%",

                  border:
                    "1px dashed rgba(210,162,47,0.28)",

                  animation:
                    "spin 18s linear infinite",
                }}
              />

              {/* Inner icon */}
              <div
                style={{
                  width: 58,
                  height: 58,

                  display: "grid",
                  placeItems: "center",

                  borderRadius: "18px",

                  background:
                    "rgba(255,255,255,0.08)",

                  border:
                    "1px solid rgba(255,255,255,0.14)",

                  color: "var(--gold-500)",
                }}
              >
                <Leaf size={30} strokeWidth={1.7} />
              </div>

              <span
                style={{
                  color: "#fff",

                  fontSize: "0.9rem",

                  fontWeight: 800,

                  letterSpacing: "0.13em",
                }}
              >
                AI CORE
              </span>

              <span
                style={{
                  color: "rgba(255,255,255,0.5)",

                  fontSize: "0.55rem",

                  letterSpacing: "0.15em",

                  textTransform: "uppercase",
                }}
              >
                Intelligence Layer
              </span>
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {aiCoreRight.map((item, index) => (
              <FeaturePill
                key={item.title}
                item={item}
                align="right"
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <ScrollReveal delay={250}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",

              gap: "0.8rem",

              marginTop: "3.5rem",

              color: "var(--gold-500)",
            }}
          >
            <Sparkles size={17} />

            <p
              style={{
                margin: 0,

                fontFamily: "var(--font-display)",

                fontSize: "clamp(1rem, 2vw, 1.3rem)",

                fontStyle: "italic",

                fontWeight: 600,
              }}
            >
              Technology Rooted in Real Impact
            </p>

            <ArrowRight size={17} />
          </div>
        </ScrollReveal>
      </div>

      {/* Local animation */}
      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 850px) {
            .aicore-grid {
              grid-template-columns: 1fr !important;
              max-width: 650px;
              margin-left: auto;
              margin-right: auto;
            }

            .aicore-hub {
              margin: 1.5rem auto !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .aicore-hub > div {
              animation: none !important;
            }
          }
        `}
      </style>
    </section>
  );
}
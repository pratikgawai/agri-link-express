import {
  ArrowUpRight,
  Github,
  Linkedin,
  Leaf,
  Youtube,
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

const LINKS = ["Home", "About", "How It Works", "Impact", "Contact"];

const SOCIALS = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Github, label: "GitHub" },
  { Icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 15% 10%, rgba(30,105,72,0.22), transparent 30%), linear-gradient(135deg, var(--forest-950), #071c13)",
        color: "rgba(255,255,255,0.72)",
      }}
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          right: -160,
          bottom: -180,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,151,43,0.13), transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          padding:
            "4rem clamp(1.25rem, 4vw, 2.5rem) 1.4rem",
        }}
      >
        {/* Main footer */}
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.45fr 0.8fr 1fr",
            gap: "3rem",
            paddingBottom: "2.8rem",
            borderBottom: "1px solid rgba(255,255,255,0.11)",
          }}
        >
          {/* Brand */}
          <ScrollReveal>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <span
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "14px",
                    background:
                      "linear-gradient(145deg, var(--gold-500), #d7ad4d)",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--ink-900)",
                    boxShadow:
                      "0 10px 30px rgba(197,151,43,0.18)",
                  }}
                >
                  <Leaf size={21} strokeWidth={2.3} />
                </span>

                <span style={{ lineHeight: 1.1 }}>
                  <strong
                    style={{
                      display: "block",
                      color: "#fff",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.12rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Agri Link Express
                  </strong>

                  <span
                    style={{
                      display: "block",
                      marginTop: "0.25rem",
                      fontSize: "0.61rem",
                      letterSpacing: "0.13em",
                      fontWeight: 800,
                      color: "var(--gold-500)",
                    }}
                  >
                    FARM TO FAIR PRICE
                  </span>
                </span>
              </div>

              <p
                style={{
                  maxWidth: 380,
                  margin: 0,
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                A smart, transparent AI platform connecting farmers
                directly to fair markets across Bharat.
              </p>

              {/* Socials */}
              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  marginTop: "1.4rem",
                }}
              >
                {SOCIALS.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#contact"
                    aria-label={label}
                    className="footer-social"
                    style={{
                      width: 38,
                      height: 38,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "12px",
                      border:
                        "1px solid rgba(255,255,255,0.14)",
                      background:
                        "rgba(255,255,255,0.035)",
                      transition:
                        "all 0.25s ease",
                    }}
                  >
                    <Icon size={16} color="#fff" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Links */}
          <ScrollReveal delay={100}>
            <div>
              <h4
                style={{
                  margin: "0 0 1.1rem",
                  color: "#fff",
                  fontSize: "0.9rem",
                  letterSpacing: "0.02em",
                }}
              >
                Quick Links
              </h4>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.7rem",
                }}
              >
                {LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="footer-link"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontSize: "0.84rem",
                        color:
                          "rgba(255,255,255,0.62)",
                        transition:
                          "color 0.2s ease, transform 0.2s ease",
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* SIH */}
          <ScrollReveal delay={180}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                  padding: "0.4rem 0.7rem",
                  borderRadius: "999px",
                  background:
                    "rgba(197,151,43,0.09)",
                  border:
                    "1px solid rgba(197,151,43,0.18)",
                  color: "var(--gold-500)",
                  fontSize: "0.68rem",
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--gold-500)",
                  }}
                />
                SIH 2026
              </div>

              <h4
                style={{
                  margin: "0 0 0.65rem",
                  color: "#fff",
                  fontSize: "1rem",
                }}
              >
                Smart India Hackathon 2026
              </h4>

              <p
                style={{
                  margin: 0,
                  maxWidth: 280,
                  fontSize: "0.84rem",
                  lineHeight: 1.7,
                  color:
                    "rgba(255,255,255,0.58)",
                }}
              >
                Innovation for a Greener, Stronger India.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1rem",
                  color: "var(--gold-500)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                }}
              >
                #SIH2026
                <ArrowUpRight size={14} />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.7rem",
            paddingTop: "1.4rem",
            fontSize: "0.75rem",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
            }}
          >
            © 2026 Agri Link Express. All rights reserved.
          </span>

          <span
            style={{
              color: "rgba(255,255,255,0.48)",
            }}
          >
            From Our Fields to a Better Tomorrow · Made with
            <span
              style={{
                color: "#d96b5f",
                margin: "0 0.25rem",
              }}
            >
              ♥
            </span>
            for Bharat
          </span>
        </div>
      </div>

      <style>
        {`
          .footer-social:hover {
            transform: translateY(-3px);
            background: rgba(197,151,43,0.12) !important;
            border-color: rgba(197,151,43,0.35) !important;
          }

          .footer-link:hover {
            color: var(--gold-500) !important;
            transform: translateX(3px);
          }

          @media (max-width: 800px) {
            #contact .footer-grid {
              grid-template-columns: 1fr 1fr !important;
              gap: 2.5rem 2rem !important;
            }

            #contact .footer-grid > div:first-child {
              grid-column: 1 / -1;
            }
          }

          @media (max-width: 520px) {
            #contact .footer-grid {
              grid-template-columns: 1fr !important;
            }

            #contact .footer-grid > div:first-child {
              grid-column: auto;
            }

            #contact .container {
              padding-top: 3rem !important;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .footer-social,
            .footer-link {
              transition: none !important;
            }
          }
        `}
      </style>
    </footer>
  );
}
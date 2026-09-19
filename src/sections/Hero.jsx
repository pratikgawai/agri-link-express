import {
  ShieldCheck,
  Handshake,
  Cpu,
  Lock,
  ArrowDown,
  Sparkles,
} from "lucide-react";

import Button from "../components/Button";
import RouteAnimation from "../components/RouteAnimation";
import ScrollReveal from "../components/ScrollReveal";
import { heroBadges, heroHighlights } from "../data/features";

import "../styles/hero.css";
import "../styles/hero.css";

const ICONS = {
  "shield-check": ShieldCheck,
  handshake: Handshake,
  cpu: Cpu,
  lock: Lock,
};

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Decorative background elements */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero-container">
        <div className="hero-grid">

          {/* ================= LEFT CONTENT ================= */}
          <ScrollReveal className="hero-copy">

            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot">
                <Sparkles size={12} />
              </span>

              <span>
                Empowering Farmers
                <span className="hero-dot-separator">·</span>
                Strengthening Bharat
              </span>
            </div>

            <h1 className="hero-title">
              From Farm to
              <br />

              <span className="hero-title-dark">
                Fair Price
              </span>

              <span className="hero-title-dash"> — </span>

              <br />

              <span className="hero-title-accent">
                Powered by Team Infinations.
              </span>
            </h1>

            <p className="hero-description">
              A smart, transparent and technology-driven platform connecting
              farmers, buyers and markets for a better tomorrow.
            </p>

            {/* CTA */}
            <div className="hero-actions">
              <Button variant="primary" href="#how-it-works">
                See How It Works
              </Button>

              <Button variant="outline" href="#contact" icon={false}>
                Join as Farmer/Buyer
              </Button>
            </div>

            {/* Trust badges */}
            <div className="hero-badges">
              {heroBadges.map((badge) => {
                const Icon = ICONS[badge.icon];

                return (
                  <div className="hero-badge" key={badge.label}>
                    <span className="hero-badge-icon">
                      <Icon size={16} strokeWidth={2} />
                    </span>

                    <span className="hero-badge-content">
                      <strong>{badge.label}</strong>
                      <span>{badge.sub}</span>
                    </span>
                  </div>
                );
              })}
            </div>

          </ScrollReveal>


          {/* ================= RIGHT VISUAL ================= */}
          <ScrollReveal
            className="hero-visual"
            delay={120}
          >
            <div className="hero-image-wrapper">

              {/* Main image */}
              <div className="hero-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1200&auto=format&fit=crop"
                  alt="Indian farmer holding freshly harvested leafy greens in a field"
                  className="hero-image"
                />

                <div className="hero-image-overlay" />
              </div>


              {/* Top floating card */}
              <div className="hero-highlights-card">

                <div className="hero-card-label">
                  <span className="hero-live-dot" />
                  PLATFORM FEATURES
                </div>

                {heroHighlights.map((item) => (
                  <div className="hero-highlight" key={item}>
                    <span className="hero-highlight-check">
                      ✓
                    </span>

                    <span>{item}</span>
                  </div>
                ))}

              </div>


              {/* Route animation card */}
              <div className="hero-route-card">
                <div className="hero-route-header">
                  <div>
                    <span className="hero-route-kicker">
                      SMART LOGISTICS
                    </span>

                    <strong>
                      Farm → Market
                    </strong>
                  </div>

                  <div className="hero-route-icon">
                    <ArrowDown size={16} />
                  </div>
                </div>

                <RouteAnimation />
              </div>


              {/* Floating AI badge */}
              <div className="hero-ai-badge">
                <span className="hero-ai-icon">
                  <Cpu size={17} />
                </span>

                <span>
                  <strong>AI Powered</strong>
                  <small>Smart Matching</small>
                </span>
              </div>

            </div>
          </ScrollReveal>

        </div>


        {/* Bottom scroll indicator */}
        <a href="#about" className="hero-scroll">
          <span>EXPLORE</span>
          <ArrowDown size={15} />
        </a>

      </div>
    </section>
  );
}
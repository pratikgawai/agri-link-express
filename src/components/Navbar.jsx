import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Button from "./Button";
import "../styles/navbar.css";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Impact", href: "#impact" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
  { label: "Survey", href: "#survey" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* ================= BRAND ================= */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Agri Link Express Home"
        >
          <span className="navbar-logo infination-logo">
<img
  src={`${import.meta.env.BASE_URL}images/infination-logo.png`}
  alt="Infination"
/>
          </span>

          <span className="navbar-brand-copy">
            <span className="navbar-brand-name">
              Agri Link Express
            </span>

            <span className="navbar-brand-tagline">
              FARM TO FAIR PRICE
            </span>
          </span>
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="navbar-links"
          aria-label="Main navigation"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="navbar-actions">

          {/* SIH BADGE */}
          <div className="sih-badge">
            <span
              className="sih-mark"
              aria-hidden="true"
            >
              <span />
              <span />
            </span>

            <span className="sih-text">
              <strong>SMART INDIA</strong>
              <strong>HACKATHON 2026</strong>
            </span>
          </div>

          {/* DESKTOP CTA */}
          <div className="navbar-desktop-cta">
            <Button
              variant="primary"
              icon={false}
            >
              Get Started
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={22} strokeWidth={2} />
            ) : (
              <Menu size={22} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`mobile-menu ${
          menuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav
          className="mobile-menu-links"
          aria-label="Mobile navigation"
        >
          {LINKS.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className="mobile-menu-link"
              style={{
                "--delay": `${index * 40}ms`,
              }}
              onClick={closeMenu}
            >
              <span>{link.label}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>

        <div className="mobile-menu-cta">
          <Button
            variant="primary"
            icon={false}
          >
            Get Started
          </Button>
        </div>

        <div className="mobile-sih">
          <span
            className="sih-mark"
            aria-hidden="true"
          >
            <span />
            <span />
          </span>

          <span>
            SMART INDIA HACKATHON 2026
          </span>
        </div>
      </div>
    </header>
  );
}
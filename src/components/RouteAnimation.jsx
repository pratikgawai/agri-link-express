import { Sprout, Truck, Store } from "lucide-react";

/**
 * Small decorative diagram: Farm -> AI Optimized Route -> Buyer,
 * with a flowing dashed line to suggest live logistics.
 */
export default function RouteAnimation() {
  const nodeStyle = (bg) => ({
    width: 56,
    height: 56,
    borderRadius: "50%",
    background: bg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    boxShadow: "0 6px 16px rgba(15,59,40,0.25)",
    position: "relative",
    zIndex: 2,
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.6rem",
      }}
    >
      <div style={{ position: "relative", width: "100%", maxWidth: 280 }}>
        <svg
          viewBox="0 0 280 40"
          width="100%"
          height="40"
          style={{ position: "absolute", top: 8, left: 0, zIndex: 1 }}
        >
          <line
            x1="28"
            y1="20"
            x2="252"
            y2="20"
            stroke="var(--gold-500)"
            strokeWidth="3"
            className="route-dash"
            strokeLinecap="round"
          />
        </svg>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={nodeStyle("var(--forest-700)")}>
            <Sprout size={24} />
          </div>
          <div
            className="pulse-node"
            style={{ ...nodeStyle("var(--gold-500)"), color: "var(--ink-900)" }}
          >
            <Truck size={22} />
          </div>
          <div style={nodeStyle("var(--forest-700)")}>
            <Store size={24} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: 280,
          fontSize: "0.78rem",
          fontWeight: 700,
          color: "var(--ink-700)",
        }}
      >
        <span>Farm</span>
        <span style={{ color: "var(--gold-600)" }}>AI Optimized Route</span>
        <span>Buyer</span>
      </div>
    </div>
  );
}

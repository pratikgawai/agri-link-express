import {
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  Download,
  FileText,
  Home,
  Leaf,
  Menu,
  Search,
  Settings,
  Users,
  UserRound,
  Store,
  RotateCcw,
  Eye,
} from "lucide-react";
import { useMemo, useState } from "react";

const RESPONSES = [
  {
    name: "Ramesh Patil",
    type: "Farmer",
    location: "Nashik, MH",
    crop: "Onion",
    concern: "Low market price",
    willing: "Yes",
    submitted: "19 Sep 2026, 10:24",
  },
  {
    name: "Savitri Jadhav",
    type: "Farmer",
    location: "Pune, MH",
    crop: "Tomato",
    concern: "Lack of storage",
    willing: "Yes",
    submitted: "19 Sep 2026, 09:18",
  },
  {
    name: "Vikas More",
    type: "Buyer",
    location: "Mumbai, MH",
    crop: "Mixed",
    concern: "Regular supply needed",
    willing: "Yes",
    submitted: "18 Sep 2026, 16:42",
  },
  {
    name: "Anjali Deshmukh",
    type: "Farmer",
    location: "Ahmednagar, MH",
    crop: "Grapes",
    concern: "Transportation cost",
    willing: "Yes",
    submitted: "18 Sep 2026, 14:11",
  },
  {
    name: "Rahul Mehta",
    type: "Buyer",
    location: "Pune, MH",
    crop: "Potato",
    concern: "Quality consistency",
    willing: "Yes",
    submitted: "17 Sep 2026, 11:03",
  },
];

const CROP_DATA = [
  ["Onion", 28],
  ["Tomato", 20],
  ["Potato", 15],
  ["Grapes", 12],
  ["Others", 25],
];

const CONCERN_DATA = [
  ["Low market price", 32],
  ["Lack of storage", 24],
  ["Transportation cost", 18],
  ["Quality issues", 14],
  ["Others", 12],
];

export default function SurveyResponses() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [state, setState] = useState("All");
  const [crop, setCrop] = useState("All");

  const filteredResponses = useMemo(() => {
    return RESPONSES.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.crop.toLowerCase().includes(search.toLowerCase()) ||
        item.location.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        type === "All" || item.type === type;

      const matchesState =
        state === "All" ||
        item.location.includes(state);

      const matchesCrop =
        crop === "All" || item.crop === crop;

      return (
        matchesSearch &&
        matchesType &&
        matchesState &&
        matchesCrop
      );
    });
  }, [search, type, state, crop]);

  const resetFilters = () => {
    setSearch("");
    setType("All");
    setState("All");
    setCrop("All");
  };

  const exportCSV = () => {
    const headers = [
      "Name",
      "Type",
      "Location",
      "Main Crop",
      "Key Concern",
      "Willing",
      "Submitted On",
    ];

    const rows = RESPONSES.map((item) => [
      item.name,
      item.type,
      item.location,
      item.crop,
      item.concern,
      item.willing,
      item.submitted,
    ]);

    const csv = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row.map((cell) => `"${cell}"`).join(",")
      )
      .join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "agri-link-survey-responses.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div className="survey-dashboard">

      {/* SIDEBAR */}
      <aside className="survey-sidebar">

<div className="survey-side-brand">
  <div className="survey-brand-logo-box">
    <img
      src={`${import.meta.env.BASE_URL}images/infination-logo.png`}
      alt="Infination"
      className="survey-brand-logo"
    />
  </div>

  <div className="survey-brand-copy">
    
    <strong>Agri Link Express</strong>
    <span>From Farms to Future </span>
  </div>
</div>

        <nav className="survey-side-nav">
          <a href="#home">
            <Home size={19} />
            Dashboard
          </a>

          <a className="active" href="#survey">
            <FileText size={19} />
            Survey Responses
          </a>

          <a href="#impact">
            <BarChart3 size={19} />
            Analytics
          </a>

          <a href="#survey">
            <Users size={19} />
            Farmers
          </a>

          <a href="#survey">
            <FileText size={19} />
            Reports
          </a>

          <a href="#contact">
            <Settings size={19} />
            Settings
          </a>
        </nav>

        <div className="survey-side-message">
          <em>
            Empowering
            <br />
            Farmers
            <br />
            Enriching
            <br />
            Tomorrow
          </em>
        </div>
      </aside>

      {/* MAIN */}
      <main className="survey-main">

        {/* TOP BAR */}
        <header className="survey-topbar">

          <div className="survey-mobile-menu">
            <Menu size={22} />
          </div>

          <div className="survey-top-search">
            <Search size={19} />
            <input
              placeholder="Search responses, farmer name, crop..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <Bell size={23} className="survey-bell" />

         <div className="survey-admin">
  <div className="survey-avatar">
    <UserRound size={20} strokeWidth={1.8} />
  </div>

 <div className="survey-admin-info">
  <div className="team-infination">
    <div className="team-infination-content">
      <h3>TEAM INFINATION</h3>
      <p>Innovation • Technology • Impact</p>
    </div>
  </div>

  <span className="admin-label">Admin</span>
</div>
</div>
        </header>

        {/* CONTENT */}
        <div className="survey-content">

          {/* TITLE */}
          <div className="survey-heading">

            <div>
              <div className="survey-title-row">
                <FileText size={35} />
                <h1>Survey Responses</h1>
              </div>

              <p>
                View and analyze responses from farmers,
                buyers and stakeholders.
              </p>
            </div>

            <div className="survey-heading-actions">

              <button className="date-button">
                <CalendarDays size={18} />
                Sep 01, 2026 - Sep 19, 2026
                <ChevronDown size={16} />
              </button>

              <button
                className="export-button"
                onClick={exportCSV}
              >
                <Download size={18} />
                Export CSV
              </button>

            </div>
          </div>

          {/* STATS */}
          <div className="survey-stats">

            <Stat
              icon={<Users />}
              value="128"
              label="Total Responses"
              className="green"
            />

            <Stat
              icon={<Leaf />}
              value="96"
              label="Farmers"
              sub="75%"
              className="green"
            />

            <Stat
              icon={<Store />}
              value="22"
              label="Buyers"
              sub="17%"
              className="blue"
            />

            <Stat
              icon={<Users />}
              value="10"
              label="Others"
              sub="8%"
              className="yellow"
            />

          </div>

          {/* FILTERS */}
          <div className="survey-filters">

            <Filter
              label="Respondent Type"
              value={type}
              setValue={setType}
              options={["All", "Farmer", "Buyer"]}
            />

            <Filter
              label="State"
              value={state}
              setValue={setState}
              options={[
                "All",
                "Pune",
                "Mumbai",
                "Nashik",
                "Ahmednagar",
              ]}
            />

            <Filter
              label="Crop Type"
              value={crop}
              setValue={setCrop}
              options={[
                "All",
                "Onion",
                "Tomato",
                "Potato",
                "Grapes",
                "Mixed",
              ]}
            />

            <div className="table-search">
              <Search size={18} />
              <input
                placeholder="Search by name, phone, crop..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            </div>

            <button
              className="reset-button"
              onClick={resetFilters}
            >
              <RotateCcw size={15} />
              Reset
            </button>

          </div>

          {/* TABLE */}
          <div className="response-table-wrapper">

            <table className="response-table">

              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Main Crop</th>
                  <th>Key Concern</th>
                  <th>Willing to Use Platform?</th>
                  <th>Submitted On</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {filteredResponses.map((item, index) => (
                  <tr key={item.name}>

                    <td>{index + 1}</td>

                    <td>
                      <div className="respondent-name">
                        <span>
                          <UserRound size={15} />
                        </span>
                        {item.name}
                      </div>
                    </td>

                    <td>
                      <span
                        className={`type-badge ${item.type.toLowerCase()}`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td>{item.location}</td>

                    <td>{item.crop}</td>

                    <td>{item.concern}</td>

                    <td>
                      <span className="yes-badge">
                        Yes
                      </span>
                    </td>

                    <td>{item.submitted}</td>

                    <td>
                      <button className="view-button">
                        <Eye size={15} />
                        View
                      </button>
                    </td>

                  </tr>
                ))}

                {filteredResponses.length === 0 && (
                  <tr>
                    <td
                      colSpan="9"
                      className="no-results"
                    >
                      No responses found.
                    </td>
                  </tr>
                )}

              </tbody>
            </table>
          </div>

          {/* CHARTS */}
          <div className="survey-charts">

            {/* DISTRIBUTION */}
            <div className="chart-card">
              <h2>Respondent Type Distribution</h2>

              <div className="donut-area">

                <div className="donut">
                  <div>
                    <strong>128</strong>
                    <span>Total</span>
                  </div>
                </div>

                <div className="legend">
                  <Legend color="green" label="Farmers" value="75%" />
                  <Legend color="blue" label="Buyers" value="17%" />
                  <Legend color="yellow" label="Others" value="8%" />
                </div>

              </div>
            </div>

            {/* CROPS */}
            <div className="chart-card">
              <h2>Top Crops Mentioned</h2>

              <div className="bar-list">
                {CROP_DATA.map(([label, value]) => (
                  <Bar
                    key={label}
                    label={label}
                    value={value}
                  />
                ))}
              </div>
            </div>

            {/* CONCERNS */}
            <div className="chart-card">
              <h2>Major Concerns</h2>

              <div className="bar-list orange">
                {CONCERN_DATA.map(([label, value]) => (
                  <Bar
                    key={label}
                    label={label}
                    value={value}
                    orange
                  />
                ))}
              </div>
            </div>

          </div>

          {/* FOOTER MESSAGE */}
          <div className="survey-message">
            <Leaf size={25} />
            <em>
              “Listening to our farmers today, for a stronger
              agri ecosystem tomorrow.”
            </em>

            <span>
              <Leaf size={17} />
              Agri Link Express
            </span>
          </div>

        </div>
      </main>

      <style>{`
        .survey-dashboard {
          min-height: 100vh;
          display: flex;
          background: #f7faf8;
          color: #17251f;
          font-family: Arial, sans-serif;
        }

        .survey-admin-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
}

.team-infination {
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border: 1px solid rgba(15, 59, 40, 0.10);
  border-radius: 18px;
  background: linear-gradient(135deg, #ffffff, #f4faf6);
  box-shadow: 0 8px 24px rgba(15, 59, 40, 0.06);
}

.team-infination-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.team-infination-content h3 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--forest-900);
  white-space: nowrap;
}

.team-infination-content p {
  margin: 0;
  font-size: 0.75rem;
  color: var(--ink-500);
  white-space: nowrap;
}

.admin-label {
  margin-left: 2px;
  font-size: 0.78rem;
  color: #69737d;
}

        .team-infination {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 18px 22px;
  border: 1px solid rgba(15, 59, 40, 0.1);
  border-radius: 18px;
  background: linear-gradient(135deg, #ffffff, #f4faf6);
  box-shadow: 0 10px 30px rgba(15, 59, 40, 0.07);
}

.team-infination-logo {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  background: #fff;
  border: 1px solid rgba(15, 59, 40, 0.08);
}

.team-infination-logo img {
  width: 54px;
  height: 54px;
  object-fit: contain;
  filter: brightness(0);
}

.team-infination-content {
  display: flex;
  flex-direction: column;
}

.team-label {
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--gold-600);
}

.team-infination-content h3 {
  margin: 3px 0 0;
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--forest-900);
}

.team-infination-content p {
  margin: 5px 0 0;
  font-size: 0.75rem;
  color: var(--ink-500);
}

        /* ================= BRAND LOGO ================= */

.survey-side-brand {
  height: 78px;
  width: 188px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 8px 14px;

  background: #ffffff;
  overflow: hidden;
}

.survey-brand-logo-box {
  width: 58px;
  height: 62px;
  min-width: 58px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.survey-brand-logo {
  width: 58px !important;
  height: 62px !important;

  max-width: none !important;
  max-height: none !important;

  object-fit: contain;

  display: block;

  /* Black logo */
  filter: brightness(0);

  /* Make sure the whole logo is visible */
  transform: scale(1.05);
}

/* ================= BRAND TEXT ================= */

.survey-brand-copy {
  min-width: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.survey-brand-copy strong {
  display: block;

  color: #123c2e;

  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: 14px;
  font-weight: 750;
  line-height: 1.15;

  white-space: nowrap;
}

.survey-brand-copy span {
  display: block;

  margin-top: 4px;

  color: #557065;

  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: 8px;
  line-height: 1.2;

  white-space: nowrap;
}

/* =========================================================
   SURVEY DASHBOARD BRAND TEXT
========================================================= */

.survey-brand-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.survey-brand-copy strong {
  display: block;

  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.025em;

  color: var(--forest-900);

  white-space: nowrap;
}

.survey-brand-copy span {
  display: block;

  margin-top: 5px;

  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: 8px;
  font-weight: 800;
  line-height: 1;

  letter-spacing: 0.15em;

  color: var(--gold-600);

  white-space: nowrap;
  text-transform: uppercase;
}
          /* =========================================================
   SIDEBAR BRAND
========================================================= */

.survey-side-brand {
  height: 78px;
  width: 200px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 14px;

  background: #ffffff;
  color: #123c2e;

  overflow: hidden;
}

.survey-brand-logo-box {
  width: 48px;
  height: 48px;
  min-width: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.survey-brand-logo {
  width: 48px !important;
  height: 48px !important;

  max-width: 48px !important;
  max-height: 48px !important;

  min-width: 48px;
  min-height: 48px;

  object-fit: contain;
  display: block;
}

.survey-brand-copy {
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.survey-brand-copy strong {
  display: block;

  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.15;
  font-weight: 750;

  color: #123c2e;

  white-space: nowrap;
}

.survey-brand-copy span {
  display: block;

  margin-top: 4px;

  font-family: Inter, "Segoe UI", Arial, sans-serif;
  font-size: 8px;
  line-height: 1.2;

  color: #4f6d60;

  white-space: nowrap;
}

        .survey-sidebar {
          width: 188px;
          min-height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          z-index: 20;
          color: white;
          background:
            linear-gradient(
              180deg,
              #123c2e,
              #0b3024
            );
        }

        .survey-side-brand {
          height: 78px;
          background: white;
          color: #123c2e;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 10px 14px;
        }

        .survey-brand-icon {
          color: #4d9c48;
        }

        .survey-side-brand strong {
          display: block;
          font-size: 13px;
        }

        .survey-side-brand span {
          display: block;
          font-size: 9px;
          letter-spacing: .08em;
        }

        .survey-side-nav {
          padding-top: 28px;
        }

        .survey-side-nav a {
          height: 58px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: rgba(255,255,255,.85);
          text-decoration: none;
          font-size: 13px;
        }

        .survey-side-nav a:hover,
        .survey-side-nav a.active {
          background: rgba(255,255,255,.12);
          border-left: 4px solid #54b96c;
          padding-left: 16px;
        }

        .survey-side-message {
          position: absolute;
          bottom: 35px;
          left: 22px;
          color: rgba(255,255,255,.9);
          font-family: Georgia, serif;
          font-size: 21px;
          line-height: 1.45;
        }

        .survey-main {
          width: calc(100% - 188px);
          margin-left: 188px;
        }

        .survey-topbar {
          height: 78px;
          background: white;
          border-bottom: 1px solid #e6ebe8;
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 0 22px;
        }

        .survey-top-search {
          width: min(480px, 45vw);
          margin: auto;
          height: 44px;
          background: #f5f7f8;
          border: 1px solid #e1e6e4;
          border-radius: 7px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 14px;
          color: #6b7480;
        }

        .survey-top-search input,
        .table-search input {
          border: none;
          outline: none;
          background: transparent;
          width: 100%;
          font-size: 14px;
        }

        .survey-bell {
          color: #1c2e28;
        }

        .survey-admin {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .survey-avatar {
          width: 43px;
          height: 43px;
          border-radius: 50%;
          background: #e5ebef;
          display: grid;
          place-items: center;
          color: #63727d;
        }

        .survey-admin strong,
        .survey-admin span {
          display: block;
        }

        .survey-admin strong {
          font-size: 14px;
        }

        .survey-admin div span {
          color: #69737d;
          font-size: 12px;
          margin-top: 4px;
        }

        .survey-content {
          padding: 22px;
        }

        .survey-heading {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          align-items: center;
          margin-bottom: 20px;
        }

        .survey-title-row {
          display: flex;
          align-items: center;
          gap: 13px;
          color: #09291f;
        }

        .survey-title-row h1 {
          margin: 0;
          font-size: 37px;
          letter-spacing: -.04em;
        }

        .survey-heading p {
          margin: 2px 0 0 49px;
          color: #65717b;
        }

        .survey-heading-actions {
          display: flex;
          gap: 12px;
        }

        .date-button,
        .export-button,
        .reset-button {
          height: 51px;
          border-radius: 6px;
          padding: 0 17px;
          display: flex;
          align-items: center;
          gap: 11px;
          cursor: pointer;
          font-size: 14px;
        }

        .date-button {
          background: white;
          border: 1px solid #dce3e0;
        }

        .export-button {
          background: #27814e;
          border: 1px solid #27814e;
          color: white;
          font-weight: 600;
        }

        .survey-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 17px;
        }

        .stat-box {
          min-height: 107px;
          border-radius: 8px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .stat-box.green {
          background: #eef9f1;
        }

        .stat-box.blue {
          background: #edf5ff;
        }

        .stat-box.yellow {
          background: #fff8e8;
        }

        .stat-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(100,190,115,.17);
          color: #173e2c;
        }

        .blue .stat-icon {
          color: #1466bf;
          background: #d9ebff;
        }

        .yellow .stat-icon {
          color: #8a5b11;
          background: #ffecbb;
        }

        .stat-box strong {
          font-size: 29px;
          display: block;
          color: #111;
        }

        .stat-box span {
          font-size: 14px;
        }

        .stat-sub {
          color: #68737c;
          margin-top: 2px;
        }

        .survey-filters {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1.35fr auto;
          gap: 18px;
          align-items: end;
          margin-bottom: 22px;
        }

        .filter label {
          display: block;
          font-size: 13px;
          margin-bottom: 7px;
        }

        .filter select {
          width: 100%;
          height: 39px;
          border: 1px solid #d9e0dd;
          background: white;
          border-radius: 5px;
          padding: 0 12px;
          outline: none;
        }

        .table-search {
          height: 39px;
          border: 1px solid #d9e0dd;
          background: white;
          border-radius: 5px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 12px;
          color: #66717a;
        }

        .reset-button {
          height: 39px;
          background: white;
          border: 1px solid #d9e0dd;
        }

        .response-table-wrapper {
          overflow-x: auto;
          background: white;
          border: 1px solid #dce4e0;
          border-radius: 7px;
        }

        .response-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 1050px;
          font-size: 13px;
        }

        .response-table th {
          text-align: left;
          background: #f7f8f8;
          padding: 13px 14px;
          font-weight: 600;
          white-space: nowrap;
        }

        .response-table td {
          padding: 10px 14px;
          border-top: 1px solid #edf0ef;
          white-space: nowrap;
        }

        .respondent-name {
          display: flex;
          align-items: center;
          gap: 9px;
        }

        .respondent-name span {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e5ebef;
          display: grid;
          place-items: center;
          color: #61717c;
        }

        .type-badge,
        .yes-badge {
          display: inline-block;
          padding: 6px 14px;
          border-radius: 20px;
          font-weight: 600;
        }

        .type-badge.farmer {
          color: #19712f;
          background: #dff4e1;
        }

        .type-badge.buyer {
          color: #1266bf;
          background: #dcecff;
        }

        .yes-badge {
          color: #19712f;
          background: #dff4e1;
        }

        .view-button {
          border: 1px solid #dce3e0;
          background: white;
          border-radius: 5px;
          padding: 6px 11px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .no-results {
          text-align: center;
          padding: 30px !important;
          color: #777;
        }

        .survey-charts {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 15px;
          margin-top: 18px;
        }

        .chart-card {
          min-height: 230px;
          padding: 15px;
          background: white;
          border: 1px solid #dfe5e2;
          border-radius: 7px;
        }

        .chart-card h2 {
          margin: 0 0 16px;
          font-size: 18px;
        }

        .donut-area {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .donut {
          width: 135px;
          height: 135px;
          border-radius: 50%;
          background:
            conic-gradient(
              #3b9760 0 75%,
              #438ce8 75% 92%,
              #f2c21b 92% 100%
            );
          display: grid;
          place-items: center;
        }

        .donut::before {
          content: "";
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: white;
          position: absolute;
        }

        .donut div {
          position: relative;
          z-index: 1;
          text-align: center;
        }

        .donut strong,
        .donut span {
          display: block;
        }

        .donut strong {
          font-size: 22px;
        }

        .donut span {
          font-size: 12px;
          color: #555;
        }

        .legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 110px;
        }

        .legend-dot {
          width: 13px;
          height: 13px;
          border-radius: 50%;
        }

        .legend-dot.green {
          background: #3b9760;
        }

        .legend-dot.blue {
          background: #438ce8;
        }

        .legend-dot.yellow {
          background: #f2c21b;
        }

        .legend-item span:last-child {
          margin-left: auto;
        }

        .bar-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .bar-row {
          display: grid;
          grid-template-columns: 90px 1fr 35px;
          align-items: center;
          gap: 10px;
          font-size: 13px;
        }

        .bar-track {
          height: 21px;
          border-radius: 4px;
          background: #edf1ef;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: #58a973;
          border-radius: 4px;
        }

        .bar-list.orange .bar-fill {
          background: #f5a12b;
        }

        .survey-message {
          min-height: 52px;
          margin-top: 17px;
          padding: 0 20px;
          border-radius: 7px;
          background: #eaf7ed;
          display: flex;
          align-items: center;
          gap: 15px;
          color: #1d6138;
        }

        .survey-message em {
          color: #26382d;
          flex: 1;
        }

        .survey-message span {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .survey-mobile-menu {
          display: none;
        }

        

        @media (max-width: 1100px) {
          .survey-stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .survey-filters {
            grid-template-columns: repeat(2, 1fr);
          }

          .survey-charts {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 800px) {
          .survey-sidebar {
            display: none;
          }

          .survey-main {
            width: 100%;
            margin-left: 0;
          }

          .survey-mobile-menu {
            display: block;
          }

          .survey-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .survey-heading-actions {
            width: 100%;
          }

          .date-button,
          .export-button {
            flex: 1;
          }

          .survey-title-row h1 {
            font-size: 29px;
          }
        }

        @media (max-width: 560px) {
          .survey-topbar {
            padding: 0 12px;
            gap: 10px;
          }

          .survey-top-search {
            width: auto;
            flex: 1;
          }

          .survey-admin div {
            display: none;
          }

          .survey-content {
            padding: 14px;
          }

          .survey-stats,
          .survey-filters {
            grid-template-columns: 1fr;
          }

          .survey-heading-actions {
            flex-direction: column;
          }

          .survey-message {
            padding: 12px;
            align-items: flex-start;
            flex-wrap: wrap;
          }
            
        }
      `
      }</style>
    </div>
  );
}

function Stat({ icon, value, label, sub, className }) {
  return (
    <div className={`stat-box ${className}`}>
      <span className="stat-icon">{icon}</span>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
        {sub && <span className="stat-sub">({sub})</span>}
      </div>
    </div>
  );
}

function Filter({
  label,
  value,
  setValue,
  options,
}) {
  return (
    <div className="filter">
      <label>{label}</label>

      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => (
          <option key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function Legend({ color, label, value }) {
  return (
    <div className="legend-item">
      <span className={`legend-dot ${color}`} />
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function Bar({ label, value, orange }) {
  return (
    <div className="bar-row">
      <span>{label}</span>

      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: `${value}%` }}
        />
      </div>

      <span>{value}%</span>
    </div>
  );
}
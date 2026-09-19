import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProblemSection from "./sections/ProblemSection";
import HowItWorks from "./sections/HowItWorks";
import AICore from "./sections/AICore";
import ImpactSection from "./sections/ImpactSection";
import DualCTA from "./sections/DualCTA";
import Footer from "./sections/Footer";

import SurveyResponses from "./pages/SurveyResponses";

export default function App() {
  const [showSurvey, setShowSurvey] = useState(
    window.location.hash === "#survey"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setShowSurvey(window.location.hash === "#survey");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  if (showSurvey) {
    return <SurveyResponses />;
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <AICore />
        <ImpactSection />
        <DualCTA />
      </main>

      <Footer />
    </>
  );
}
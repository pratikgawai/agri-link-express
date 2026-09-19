import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import ProblemSection from "./sections/ProblemSection";
import HowItWorks from "./sections/HowItWorks";
import AICore from "./sections/AICore";
import ImpactSection from "./sections/ImpactSection";
import DualCTA from "./sections/DualCTA";
import Footer from "./sections/Footer";

export default function App() {
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

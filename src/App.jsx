import { useRef } from "react";
import Hero from "./components/Hero";
import QuickIcons from "./components/QuickIcons";
import FloatingContacts from "./components/FloatingContacts";
import About from "./components/About";
import Services from "./components/Services";
import Values from "./components/Values";
import InfoSection from "./components/InfoSection";
import QrSection from "./components/QrSection";
import Footer from "./components/Footer";
import StickyBar from "./components/StickyBar";
import AccessibilityPanel from "./components/AccessibilityPanel";

export default function App() {
  const a11yDialogRef = useRef(null);

  return (
    <>
      <a className="skip" href="#main">
        דילוג לתוכן המרכזי
      </a>

      <div className="wrap" id="main">
        <Hero />
        <QuickIcons />
        <About />
        <Services />
        <Values />
        <InfoSection />
        <QrSection />
        <Footer onOpenA11y={() => a11yDialogRef.current?.showModal()} />
      </div>

      <StickyBar />
      <FloatingContacts />
      <AccessibilityPanel ref={a11yDialogRef} />
    </>
  );
}

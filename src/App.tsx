import { useState } from "react";
import LandingPage from "../src/pages/LandingPage.tsx";
import Background from "../src/components/Background.tsx";
import { AnimatePresence } from "framer-motion";
import EnvelopePage from "../src/pages/EnvelopePage.tsx";

//define page types
type pages = "landing" | "envelope";

const App = () => {
  const [currentPage, setCurrentPage] = useState<pages>("landing");

  return (
    <>
      <div className="relative w-screen h-dvh bg-pink-50 overflow-hidden flex flex-col items-center justify-center font-sans">
        <div className="absolute inset-0 bg-linear-to-br from-pink-100 via-pink-50 to-pink-200 opacity-80" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(255,204,229,0)_70%)] pointer-events-none" />
        <Background />
        <AnimatePresence mode="wait">
          {currentPage === "landing" && (
            <LandingPage
              onNext={() => {
                setCurrentPage("envelope");
              }}
            />
          )}
          {currentPage === "envelope" && <EnvelopePage />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default App;

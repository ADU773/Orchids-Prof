"use client";

import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScroll>
      <LoadingScreen onComplete={() => setLoading(false)} />
      
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <Navbar />
            <main className="bg-[#050505]">
              <HeroSection />
              <section id="about">
                <AboutSection />
              </section>
              <section id="features">
                <FeaturesSection />
              </section>
              <section id="work">
                <ShowcaseSection />
              </section>
              <CTASection />
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { CredentialsAndCVSection } from './components/CredentialsAndCVSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ProjectDetailView } from './components/ProjectDetailView';
import { ProjectsSection } from './components/ProjectsSection';
import { ThoughtLeadershipSection } from './components/ThoughtLeadershipSection';

export default function App() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#1E2420]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#132A1E] focus:text-[#FAF9F5] focus:rounded-md focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar onNavigateHome={() => setSelectedProjectIndex(null)} />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          {selectedProjectIndex === null ? (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Hero />
              <AboutSection />
              <ExpertiseSection />
              <ProjectsSection onSelectProject={(index) => setSelectedProjectIndex(index)} />
              <ExperienceSection />
              <ThoughtLeadershipSection />
              <CredentialsAndCVSection />
              <GallerySection />
              <ContactSection />
            </motion.div>
          ) : (
            <motion.div
              key={`project-detail-${selectedProjectIndex}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectDetailView
                projectIndex={selectedProjectIndex}
                onBack={() => setSelectedProjectIndex(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer onNavigateHome={() => setSelectedProjectIndex(null)} />
    </div>
  );
}

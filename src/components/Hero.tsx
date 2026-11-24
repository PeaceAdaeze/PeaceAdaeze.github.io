import { useState } from 'react';
import { ArrowRight, Check, Download, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { CV_DOWNLOAD_FILENAME, CV_PDF_URL, PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function Hero() {
  const [downloadedNotice, setDownloadedNotice] = useState(false);

  const handleDownloadClick = () => {
    setDownloadedNotice(true);
    setTimeout(() => setDownloadedNotice(false), 3200);
  };

  return (
    <section
      id="top"
      className="relative bg-[#FAF9F5] pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-[#132A1E]/10"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Direct CV Identity, Title Line, Summary & 3 CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center py-2 lg:py-6"
          >
            <p className="font-mono text-xs sm:text-[13px] font-medium tracking-wide text-[#1F5137] mb-4">
              {PROFILE.cvTitleLine}
            </p>

            <h1 className="font-serif text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[1.06] font-semibold tracking-tight text-[#132A1E] mb-4 max-w-2xl">
              {PROFILE.displayNameWithCredential}
            </h1>

            <h2 className="font-serif italic text-xl sm:text-2xl text-[#1F5137] leading-snug mb-6 max-w-xl">
              {PROFILE.headline}
            </h2>

            <p className="text-base sm:text-[17px] leading-[1.72] text-[#3A473F] max-w-[60ch] mb-8 text-justify">
              {PROFILE.heroSummary}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
              >
                <span>View Projects</span>
                <ArrowRight
                  className="w-4 h-4 text-[#E4C27A] transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href={CV_PDF_URL}
                download={CV_DOWNLOAD_FILENAME}
                onClick={handleDownloadClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#132A1E] bg-white border border-[#132A1E]/25 hover:border-[#132A1E] hover:bg-[#EEF2EC]/50 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
              >
                <Download className="w-4 h-4 text-[#1F5137]" aria-hidden="true" />
                <span>Download CV</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#132A1E] border border-[#132A1E]/15 hover:border-[#1F5137] hover:text-[#1F5137] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Contact Me</span>
              </a>
            </div>

            {downloadedNotice && (
              <p
                role="status"
                className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-[#1F5137]"
              >
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Downloading {CV_DOWNLOAD_FILENAME}</span>
              </p>
            )}
          </motion.div>

          {/* Right Column: Sleek Brand-Framed Fieldwork Hero Visual (Second Attached Photo) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full min-h-[420px] sm:min-h-[490px] lg:min-h-[540px] bg-[#132A1E] p-3 sm:p-4 rounded-xl border border-[#132A1E]/15 flex flex-col">
              <div className="relative flex-1 overflow-hidden rounded-lg border border-[#C69C49]/35">
                <ResilientImage
                  src={PROFILE.heroImage}
                  alt={PROFILE.heroImageAlt}
                  loading="eager"
                  objectPosition="center 20%"
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D1E15]/90 via-[#0D1E15]/45 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-[#FAF9F5]">
                  <p className="text-[11px] font-mono tracking-wide text-[#E4C27A] mb-1">
                    Protected Cultivation · Field Supervision
                  </p>
                  <p className="text-sm font-medium leading-snug text-[#FAF9F5]">
                    Trellised pepper canopy management inside a commercial greenhouse
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

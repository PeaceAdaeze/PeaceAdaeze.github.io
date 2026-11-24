import { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle2, Layers, Maximize2, Sprout, X } from 'lucide-react';
import { PROJECT_CASE_STUDIES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectDetailViewProps {
  projectIndex: number;
  onBack: () => void;
}

export function ProjectDetailView({ projectIndex, onBack }: ProjectDetailViewProps) {
  const study = PROJECT_CASE_STUDIES[projectIndex];
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string; title: string } | null>(
    null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [projectIndex]);

  useEffect(() => {
    if (!zoomedImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomedImage(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomedImage]);

  if (!study) return null;

  return (
    <section className="py-10 lg:py-16 bg-[#FAF9F5] min-h-[80vh]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Back Navigation */}
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1F5137] hover:text-[#132A1E] mb-8 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137]"
        >
          <ArrowLeft
            className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          <span>Back to Portfolio</span>
        </button>

        {/* Project Title Header */}
        <div className="mb-10 pb-8 border-b border-[#132A1E]/12">
          <p className="font-mono text-xs text-[#1F5137] mb-3">
            Project {String(projectIndex + 1).padStart(2, '0')} · {study.subtitle}
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-semibold text-[#132A1E] leading-[1.1] mb-3 max-w-4xl">
            {study.title}
          </h1>
          <p className="text-sm text-[#4B5850]">
            {study.organization} <span aria-hidden="true">·</span> {study.location}{' '}
            <span aria-hidden="true">·</span>{' '}
            <span className="font-mono tabular-nums">{study.period}</span>
          </p>
        </div>

        {/* 12-Column Detail Grid (Image Left + Specifications Right, mirroring reference layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          {/* Left 7 Columns: Primary Field Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-xl overflow-hidden bg-[#E4EAE0] border border-[#132A1E]/15 group">
              <div className="aspect-[16/10] w-full">
                <ResilientImage
                  src={study.image}
                  alt={study.imageAlt}
                  objectPosition={study.objectPosition}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <button
                type="button"
                onClick={() =>
                  setZoomedImage({
                    src: study.image,
                    alt: study.imageAlt,
                    title: study.title,
                  })
                }
                aria-label="View photograph fullscreen"
                className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#132A1E]/90 hover:bg-[#1F5137] text-[#FAF9F5] text-xs font-semibold transition-colors cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Inspect Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Right 5 Columns: Technical & Agronomic Specifications */}
          <div className="lg:col-span-5 bg-white rounded-xl border border-[#132A1E]/12 p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sprout className="w-4 h-4 text-[#1F5137]" aria-hidden="true" />
                <h2 className="font-serif text-2xl font-semibold text-[#132A1E]">
                  Agronomic Specifications
                </h2>
              </div>
              <p className="text-sm leading-[1.7] text-[#3A473F] text-justify">{study.summary}</p>
            </div>

            <div className="pt-5 border-t border-[#132A1E]/10">
              <p className="text-xs font-semibold tracking-wider text-[#4B5850] mb-3">
                Site & Production Parameters
              </p>
              <div className="divide-y divide-[#132A1E]/8">
                {study.specs.map((spec) => (
                  <div key={spec.label} className="py-2.5 flex justify-between gap-4 text-xs">
                    <span className="font-mono text-[#4B5850] shrink-0">{spec.label}</span>
                    <span className="font-semibold text-[#132A1E] text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#132A1E]/10">
              <p className="text-xs font-semibold tracking-wider text-[#4B5850] mb-3">
                Methods & Systems Applied
              </p>
              <ul className="space-y-1.5 text-xs text-[#132A1E] font-medium">
                {study.methodsApplied.map((method) => (
                  <li key={method} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C69C49] shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* In-Depth Case Study Narrative */}
        <div className="bg-white rounded-xl border border-[#132A1E]/12 p-6 sm:p-8 mb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Layers className="w-5 h-5 text-[#1F5137]" aria-hidden="true" />
            <h2 className="font-serif text-2xl font-semibold text-[#132A1E]">
              In-Depth Field Case Study
            </h2>
          </div>
          <p className="text-[15px] sm:text-base leading-[1.75] text-[#2F3A33] max-w-[78ch] text-justify">
            {study.extendedOverview}
          </p>
        </div>

        {/* Role Responsibilities & Documented Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          <div className="lg:col-span-7 bg-white rounded-xl border border-[#132A1E]/12 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[#132A1E] mb-4">
              Responsibilities & Execution
            </h2>
            <ul className="space-y-3">
              {study.roleResponsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-[#2F3A33] text-justify">
                  <CheckCircle2
                    className="w-4 h-4 text-[#1F5137] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 bg-[#132A1E] text-[#FAF9F5] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#E4C27A] mb-3">
                Verified Field Outcome
              </p>
              <p className="font-serif text-xl sm:text-2xl leading-relaxed text-[#FAF9F5] text-justify">
                {study.outcome}
              </p>
            </div>
            <p className="font-mono tabular-nums text-xs text-[#CBD6CE] mt-6 pt-4 border-t border-[#FAF9F5]/15">
              {study.scaleOrYield}
            </p>
          </div>
        </div>

        {/* Field Media Strip */}
        {study.gallery.length > 0 && (
          <div className="bg-[#EEF2EC]/70 rounded-xl border border-[#132A1E]/12 p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-[#132A1E] mb-5">
              Field Documentation Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {study.gallery.map((media) => (
                <button
                  key={media.label}
                  type="button"
                  onClick={() =>
                    setZoomedImage({
                      src: media.src,
                      alt: media.alt,
                      title: media.label,
                    })
                  }
                  className="group text-left bg-white rounded-lg overflow-hidden border border-[#132A1E]/12 hover:border-[#132A1E]/35 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137]"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#E4EAE0]">
                    <ResilientImage
                      src={media.src}
                      alt={media.alt}
                      objectPosition="center 20%"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="text-xs font-semibold text-[#132A1E]">{media.label}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {zoomedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fullscreen project photograph"
          onClick={() => setZoomedImage(null)}
          className="fixed inset-0 z-50 bg-[#0A1710]/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6"
        >
          <button
            type="button"
            onClick={() => setZoomedImage(null)}
            aria-label="Close fullscreen image"
            className="self-end mb-3 w-10 h-10 rounded-md bg-[#FAF9F5]/10 hover:bg-[#FAF9F5]/20 text-[#FAF9F5] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={zoomedImage.src}
            alt={zoomedImage.alt}
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-full object-contain rounded-lg"
          />
          <p className="text-sm text-[#FAF9F5] mt-3 text-center">{zoomedImage.title}</p>
        </div>
      )}
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { PROJECT_CASE_STUDIES } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface ProjectsSectionProps {
  onSelectProject: (index: number) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 lg:py-24 bg-[#EEF2EC]/55 border-y border-[#132A1E]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
              03. Field-Tested Greenhouse & Farm Projects
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15]">
              Featured Case Studies & Commercial Engagements
            </h2>
          </div>
          <p className="text-sm text-[#4B5850] max-w-sm">
            Select any engagement to inspect full agronomic specifications, responsibilities, and field documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PROJECT_CASE_STUDIES.map((study, index) => (
            <article
              key={study.id}
              onClick={() => onSelectProject(index)}
              className="group bg-white rounded-xl border border-[#132A1E]/12 overflow-hidden flex flex-col cursor-pointer transition-colors duration-200 hover:border-[#132A1E]/40"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E4EAE0]">
                <ResilientImage
                  src={study.image}
                  alt={study.imageAlt}
                  objectPosition={study.objectPosition}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 px-2.5 py-1 rounded bg-[#132A1E]/90 text-[#FAF9F5] font-mono tabular-nums text-xs">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#4B5850] mb-2.5">
                  <span className="font-semibold text-[#1F5137]">{study.organization}</span>
                  <span aria-hidden="true">·</span>
                  <span>{study.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{study.period}</span>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#132A1E] group-hover:text-[#1F5137] transition-colors leading-snug mb-3">
                  {study.title}
                </h3>

                <p className="text-sm leading-[1.68] text-[#3A473F] mb-5 flex-1 text-justify">
                  {study.summary}
                </p>

                <div className="text-xs text-[#4B5850] pb-4 mb-4 border-b border-[#132A1E]/10 flex flex-wrap gap-x-2 gap-y-1">
                  <span className="font-medium text-[#132A1E]">{study.cropFocus}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono tabular-nums">{study.scaleOrYield}</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(index);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#132A1E] bg-[#EEF2EC] group-hover:bg-[#132A1E] group-hover:text-[#FAF9F5] rounded-md transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137]"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

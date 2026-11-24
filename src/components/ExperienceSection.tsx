import { useState } from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

type FilterCategory = 'all' | 'agronomy' | 'leadership';

export function ExperienceSection() {
  const [filter, setFilter] = useState<FilterCategory>('all');

  const filteredItems = EXPERIENCE_TIMELINE.filter((item) =>
    filter === 'all' ? true : item.category === filter
  );

  return (
    <section id="experience" className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
              04. Professional Experience
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15]">
              A Track Record of Hands-On Agronomy & Operational Leadership
            </h2>
          </div>

          {/* Interactive Segmented Filter Control */}
          <div
            role="group"
            aria-label="Filter experience by focus area"
            className="inline-flex flex-wrap items-center gap-1 max-w-full p-1 bg-[#E9EDE6] rounded-lg border border-[#132A1E]/10 self-start"
          >
            {(
              [
                { id: 'all', label: 'All Roles' },
                { id: 'agronomy', label: 'Agronomy & Greenhouse' },
                { id: 'leadership', label: 'Leadership & Strategy' },
              ] as const
            ).map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137] ${
                    active
                      ? 'bg-[#132A1E] text-[#FAF9F5]'
                      : 'text-[#3A473F] hover:text-[#132A1E]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="divide-y divide-[#132A1E]/12 border-y border-[#132A1E]/12">
          {filteredItems.map((exp) => (
            <article
              key={exp.id}
              className="py-8 lg:py-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start"
            >
              {/* Left Column: Organization, Period, Location */}
              <div className="lg:col-span-4 space-y-1.5">
                <p className="font-mono tabular-nums text-xs font-medium text-[#1F5137]">
                  {exp.period}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#132A1E] leading-snug">
                  {exp.role}
                </h3>
                <p className="text-sm font-medium text-[#3A473F]">
                  {exp.organization} <span aria-hidden="true">·</span> {exp.location}
                </p>
              </div>

              {/* Right Column: Verified Responsibilities & Contributions */}
              <div className="lg:col-span-8">
                <ul className="space-y-2.5">
                  {exp.highlights.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="text-[15px] leading-[1.68] text-[#2F3A33] flex items-start gap-3 text-justify"
                    >
                      <span
                        className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#C69C49] shrink-0"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

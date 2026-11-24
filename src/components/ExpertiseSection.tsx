import { Droplets, Sprout, TrendingUp } from 'lucide-react';
import { COMPETENCY_PILLARS } from '../data/portfolioData';

const PILLAR_ICONS: Record<string, typeof Sprout> = {
  agronomy: Sprout,
  greenhouse: Droplets,
  agribusiness: TrendingUp,
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 lg:py-24 bg-[#EEF2EC]/55 border-y border-[#132A1E]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
            02. Core Competencies & Technical Systems
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15] mb-4">
            Multidisciplinary Mastery Across Plant Science, Protected Infrastructure, and Strategy
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#3A473F] text-justify">
            Each pillar reflects verified field execution—from seed germination and automated fertigation mapping to commercial risk mitigation and farmer capacity building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMPETENCY_PILLARS.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.id] ?? Sprout;
            return (
              <article
                key={pillar.id}
                className="bg-white rounded-xl border border-[#132A1E]/12 p-6 sm:p-8 flex flex-col"
              >
                <div className="flex items-center justify-between gap-4 pb-5 mb-6 border-b border-[#132A1E]/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-[#132A1E]">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="font-mono tabular-nums text-xs text-[#4B5850]">
                    {pillar.index}
                  </span>
                </div>

                <p className="text-sm leading-[1.65] text-[#4B5850] mb-6 text-justify">{pillar.summary}</p>

                <ul className="space-y-4 mt-auto">
                  {pillar.items.map((skill) => (
                    <li
                      key={skill.name}
                      className="pt-3.5 border-t border-[#132A1E]/8 first:pt-0 first:border-t-0"
                    >
                      <p className="text-sm font-semibold text-[#132A1E] mb-1">{skill.name}</p>
                      <p className="text-[13px] leading-[1.6] text-[#4B5850] text-justify">{skill.detail}</p>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

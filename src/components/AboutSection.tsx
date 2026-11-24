import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Droplets, Sprout, TrendingUp } from 'lucide-react';
import { useInView } from 'motion/react';
import {
  ABOUT_NARRATIVE,
  HERO_METRICS,
  PROFILE,
  SERVICE_PILLARS,
  WORKFLOW_STEPS,
} from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(target);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const durationMs = 1100;
    const stepMs = 16;
    const increment = target / (durationMs / stepMs);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepMs);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span className="font-mono tabular-nums">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const SERVICE_ICONS = [Sprout, Droplets, TrendingUp];

export function AboutSection() {
  const metricsRef = useRef<HTMLDivElement | null>(null);
  const metricsInView = useInView(metricsRef, { once: true, margin: '-40px' });

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Top Spread: Portrait + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          <div className="lg:col-span-4">
            <div className="bg-[#EEF2EC] p-3 rounded-xl border border-[#132A1E]/12">
              <div className="aspect-square overflow-hidden rounded-lg bg-[#E4EAE0]">
                <ResilientImage
                  src={PROFILE.portraitImage}
                  alt={PROFILE.portraitImageAlt}
                  objectPosition="center 15%"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-3.5 pb-1 px-1 flex items-center justify-between gap-3 text-xs text-[#4B5850]">
                <span className="font-semibold text-[#132A1E]">{PROFILE.fullName}</span>
                <span className="font-mono tabular-nums">6 Completed Cycles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
              01. About Me
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-semibold text-[#132A1E] leading-[1.15] mb-6">
              {ABOUT_NARRATIVE.leadPrefix}{' '}
              <span className="italic text-[#1F5137]">{ABOUT_NARRATIVE.leadHighlight}</span>
            </h2>

            <div className="space-y-4 text-[15px] sm:text-base leading-[1.75] text-[#2F3A33] max-w-[70ch] text-justify">
              {ABOUT_NARRATIVE.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* End-to-End Agronomic Ownership Flow (Inspired by reference structure) */}
        <div className="mb-14 pt-10 border-t border-[#132A1E]/12">
          <p className="text-xs font-semibold tracking-wider text-[#4B5850] mb-4">
            End-to-End Crop Cycle Ownership
          </p>
          <div className="flex flex-wrap items-center gap-2.5">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={step} className="flex items-center gap-2.5">
                <span className="px-4 py-2.5 bg-[#EEF2EC] border border-[#132A1E]/15 rounded-md text-xs sm:text-sm font-semibold text-[#132A1E] whitespace-nowrap">
                  <span className="font-mono text-[#1F5137] mr-2">0{index + 1}</span>
                  {step}
                </span>
                {index < WORKFLOW_STEPS.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#C69C49] shrink-0" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 4-Column Quantitative Stat Grid */}
        <div
          ref={metricsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14"
        >
          {HERO_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="bg-white p-6 rounded-xl border border-[#132A1E]/12 flex flex-col justify-between"
            >
              <p className="text-3xl sm:text-4xl font-semibold text-[#132A1E] tracking-tight mb-2">
                <AnimatedCounter
                  target={metric.target}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  inView={metricsInView}
                />
              </p>
              <div>
                <p className="text-sm font-semibold text-[#1F5137] mb-1">{metric.label}</p>
                <p className="text-xs leading-relaxed text-[#4B5850]">{metric.context}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Core Practice Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICE_PILLARS.map((pillar, idx) => {
            const Icon = SERVICE_ICONS[idx] ?? Sprout;
            return (
              <div
                key={pillar.id}
                className="bg-[#EEF2EC]/65 p-6 sm:p-7 rounded-xl border border-[#132A1E]/12"
              >
                <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#132A1E] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-[1.68] text-[#3A473F] text-justify">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { BookOpen, Mic, Tv } from 'lucide-react';
import {
  DIGITAL_REACH,
  INTERNATIONAL_MEDIA,
  PUBLICATIONS,
  SPEAKING_ENGAGEMENTS,
} from '../data/portfolioData';

export function ThoughtLeadershipSection() {
  return (
    <section id="leadership" className="py-16 lg:py-24 bg-[#132A1E] text-[#FAF9F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#E4C27A] mb-3">
            05. Influence, Publications & Global Advocacy
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#FAF9F5] leading-[1.15] mb-4">
            Advancing Modern African Agribusiness Through Media, Authorship, and Mentorship
          </h2>
          <p className="text-[15px] leading-[1.7] text-[#CBD6CE] text-justify">
            Translating technical greenhouse experience into widely accessible books, conference keynotes, and digital education for farmers, students, and agricultural investors.
          </p>
        </div>

        {/* Top Spotlight: International Media Feature + Digital Reach */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-12">
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#1A3828] border border-[#FAF9F5]/12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#C69C49]/15 border border-[#C69C49]/35 text-[#E4C27A] flex items-center justify-center">
                  <Tv className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#E4C27A] font-medium">International Media Feature</p>
                  <h3 className="font-serif text-2xl font-semibold text-[#FAF9F5]">
                    {INTERNATIONAL_MEDIA.outlet}
                  </h3>
                </div>
              </div>
              <p className="text-xs font-mono text-[#CBD6CE] mb-3">{INTERNATIONAL_MEDIA.role}</p>
              <blockquote className="font-serif italic text-xl sm:text-2xl leading-relaxed text-[#FAF9F5]">
                “{INTERNATIONAL_MEDIA.topic}”
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {DIGITAL_REACH.map((item) => (
              <div
                key={item.platform}
                className="p-5 sm:p-6 rounded-xl bg-[#1A3828]/70 border border-[#FAF9F5]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <p className="text-xs font-medium text-[#E4C27A]">{item.platform}</p>
                  <p className="font-mono tabular-nums text-xl font-semibold text-[#FAF9F5]">
                    {item.metric}
                  </p>
                </div>
                <p className="text-xs sm:text-[13px] leading-relaxed text-[#CBD6CE] sm:max-w-xs text-justify">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom 2-Column Split: Speaking Engagements & Published Books */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-10 border-t border-[#FAF9F5]/15">
          {/* Speaking Engagements */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-6">
              <Mic className="w-4 h-4 text-[#E4C27A]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-[#FAF9F5]">
                Speaking Engagements & Conferences
              </h3>
            </div>
            <div className="divide-y divide-[#FAF9F5]/12 border-y border-[#FAF9F5]/12">
              {SPEAKING_ENGAGEMENTS.map((item) => (
                <div key={item.event} className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="space-y-0.5">
                    <p className="text-sm font-semibold text-[#FAF9F5]">{item.event}</p>
                    <p className="text-xs text-[#E4C27A]">{item.role}</p>
                  </div>
                  <p className="text-sm text-[#CBD6CE] sm:text-right sm:max-w-md">
                    “{item.topic}”
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Published Books */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-6">
              <BookOpen className="w-4 h-4 text-[#E4C27A]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-[#FAF9F5]">
                Published Agribusiness Books
              </h3>
            </div>
            <div className="space-y-3.5">
              {PUBLICATIONS.map((book, idx) => (
                <div
                  key={book.title}
                  className="p-4 sm:p-5 rounded-lg bg-[#1A3828]/80 border border-[#FAF9F5]/12 flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="font-serif text-xl font-semibold text-[#FAF9F5] leading-snug mb-1">
                      {book.title}
                    </p>
                    <p className="text-xs text-[#CBD6CE]">{book.citation}</p>
                  </div>
                  <span className="font-mono tabular-nums text-xs text-[#E4C27A] shrink-0">
                    0{idx + 1} · {book.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from 'react';
import { Award, Download, Eye, FileText, GraduationCap, X } from 'lucide-react';
import {
  CERTIFICATIONS,
  CV_DOWNLOAD_FILENAME,
  CV_PDF_URL,
  EDUCATION_HISTORY,
  PROFILE,
} from '../data/portfolioData';

export function CredentialsAndCVSection() {
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setPreviewOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [previewOpen]);

  return (
    <section id="credentials" className="py-16 lg:py-24 bg-[#FAF9F5] border-b border-[#132A1E]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
            06. Education, Certifications & Full Resume
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15]">
            Academic Rigor & International Development Credentials
          </h2>
        </div>

        {/* Two-Column Education & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
          {/* Education Timeline */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-6">
              <GraduationCap className="w-5 h-5 text-[#1F5137]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-[#132A1E]">
                Academic Qualifications
              </h3>
            </div>
            <div className="divide-y divide-[#132A1E]/12 border-y border-[#132A1E]/12">
              {EDUCATION_HISTORY.map((edu) => (
                <div key={edu.credential} className="py-4 flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-[#132A1E]">{edu.credential}</p>
                    <p className="text-[13px] text-[#4B5850] mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="font-mono tabular-nums text-xs font-medium text-[#1F5137]">
                      {edu.date}
                    </p>
                    {edu.status && (
                      <p className="text-[11px] text-[#4B5850] mt-0.5">{edu.status}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* International Certifications */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-6">
              <Award className="w-5 h-5 text-[#1F5137]" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-semibold text-[#132A1E]">
                Professional Certifications & Training
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-5 rounded-xl bg-white border border-[#132A1E]/12 flex flex-col justify-between"
                >
                  <p className="text-sm font-semibold text-[#132A1E] leading-snug mb-2">
                    {cert.title}
                  </p>
                  <p className="text-xs text-[#4B5850] leading-relaxed">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated Full Resume PDF Download Section */}
        <div
          id="resume"
          className="rounded-xl bg-[#EEF2EC] border border-[#132A1E]/15 p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-12 h-12 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-1">
                Curriculum Vitae · Official PDF Document
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#132A1E] mb-2">
                Download Full Resume — {PROFILE.fullName}
              </h3>
              <p className="text-sm leading-relaxed text-[#3A473F] text-justify">
                Includes complete employment history, commercial greenhouse yield benchmarks, speaking engagements, 2025 publications, academic records, and international certifications. References available upon request.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={CV_PDF_URL}
              download={CV_DOWNLOAD_FILENAME}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
            >
              <Download className="w-4 h-4 text-[#E4C27A]" aria-hidden="true" />
              <span>Download Resume (PDF)</span>
            </a>

            <button
              type="button"
              onClick={() => setPreviewOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#132A1E] bg-white border border-[#132A1E]/20 hover:border-[#132A1E] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137]"
            >
              <Eye className="w-4 h-4 text-[#1F5137]" aria-hidden="true" />
              <span>Preview PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Inline PDF Preview Modal */}
      {previewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Resume PDF Preview"
          className="fixed inset-0 z-50 bg-[#0D1E15]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setPreviewOpen(false)}
        >
          <div
            className="bg-[#FAF9F5] rounded-xl border border-[#132A1E]/25 max-w-4xl w-full h-[88vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-[#132A1E]/12 flex items-center justify-between gap-4 bg-white">
              <p className="text-sm font-semibold text-[#132A1E] truncate">
                {CV_DOWNLOAD_FILENAME}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={CV_PDF_URL}
                  download={CV_DOWNLOAD_FILENAME}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors"
                >
                  <Download className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Download</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewOpen(false)}
                  aria-label="Close resume preview"
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md text-[#132A1E] hover:bg-[#132A1E]/10 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <iframe
              src={CV_PDF_URL}
              title="Peace Adaeze Anyaeriuba Curriculum Vitae PDF"
              className="w-full flex-1 bg-[#E9EDE6]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

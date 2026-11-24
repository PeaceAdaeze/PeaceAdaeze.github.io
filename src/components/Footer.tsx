import { CV_DOWNLOAD_FILENAME, CV_PDF_URL, PROFILE } from '../data/portfolioData';

interface FooterProps {
  onNavigateHome?: () => void;
}

export function Footer({ onNavigateHome }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => {
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  };

  return (
    <footer className="bg-[#132A1E] text-[#FAF9F5] border-t border-[#FAF9F5]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#FAF9F5]/15">
          <div className="md:col-span-5 space-y-2.5">
            <p className="font-serif text-2xl font-semibold text-[#FAF9F5]">
              {PROFILE.fullName}
            </p>
            <p className="text-xs text-[#E4C27A]">
              Senior Agronomist · Greenhouse Consultant · Agricultural Monetisation & Agribusiness Strategist
            </p>
            <p className="text-sm leading-relaxed text-[#CBD6CE] max-w-sm pt-2">
              Committed to sustainable protected-environment agriculture, farm monetisation, practical farmer education, and commercially viable food systems.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs font-semibold tracking-wider text-[#E4C27A]">Navigation</p>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm text-[#CBD6CE]">
              <li>
                <a href="#about" onClick={() => handleNav('#about')} className="hover:text-[#FAF9F5] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#expertise" onClick={() => handleNav('#expertise')} className="hover:text-[#FAF9F5] transition-colors">
                  Competencies
                </a>
              </li>
              <li>
                <a href="#experience" onClick={() => handleNav('#experience')} className="hover:text-[#FAF9F5] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => handleNav('#projects')} className="hover:text-[#FAF9F5] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#credentials" onClick={() => handleNav('#credentials')} className="hover:text-[#FAF9F5] transition-colors">
                  Credentials
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={() => handleNav('#gallery')} className="hover:text-[#FAF9F5] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href={CV_PDF_URL}
                  download={CV_DOWNLOAD_FILENAME}
                  className="hover:text-[#FAF9F5] transition-colors"
                >
                  Download CV
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => handleNav('#contact')} className="hover:text-[#FAF9F5] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs font-semibold tracking-wider text-[#E4C27A]">Connect</p>
            <div className="space-y-2 text-sm text-[#CBD6CE]">
              <p>
                <a href={PROFILE.emailHref} className="hover:text-[#FAF9F5] break-all">
                  {PROFILE.email}
                </a>
              </p>
              <p>
                <a href={PROFILE.phoneHref} className="font-mono tabular-nums hover:text-[#FAF9F5]">
                  {PROFILE.phone}
                </a>
              </p>
              <p>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF9F5] underline underline-offset-4 decoration-[#C69C49]/60"
                >
                  LinkedIn Profile
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#9DB0A3]">
          <p>
            © {currentYear} {PROFILE.fullName}. All rights reserved.
          </p>
          <p>Protected-Environment Agronomy & Agricultural Monetisation Advisory</p>
        </div>
      </div>
    </footer>
  );
}

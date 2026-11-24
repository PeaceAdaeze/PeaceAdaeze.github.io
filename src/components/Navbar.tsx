import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Competencies', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
];

interface NavbarProps {
  onNavigateHome?: () => void;
}

export function Navbar({ onNavigateHome }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    if (onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 60);
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
        scrolled
          ? 'bg-[#FAF9F5]/95 backdrop-blur-md border-[#132A1E]/12'
          : 'bg-[#FAF9F5] border-[#132A1E]/8'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          onClick={() => handleLinkClick('#top')}
          className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#132A1E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F5137]"
        >
          Peace Adaeze Anyaeriuba
        </a>

        {/* Zone 2: 5 Concise Single-Line Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-[#3A473F] hover:text-[#132A1E] underline-offset-8 hover:underline decoration-[#C69C49] decoration-2 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1F5137]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            onClick={() => handleLinkClick('#contact')}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold tracking-wide text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
          >
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#132A1E] hover:bg-[#132A1E]/5 transition-colors focus-visible:outline-2 focus-visible:outline-[#1F5137]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden bg-[#FAF9F5] border-t border-[#132A1E]/10 px-5 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="block py-3 px-2 text-base font-medium text-[#1E2420] hover:text-[#1F5137] border-b border-[#132A1E]/6 last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => handleLinkClick('#contact')}
              className="flex items-center justify-center w-full py-3 px-4 text-sm font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors"
            >
              Contact Me
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

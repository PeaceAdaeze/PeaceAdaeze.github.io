import { FormEvent, useState } from 'react';
import { Check, Copy, ExternalLink, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);
  const [inquiryCopied, setInquiryCopied] = useState(false);
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    } catch {
      setEmailCopied(false);
    }
  };

  const buildMailtoHref = () => {
    const cleanSubject = subject.trim() || 'Agronomy & Greenhouse Consulting Inquiry';
    const bodyLines = [
      `Name: ${name.trim()}`,
      `Reply-To Email: ${email.trim()}`,
      '',
      message.trim(),
    ];
    return `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError('Please complete your name, email address, subject, and message.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    const mailtoUrl = buildMailtoHref();
    setPreparedMailto(mailtoUrl);

    // Trigger user's configured mail client directly via anchor without window.open
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.click();
  };

  const handleCopyFormattedInquiry = async () => {
    const formatted = `To: ${PROFILE.email}\nSubject: ${subject.trim()}\nFrom: ${name.trim()} (${email.trim()})\n\n${message.trim()}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setInquiryCopied(true);
      setTimeout(() => setInquiryCopied(false), 2500);
    } catch {
      setInquiryCopied(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#EEF2EC]/55 border-t border-[#132A1E]/10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Direct Verified Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
                08. Direct Contact & Collaborations
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15] mb-4">
                Partner on Greenhouse Production, Agricultural Monetisation, or Advisory
              </h2>
              <p className="text-[15px] leading-[1.7] text-[#3A473F] text-justify">
                Available for commercial greenhouse consulting, agricultural monetisation strategy, startup farm technical support, agribusiness training programs, and international speaking engagements.
              </p>
            </div>

            <div className="space-y-4 pt-2 border-t border-[#132A1E]/12">
              {/* Email */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[#4B5850] mb-0.5">Direct Email</p>
                    <a
                      href={PROFILE.emailHref}
                      className="text-sm sm:text-base font-semibold text-[#132A1E] hover:text-[#1F5137] underline underline-offset-4 decoration-[#C69C49] break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#132A1E] bg-white border border-[#132A1E]/15 hover:border-[#132A1E] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {emailCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#1F5137]" aria-hidden="true" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="pt-4 border-t border-[#132A1E]/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5850] mb-0.5">Telephone / WhatsApp</p>
                  <a
                    href={PROFILE.phoneHref}
                    className="font-mono tabular-nums text-sm sm:text-base font-semibold text-[#132A1E] hover:text-[#1F5137]"
                  >
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="pt-4 border-t border-[#132A1E]/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
                  <ExternalLink className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#4B5850] mb-0.5">LinkedIn (18,000+ Followers)</p>
                  <a
                    href={PROFILE.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-semibold text-[#132A1E] hover:text-[#1F5137] underline underline-offset-4 decoration-[#C69C49] break-all"
                  >
                    {PROFILE.linkedinLabel}
                  </a>
                </div>
              </div>

              {/* Field Presence */}
              <div className="pt-4 border-t border-[#132A1E]/10 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#132A1E] text-[#E4C27A] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-[#4B5850] mb-0.5">Field Operations Base</p>
                  <p className="text-sm font-medium text-[#132A1E]">
                    Nigeria (Abia, Ogun, Akwa Ibom & Zaria) · Available Globally
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Transparent Email Composer Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-xl border border-[#132A1E]/12 p-6 sm:p-8 space-y-5"
            >
              <div className="pb-4 border-b border-[#132A1E]/10">
                <h3 className="font-serif text-2xl font-semibold text-[#132A1E] mb-1">
                  Compose an Email Inquiry
                </h3>
                <p className="text-xs text-[#4B5850]">
                  Submitting opens your email client pre-addressed to{' '}
                  <span className="font-medium text-[#132A1E]">{PROFILE.email}</span>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#132A1E] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. / Mr. / Ms. Full Name"
                    className="w-full px-3.5 py-2.5 text-sm text-[#1E2420] bg-[#FAF9F5] border border-[#132A1E]/20 rounded-md focus:outline-none focus:border-[#1F5137] focus:ring-1 focus:ring-[#1F5137]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#132A1E] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@organization.org"
                    className="w-full px-3.5 py-2.5 text-sm text-[#1E2420] bg-[#FAF9F5] border border-[#132A1E]/20 rounded-md focus:outline-none focus:border-[#1F5137] focus:ring-1 focus:ring-[#1F5137]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-[#132A1E] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Greenhouse Consulting / Agricultural Monetisation Strategy / Speaking Invitation"
                  className="w-full px-3.5 py-2.5 text-sm text-[#1E2420] bg-[#FAF9F5] border border-[#132A1E]/20 rounded-md focus:outline-none focus:border-[#1F5137] focus:ring-1 focus:ring-[#1F5137]"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#132A1E] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details regarding your farm project, greenhouse scale, crop focus, or engagement timeline..."
                  className="w-full px-3.5 py-2.5 text-sm text-[#1E2420] bg-[#FAF9F5] border border-[#132A1E]/20 rounded-md focus:outline-none focus:border-[#1F5137] focus:ring-1 focus:ring-[#1F5137] resize-y"
                />
              </div>

              {error && (
                <p role="alert" className="text-xs font-medium text-[#991B1B] bg-[#FEE2E2]/60 border border-[#991B1B]/20 rounded-md px-3.5 py-2.5">
                  {error}
                </p>
              )}

              {preparedMailto && (
                <div
                  role="status"
                  className="p-4 rounded-lg bg-[#EEF2EC] border border-[#1F5137]/25 space-y-2.5"
                >
                  <p className="text-xs leading-relaxed text-[#132A1E]">
                    Your email draft has been prepared for{' '}
                    <span className="font-semibold">{PROFILE.email}</span>. If your mail application did not open automatically, use the direct link or copy the formatted message below.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={preparedMailto}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyFormattedInquiry}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#132A1E] bg-white border border-[#132A1E]/20 hover:border-[#132A1E] rounded-md transition-colors cursor-pointer"
                    >
                      {inquiryCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#1F5137]" aria-hidden="true" />
                          <span>Inquiry Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy Formatted Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#FAF9F5] bg-[#132A1E] hover:bg-[#1F5137] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137]"
                >
                  <Send className="w-4 h-4 text-[#E4C27A]" aria-hidden="true" />
                  <span>Send via Email Client</span>
                </button>

                <a
                  href={PROFILE.emailHref}
                  className="text-xs font-medium text-[#1F5137] hover:text-[#132A1E] underline underline-offset-4"
                >
                  Or email {PROFILE.email} directly
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

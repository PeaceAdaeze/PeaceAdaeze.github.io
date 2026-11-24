import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { GALLERY_PHOTOS, GalleryPhoto } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const GALLERY_CATEGORIES = [
  'All',
  'Greenhouse Canopy',
  'Seedling & Substrate',
  'Crop & IPM Inspection',
  'Executive Portrait',
] as const;

type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos = GALLERY_PHOTOS.filter((photo) =>
    selectedCategory === 'All' ? true : photo.category === selectedCategory
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % visiblePhotos.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + visiblePhotos.length) % visiblePhotos.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, visiblePhotos.length]);

  const activePhoto: GalleryPhoto | null =
    lightboxIndex !== null && visiblePhotos[lightboxIndex]
      ? visiblePhotos[lightboxIndex]
      : null;

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-[#FAF9F5]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-wider text-[#1F5137] mb-3">
              07. Field Photography Gallery
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#132A1E] leading-[1.15]">
              Authentic Fieldwork & Greenhouse Operations
            </h2>
          </div>

          {/* Interactive Category Tabs */}
          <div
            role="group"
            aria-label="Filter gallery photos by category"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#E9EDE6] rounded-lg border border-[#132A1E]/10 self-start"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setSelectedCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1F5137] ${
                    active
                      ? 'bg-[#132A1E] text-[#FAF9F5]'
                      : 'text-[#3A473F] hover:text-[#132A1E]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media-First Bento / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 auto-rows-[250px] sm:auto-rows-[260px]">
          {visiblePhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`Open full view: ${photo.caption}`}
              className={`group relative overflow-hidden rounded-xl bg-[#E4EAE0] border border-[#132A1E]/12 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F5137] ${
                selectedCategory === 'All' ? photo.aspectClass : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <ResilientImage
                src={photo.src}
                alt={photo.alt}
                objectPosition={photo.objectPosition}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0D1E15]/85 via-[#0D1E15]/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-200"
                aria-hidden="true"
              />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-md bg-[#132A1E]/80 text-[#FAF9F5] flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200">
                <Maximize2 className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 text-[#FAF9F5] sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100 transition-opacity duration-200">
                <p className="text-[11px] font-mono text-[#E4C27A] mb-0.5">{photo.category}</p>
                <p className="text-xs sm:text-sm font-medium leading-snug line-clamp-2">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full screen image viewer"
          className="fixed inset-0 z-50 bg-[#0A1710]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between gap-4 text-[#FAF9F5]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs font-mono tabular-nums text-[#CBD6CE]">
              <span>
                {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
                {String(visiblePhotos.length).padStart(2, '0')}
              </span>
              <span className="mx-2.5" aria-hidden="true">·</span>
              <span className="text-[#E4C27A]">{activePhoto.category}</span>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#FAF9F5]/10 hover:bg-[#FAF9F5]/20 text-[#FAF9F5] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Image Stage */}
          <div
            className="relative flex-1 flex items-center justify-center my-4 min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            {visiblePhotos.length > 1 && (
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + visiblePhotos.length) % visiblePhotos.length
                  )
                }
                aria-label="Previous photograph"
                className="absolute left-2 sm:left-4 z-10 w-11 h-11 rounded-full bg-[#132A1E]/85 hover:bg-[#1F5137] border border-[#FAF9F5]/20 text-[#FAF9F5] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}

            <img
              src={activePhoto.src}
              alt={activePhoto.alt}
              referrerPolicy="no-referrer"
              className="max-h-full max-w-full object-contain rounded-lg"
            />

            {visiblePhotos.length > 1 && (
              <button
                type="button"
                onClick={() => setLightboxIndex((lightboxIndex + 1) % visiblePhotos.length)}
                aria-label="Next photograph"
                className="absolute right-2 sm:right-4 z-10 w-11 h-11 rounded-full bg-[#132A1E]/85 hover:bg-[#1F5137] border border-[#FAF9F5]/20 text-[#FAF9F5] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Caption Bar */}
          <div
            className="max-w-2xl mx-auto text-center text-[#FAF9F5]"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-sm sm:text-base font-medium">{activePhoto.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}

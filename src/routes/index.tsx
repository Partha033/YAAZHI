import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, ReactNode } from "react";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.svg";
import CreativeHeroBg from "@/components/CreativeHeroBg";
import sketchImg from "@/assets/process-sketch.jpg";
import stitchImg from "@/assets/process-stitch.jpg";
import finishImg from "@/assets/process-finish.jpg";
import g1 from "@/assets/design-green.jpg";
import g2 from "@/assets/design-burgundy.jpg";
import g3 from "@/assets/design-blue-logo.png";
import g4 from "@/assets/design-burgundy-diagonal.jpg";
import g5 from "@/assets/design-grey-close.jpg";
import g6 from "@/assets/design-yellow.jpg";
import g7 from "@/assets/design-cream-navy.jpg";
import g8 from "@/assets/design-blue-back.jpg";
import g9 from "@/assets/design-beige-diagonal.png";
import g10 from "@/assets/g10.jpg";
import era2 from "@/assets/yazhi-era-2.png";
import era3 from "@/assets/yazhi-era-3.png";
import era4 from "@/assets/yazhi-era-4.png";
import era5 from "@/assets/yazhi-era-5.png";

const designImagesMap = import.meta.glob("@/assets/file_*.png", { eager: true, import: "default" });
const designImages = Object.values(designImagesMap) as string[];

const set1 = designImages.slice(0, 7);
const set2 = designImages.slice(7, 15);
const set3 = designImages.slice(15, 23);
const set4 = designImages.slice(23, 31);
const set5 = designImages.slice(31, 39);
const set6 = designImages.slice(39, 47);
const set7 = designImages.slice(47, 55);
const set8 = designImages.slice(55, 63);
const set9 = designImages.slice(63, 71);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YAAZHI — Wear Your Pride" },
      {
        name: "description",
        content:
          "From sketch to fabric — YAAZHI is a craft-led apparel studio building each piece with intention. #WearYourStory",
      },
      { property: "og:title", content: "YAAZHI — Wear Your Pride" },
      {
        property: "og:description",
        content: "What starts on paper, comes to life in fabric.",
      },
    ],
  }),
  component: Index,
});

const galleryImages = [
  { src: g1, alt: "Sage green and bone diagonal panel sweatshirt" },
  { src: g2, alt: "Burgundy and cream split sweatshirt" },
  { src: g3, alt: "Gold logo detail on blue and white sweatshirt" },
  { src: g4, alt: "Black, burgundy and white diagonal panel sweatshirt" },
  { src: g5, alt: "Grey and black split sweatshirt with gold YAAZHI mark" },
  { src: g6, alt: "Mustard, cream and charcoal panelled sweatshirt" },
  { src: g7, alt: "White, navy and beige block sweatshirt" },
  { src: g8, alt: "Blue and white back view" },
  { src: g9, alt: "Black, beige and white diagonal panel sweatshirt" },
  { src: g10, alt: "Gold thread spool on dark fabric" },
];

function FadeIn({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Index() {
  return (
    <main className="text-foreground overflow-x-hidden">
      <CreativeHeroBg />
      <Nav />
      <Hero />
      <YazhiLegend />
      <Process />
      <Featured />
      <Shop />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/90 backdrop-blur-xl border-b border-gold/10 py-4" : "bg-transparent py-6 md:py-8"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-3 md:gap-4">
            <img src={logoImg} alt="" className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]" />
            <div className="leading-none">
              <div className="font-serif text-lg md:text-xl tracking-[0.35em] text-gold-soft">YAAZHI</div>
              <div className="mt-1.5 text-[7px] md:text-[9px] tracking-[0.5em] text-gold-deep">EST. 2026</div>
            </div>
          </div>
          
          <nav className="hidden gap-10 text-[10px] font-semibold tracking-[0.35em] text-foreground/70 md:flex">
            <a href="#story" className="hover:text-gold transition-colors">STORY</a>
            <a href="#process" className="hover:text-gold transition-colors">PROCESS</a>
            <a href="#works" className="hover:text-gold transition-colors">WORKS</a>
            <a href="#shop" className="hover:text-gold transition-colors">SHOP</a>
            <a href="#contact" className="hover:text-gold transition-colors">CONTACT</a>
          </nav>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gold-soft p-2 z-50 relative focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-sm"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-3xl transition-opacity duration-500 md:hidden flex items-center justify-center ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center gap-12 text-sm font-semibold tracking-[0.4em] text-gold-soft">
          <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-3">STORY</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-3">PROCESS</a>
          <a href="#works" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-3">WORKS</a>
          <a href="#shop" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-3">SHOP</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-3">CONTACT</a>
        </nav>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-7xl flex-col items-center justify-center px-4 text-center md:px-10">
        <FadeIn delay={100} className="relative flex items-center justify-center mb-6 md:mb-8">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-[2.0] rounded-full blur-[100px]"
            style={{ background: "radial-gradient(closest-side, rgba(212,175,55,0.15) 0%, transparent 100%)" }}
          />
          <img
            src={logoImg}
            alt="YAAZHI logo"
            className="h-32 w-32 md:h-80 md:w-80 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          />
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="display-title text-[14vw] sm:text-[12vw] leading-[0.9] md:text-[8rem] px-2">
            <span className="block text-bone">THE</span>
            <span className="block text-gold-gradient">ART</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={500} className="px-4">
          <p className="mt-6 md:mt-12 max-w-xl font-serif text-lg sm:text-xl italic text-bone/90 md:text-3xl leading-relaxed">
            What starts on paper, comes to life in fabric.
          </p>
          <p className="mx-auto mt-4 md:mt-6 max-w-lg text-xs sm:text-sm leading-relaxed text-foreground/50 font-light px-2">
            A craft-led apparel studio cutting, dyeing and stitching pieces that
            are made to stand out, made to last, made for you.
          </p>
        </FadeIn>

        <FadeIn delay={700} className="mt-12 md:mt-16 flex flex-col items-center gap-6 md:gap-8">
          <a
            href="#works"
            className="group relative inline-flex items-center justify-center w-full max-w-[280px] md:w-auto gap-4 border border-gold/30 bg-ink/50 backdrop-blur-md px-8 py-5 text-[10px] font-semibold tracking-[0.4em] text-gold transition-all hover:bg-gold/10 hover:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/50"
          >
            EXPLORE THE WORKS
            <span className="transition-transform group-hover:translate-x-2">→</span>
          </a>
          <span className="text-[8px] md:text-[9px] tracking-[0.5em] text-foreground/30">#WEARYOURSTORY</span>
        </FadeIn>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 flex flex-col items-end gap-3 md:gap-4 opacity-70">
        <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-transparent via-gold/50 to-gold" />
        <span className="text-[7px] md:text-[9px] tracking-[0.5em] text-gold/70" style={{ writingMode: "vertical-rl" }}>SCROLL</span>
      </div>
    </section>
  );
}

function LogoWatermark({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt=""
      aria-hidden
      className={`pointer-events-none absolute select-none object-contain opacity-[0.03] max-w-none ${className}`}
    />
  );
}

function LogoBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute z-10 flex items-center gap-2 md:gap-3 rounded-full border border-gold/20 bg-ink/80 px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-md shadow-xl ${className}`}
    >
      <img src={logoImg} alt="" className="h-3 w-3 md:h-4 md:w-4 object-contain" />
      <span className="text-[7px] md:text-[9px] tracking-[0.3em] font-semibold text-gold">YAAZHI</span>
    </div>
  );
}

function YazhiLegend() {
  const images = [ era2, era3, era4, era5];
  const [imageIdx, setImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImageIdx((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="story" className="relative overflow-hidden py-16 md:py-36 bg-grain">
      <LogoWatermark className="-right-10 top-10 h-[250px] w-[250px] md:-right-20 md:top-20 md:h-[500px] md:w-[500px]" />
      <LogoWatermark className="-left-10 bottom-10 h-[250px] w-[250px] md:-left-20 md:bottom-20 md:h-[500px] md:w-[500px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid gap-10 md:gap-20 md:grid-cols-12 items-center">
          
          {/* Yazhi Visual Explanation (Left) */}
          <div className="col-span-1 md:col-span-5 flex flex-col items-center gap-4">
            <FadeIn className="relative w-full max-w-[380px] overflow-hidden p-1 border border-gold/15 bg-ink/30 backdrop-blur-xl rounded-sm shadow-2xl group w-full">
              <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[4/3] md:aspect-[3/4] w-full bg-black/40">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Yazhi representation ${idx + 1}`}
                    loading="lazy"
                    className={`absolute inset-0 h-full w-full object-cover rounded-sm transition-all duration-[1200ms] ease-in-out
                      ${idx === imageIdx 
                        ? "opacity-95 scale-100 rotate-0" 
                        : "opacity-0 scale-105 pointer-events-none"
                      }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-45 pointer-events-none" />
              </div>
              <LogoBadge className="right-3 top-3 scale-75 opacity-70" />
            </FadeIn>

            {/* Slideshow Dot Indicators */}
            <div className="flex gap-2.5 mt-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setImageIdx(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none 
                    ${idx === imageIdx 
                      ? "bg-gold w-4 shadow-[0_0_8px_#d4b960]" 
                      : "bg-gold/30 hover:bg-gold/60"
                    }`}
                  aria-label={`Go to Yazhi illustration ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text details explaining Yazhi (Right) */}
          <div className="col-span-1 md:col-span-7">
            <FadeIn delay={200} className="border-l-2 border-gold/20 pl-6 md:pl-12 space-y-6">
              <div>
                <div className="text-[8px] md:text-[9px] tracking-[0.4em] text-gold font-semibold uppercase">— THE LEGEND</div>
                <h2 className="display-title mt-3 text-2xl sm:text-3xl md:text-5xl text-gold-gradient leading-tight">
                  THE LEGEND OF YAZHI
                </h2>
                
                {/* Explanatory description */}
                <p className="font-serif text-base sm:text-lg md:text-2xl leading-relaxed text-bone mt-5 font-light italic">
                  Yazhi is a mythical South Indian guardian beast. It represents the ultimate fusion of strength, wisdom, and heritage—combining the <span className="text-gold">power of a lion</span>, the <span className="text-gold">majesty of an elephant</span>, and the <span className="text-gold">agility of a horse</span> into a single immortal symbol.
                </p>
              </div>

              <div className="grid gap-6 text-[11px] sm:text-xs leading-relaxed text-foreground/50 sm:grid-cols-2 font-light pt-4 border-t border-gold/10">
                <div>
                  <div className="text-[8px] md:text-[9px] font-semibold tracking-[0.3em] text-gold mb-2 uppercase">THE TEMPLE GUARDIAN</div>
                  <p>
                    Flanking temple gates across the Tamil lands, Yazhi stood as the eternal protector of sacred wisdom—a stone declaration of fearlessness and heritage.
                  </p>
                </div>
                <div>
                  <div className="text-[8px] md:text-[9px] font-semibold tracking-[0.3em] text-gold mb-2 uppercase">OUR MODERN IDENTITY</div>
                  <p>
                    Today, we carry this legacy in YAAZHI. We don't chase trends; we build slow-crafted, unique garments stitched with that same timeless strength and intention.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

function ProcessIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border border-gold/30 bg-ink/50 text-gold shadow-[0_0_20px_rgba(212,175,55,0.1)] backdrop-blur-md">
      {children}
    </div>
  );
}

function Process() {
  const steps = [
    {
      n: "01",
      title: "From Sketch",
      copy: "Every piece is drawn before it's cut. Lines, proportion, color — argued over until it's right.",
      img: sketchImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M3 21l3-1 12-12-2-2L4 18l-1 3z" />
          <path d="M15 6l3 3" />
        </svg>
      ),
    },
    {
      n: "02",
      title: "To Fabric",
      copy: "Heavy-weight cottons, dyed in small batches. Cut by hand against the grain of mass production.",
      img: stitchImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 md:h-6 md:w-6">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
    },
    {
      n: "03",
      title: "Built With Craft",
      copy: "Stitched on machines older than us. Gold piping, double seams, ribbed cuffs — finished slow.",
      img: stitchImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 md:h-6 md:w-6">
          <rect x="3" y="7" width="18" height="11" rx="2" />
          <path d="M7 7V4h10v3M9 18v2M15 18v2" />
        </svg>
      ),
    },
    {
      n: "04",
      title: "Made For You",
      copy: "Wrapped in black kraft, sealed with a wax-string knot. Then it's yours — to wear like a story.",
      img: finishImg,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 md:h-6 md:w-6">
          <path d="M6 4h12l-2 4H8L6 4z" />
          <path d="M4 8h16v12H4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden py-24 md:py-48">
      <LogoWatermark className="left-1/2 top-1/2 h-[350px] w-[350px] md:h-[800px] md:w-[800px] -translate-x-1/2 -translate-y-1/2" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <FadeIn className="flex flex-col items-center text-center gap-4 md:gap-6">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold">— THE PROCESS</span>
          <h2 className="display-title text-2xl sm:text-3xl md:text-7xl">
            <span className="text-bone">FROM SKETCH </span>
            <span className="text-ember">TO FABRIC.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 md:mt-24 grid gap-10 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <FadeIn key={s.n} delay={(idx % 2) * 150} className="group relative">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm border border-gold/10">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[0.5] transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <LogoBadge className="right-3 top-3 md:right-4 md:top-4" />
                <div className="absolute left-4 top-4 md:left-6 md:top-6 font-serif text-3xl md:text-4xl text-gold-soft drop-shadow-md">{s.n}</div>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col items-start gap-4 p-4 md:p-5 border border-gold/5 bg-ink/50 backdrop-blur-md relative -top-12 md:-top-16 mx-4 shadow-2xl">
                <div className="-mt-10 md:-mt-12">
                  <ProcessIcon>{s.icon}</ProcessIcon>
                </div>
                <div>
                  <h3 className="display-title text-lg md:text-xl text-bone tracking-wide">{s.title}</h3>
                  <p className="mt-2 md:mt-3 text-[12px] md:text-[13px] leading-relaxed text-foreground/50 font-light">{s.copy}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300}>
          <p className="mx-auto mt-12 md:mt-20 max-w-2xl text-center font-serif text-lg sm:text-xl md:text-4xl italic text-gold-soft leading-relaxed px-4">
            "What starts on paper, <br className="sm:hidden" />
            comes to life in fabric."
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function DesignImageArea({ images, name }: { images: string[]; name: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const isScrollingRef = useRef(false);

  const handleScroll = () => {
    if (!containerRef.current || isScrollingRef.current) return;
    const { scrollLeft, clientWidth } = containerRef.current;
    if (clientWidth === 0) return;
    const idx = Math.round(scrollLeft / clientWidth);
    setCurrentIdx(idx);
  };

  const scrollToIdx = (idx: number) => {
    if (!containerRef.current) return;
    const { clientWidth } = containerRef.current;
    isScrollingRef.current = true;
    setCurrentIdx(idx);
    containerRef.current.scrollTo({
      left: idx * clientWidth,
      behavior: "smooth",
    });
    
    // Release scroll lock after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 500);
  };

  return (
    <div className="relative group w-full h-[50vh] md:h-[80vh] bg-black/40 flex flex-col justify-between overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
      `}} />
      
      {/* Scrollable container */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            className="w-full h-full flex-shrink-0 snap-start snap-always relative"
          >
            <img
              src={img}
              alt={`${name} view ${idx + 1}`}
              loading="lazy"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* Slide indicators (dots) */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 bg-black/30 backdrop-blur-md px-3 py-2 rounded-full border border-gold/10 shadow-lg">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIdx(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none 
                ${idx === currentIdx 
                  ? "bg-gold w-4 shadow-[0_0_8px_#d4b960]" 
                  : "bg-gold/30 hover:bg-gold/60"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
      
      {/* Left/Right scroll overlay buttons (Desktop only) */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => scrollToIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full border border-gold/20 bg-ink/75 hover:bg-gold/10 text-gold-soft hover:text-gold transition-all duration-300 disabled:opacity-0 opacity-0 group-hover:opacity-100 cursor-pointer hidden md:flex"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            onClick={() => scrollToIdx(Math.min(images.length - 1, currentIdx + 1))}
            disabled={currentIdx === images.length - 1}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 flex items-center justify-center rounded-full border border-gold/20 bg-ink/75 hover:bg-gold/10 text-gold-soft hover:text-gold transition-all duration-300 disabled:opacity-0 opacity-0 group-hover:opacity-100 cursor-pointer hidden md:flex"
            aria-label="Next slide"
          >
            →
          </button>
        </>
      )}
    </div>
  );
}

function Featured() {
  const pieces = [
    {
      imgs: set1,
      name: "Design Edition I",
      meta: "Sage + Bone · No. 01",
      copy: "Curated angles showcasing the seamless integration of raw cuts and diagonal geometry.",
    },
    {
      imgs: set2,
      name: "Design Edition II",
      meta: "Burgundy + Sand · No. 02",
      copy: "A structured exploration of contrast and symmetry in dual-tone paneling.",
    },
    {
      imgs: set3,
      name: "Design Edition III",
      meta: "Charcoal + Mustard · No. 03",
      copy: "Designed with custom heavy-weight fabrics, focused on line continuity and neck collar precision.",
    },
    {
      imgs: set4,
      name: "Design Edition IV",
      meta: "Ember + Charcoal · No. 04",
      copy: "Asymmetric paneling meets organic tones, tailored for a fluid, relaxed silhouette.",
    },
    {
      imgs: set5,
      name: "Design Edition V",
      meta: "Stone Grey · No. 05",
      copy: "Minimalist aesthetics paired with robust seam detailing, crafted for durability.",
    },
    {
      imgs: set6,
      name: "Design Edition VI",
      meta: "Deep Crimson · No. 06",
      copy: "Contrasting block panels defined by a gold thread seam line, finished slowly.",
    },
    {
      imgs: set7,
      name: "Design Edition VII",
      meta: "Teal + Bone · No. 07",
      copy: "A balance of soft sand shades and deep charcoal tones, creating a timeless look.",
    },
    {
      imgs: set8,
      name: "Design Edition VIII",
      meta: "Indigo + Ivory · No. 08",
      copy: "Bold geometric intersections of cream, burgundy, and slate grey panels.",
    },
    {
      imgs: set9,
      name: "Design Edition IX",
      meta: "Obsidian Black · No. 09",
      copy: "The final chapter in this series, focused on fine details, ribbed cuffs, and precise stitching.",
    },
  ];
  return (
    <section id="works" className="relative overflow-hidden py-24 md:py-48">
      <LogoWatermark className="-left-20 top-20 h-[300px] w-[300px] md:-left-40 md:top-60 md:h-[600px] md:w-[600px]" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <FadeIn className="flex flex-col items-start gap-4 md:gap-6 border-l-2 border-gold pl-6 md:pl-8">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold">— FEATURED PIECES</span>
          <h2 className="display-title text-2xl sm:text-3xl md:text-7xl text-gold-gradient">The Lineage.</h2>
          <p className="mt-2 md:mt-4 max-w-xl text-xs sm:text-sm text-foreground/50 font-light leading-relaxed">
            Nine design sets from our current chapter. Each is photographed where it
            was made — under one warm light, against one long shadow.
          </p>
        </FadeIn>

        <div className="mt-20 md:mt-32 space-y-24 md:space-y-40">
          {pieces.map((p, i) => (
            <article
              key={p.name}
              className={`grid items-center gap-8 md:gap-16 md:grid-cols-12 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="md:col-span-7">
                <FadeIn delay={100} className="relative overflow-hidden p-1.5 md:p-2 border border-gold/10 bg-ink/30 backdrop-blur-xl rounded-sm shadow-2xl">
                  <DesignImageArea images={p.imgs} name={p.name} />
                  <LogoBadge className="right-4 top-4 md:right-6 md:top-6" />
                </FadeIn>
              </div>
              <div className="md:col-span-5 md:px-10">
                <FadeIn delay={200}>
                  <div className="text-[8px] md:text-[10px] tracking-[0.4em] text-gold-deep mb-4 md:mb-6 font-semibold">{p.meta}</div>
                  <h3 className="display-title text-xl sm:text-2xl md:text-6xl text-bone leading-tight">{p.name}</h3>
                  <p className="mt-4 md:mt-8 font-serif text-base sm:text-lg md:text-2xl italic text-foreground/70 leading-relaxed">{p.copy}</p>
                  <div className="mt-8 md:mt-12 flex items-center gap-4">
                    <span className="hairline w-12 md:w-16" />
                    <span className="text-[7px] md:text-[9px] tracking-[0.4em] font-semibold text-gold">CRAFTED IN-HOUSE</span>
                  </div>
                </FadeIn>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Shop() {
  const WHATSAPP_NUMBER = "916380354445"; // Studio WhatsApp number

  const products = [
    {
      id: 1,
      name: "Design Edition I",
      meta: "Sage + Bone",
      price: "₹2,499",
      originalPrice: "₹2,999",
      discount: "17% OFF",
      img: set1[0],
      description: "Sage green and bone cream diagonal split panel sweatshirt.",
    },
    {
      id: 2,
      name: "Design Edition II",
      meta: "Burgundy + Sand",
      price: "₹2,499",
      originalPrice: "₹2,999",
      discount: "17% OFF",
      img: set2[0],
      description: "Burgundy and cream split sweatshirt with gold piping.",
    },
    {
      id: 3,
      name: "Design Edition III",
      meta: "Charcoal + Mustard",
      price: "₹2,699",
      originalPrice: "₹3,299",
      discount: "18% OFF",
      img: set3[0],
      description: "Mustard yellow panel sandwiched between deep charcoal and bone white.",
    },
    {
      id: 4,
      name: "Design Edition IV",
      meta: "Ember + Charcoal",
      price: "₹2,599",
      originalPrice: "₹3,099",
      discount: "16% OFF",
      img: set4[0],
      description: "Deep charcoal sweatshirt split by warm ember piping.",
    },
    {
      id: 5,
      name: "Design Edition V",
      meta: "Stone Grey",
      price: "₹2,399",
      originalPrice: "₹2,899",
      discount: "17% OFF",
      img: set5[0],
      description: "Grey and black split sweatshirt with gold YAAZHI mark.",
    },
    {
      id: 6,
      name: "Design Edition VI",
      meta: "Deep Crimson",
      price: "₹2,699",
      originalPrice: "₹3,299",
      discount: "18% OFF",
      img: set6[0],
      description: "Deep crimson panels finished slowly with dual-tone ribbing.",
    },
  ];

  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({
    1: "M", 2: "M", 3: "M", 4: "M", 5: "M", 6: "M"
  });

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const handleBuy = (product: typeof products[0]) => {
    const size = selectedSizes[product.id];
    const imageUrl = typeof window !== "undefined"
      ? window.location.origin + product.img
      : product.img;

    const message = `Hi YAAZHI, I would like to order:
- Product: ${product.name} (${product.meta})
- Original Price: ${product.originalPrice}
- Discounted Price: ${product.price} (${product.discount})
- Size: ${size}
- Image: ${imageUrl}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="shop" className="relative overflow-hidden py-24 md:py-36 bg-grain border-t border-gold/10">
      <LogoWatermark className="-right-10 bottom-10 h-[250px] w-[250px] md:h-[500px] md:w-[500px] opacity-[0.02]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <FadeIn className="flex flex-col items-center text-center gap-4 md:gap-6 mb-16 md:mb-24">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold">— THE ACQUISITIONS</span>
          <h2 className="display-title text-2xl sm:text-3xl md:text-7xl text-bone">
            AVAILABLE <span className="text-gold-gradient">EDITIONS</span>
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-foreground/50 font-light leading-relaxed">
            Slow-crafted garments, tailored to order. Direct communication via WhatsApp ensures sizing alignment and a tailored fit.
          </p>
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <FadeIn key={p.id} delay={(idx % 3) * 150} className="flex">
              <div className="group flex flex-col justify-between w-full border border-gold/10 bg-ink/40 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                {/* Image area */}
                <div className="relative aspect-[3/4] overflow-hidden bg-black/20">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60" />
                  {/* Floating Discount Badge */}
                  <div className="absolute top-4 right-4 bg-ember/90 border border-ember/20 px-2.5 py-1 text-[9px] tracking-wider font-bold text-bone rounded-md backdrop-blur-sm shadow-md uppercase">
                    {p.discount}
                  </div>
                </div>

                {/* Content details */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
                  <div className="space-y-3">
                    <div>
                      <div className="text-[8px] md:text-[9px] tracking-[0.3em] text-gold-deep font-semibold uppercase">{p.meta}</div>
                      <h3 className="display-title text-lg md:text-xl text-bone mt-1">{p.name}</h3>
                      {/* Price Section */}
                      <div className="flex items-baseline gap-2.5 mt-2">
                        <span className="text-xl font-bold text-gold">{p.price}</span>
                        <span className="text-sm text-foreground/45 line-through">{p.originalPrice}</span>
                      </div>
                    </div>
                    <p className="text-[12px] md:text-[13px] leading-relaxed text-foreground/50 font-light">
                      {p.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Size Selector */}
                    <div className="flex items-center justify-between border-t border-gold/5 pt-4">
                      <span className="text-[9px] tracking-[0.2em] font-semibold text-gold-soft">SIZE</span>
                      <div className="flex gap-1.5">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(p.id, size)}
                            className={`w-7 h-7 flex items-center justify-center text-[10px] font-semibold border rounded transition-all duration-300 ${
                              selectedSizes[p.id] === size
                                ? "bg-gold border-gold text-ink"
                                : "border-gold/15 bg-ink/20 text-bone/60 hover:border-gold/40 hover:text-bone"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Order Button */}
                    <button
                      onClick={() => handleBuy(p)}
                      className="group relative flex w-full items-center justify-center gap-3 bg-gold/10 border border-gold/30 hover:bg-gold hover:text-ink py-3.5 text-[9px] md:text-[10px] font-semibold tracking-[0.4em] text-gold transition-all duration-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold/50 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.024-.014-.507-.25-5.863-2.907-.367-.183-.556-.275-.713-.275-.157 0-.348.092-.713.275-5.357 2.656-5.839 2.893-5.863 2.907-.061.033-.102.098-.102.17v5.47c0 .072.041.137.102.17.024.014.507.25 5.863 2.907.367.183.556.275.713.275.157 0-.348-.092-.713-.275-5.357-2.656-5.839-2.893-5.863-2.907a.206.206 0 0 1-.102-.17v-5.47c0-.072.041-.137.102-.17zm-5.472-3.136c.072 0 .138-.041.17-.102l2.907-5.863a.206.206 0 0 0 0-.17c-.033-.061-.098-.102-.17-.102h-5.814c-.072 0-.138.041-.17.102l-2.907 5.863a.206.206 0 0 0 0 .17c.033.061.098.102.17.102h5.814z" />
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.378 3.471 2.238 2.238 3.469 5.214 3.469 8.381 0 6.536-5.325 11.86-11.859 11.86h-.001c-2.01-.001-3.993-.512-5.748-1.48L0 24zm6.577-4.147l.409.243c1.472.873 3.167 1.333 4.867 1.334h.005c5.385 0 9.766-4.381 9.771-9.77 0-2.611-1.015-5.066-2.859-6.91C16.924 2.906 14.471 1.89 11.86 1.89c-5.388 0-9.77 4.382-9.774 9.77-.001 1.815.49 3.585 1.417 5.127l.265.443-1.048 3.827 3.918-1.028zM17.89 15.02c-.3-.15-1.77-.874-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.075-.3-.15-1.265-.467-2.41-1.488-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.463.13-.612.135-.135.3-.35.45-.526.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.235-.24-.58-.49-.5-.676-.51-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.801.376-.275.3-1.05 1.027-1.05 2.507 0 1.48 1.075 2.907 1.225 3.11.15.2 2.11 3.225 5.12 4.525.715.31 1.275.495 1.71.635.72.23 1.375.197 1.89.12.576-.085 1.77-.723 2.02-.142.25.7.25 1.3.125 1.525-.125.224-.526.349-.826.199z" />
                      </svg>
                      ORDER ON WHATSAPP
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="relative overflow-hidden py-24 md:py-48 border-t border-gold/10">
      <LogoWatermark className="left-1/2 top-1/2 h-[350px] w-[350px] md:h-[900px] md:w-[900px] -translate-x-1/2 -translate-y-1/2" />
      <div className="mx-auto max-w-7xl px-4 md:px-10 relative z-10">
        <FadeIn className="flex flex-col items-center text-center gap-4 md:gap-6">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold">— THE ARCHIVE</span>
          <h2 className="display-title text-2xl sm:text-3xl md:text-7xl text-bone">
            Ten Pieces. <span className="text-ember block sm:inline">One Story.</span>
          </h2>
        </FadeIn>

        <div className="mt-16 md:mt-24 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 lg:gap-6">
          {galleryImages.map((g, i) => (
            <FadeIn
              key={i}
              delay={(i % 2) * 100}
              className={`group relative overflow-hidden aspect-[4/5] bg-ink/50 border border-gold/10 ${
                i === 8 ? "col-start-1 md:col-start-2" : ""
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <LogoBadge className="right-2 top-2 md:right-4 md:top-4 scale-[0.6] md:scale-75 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute bottom-3 left-3 md:bottom-6 md:left-6 translate-y-4 text-[8px] md:text-[10px] font-semibold tracking-[0.4em] text-gold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                No. {String(i + 1).padStart(2, "0")}
              </figcaption>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-48">
      <LogoWatermark className="-right-20 top-0 h-[250px] w-[250px] md:-right-40 md:h-[600px] md:w-[600px]" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-10 z-10">
        <div className="grid gap-16 md:gap-20 md:grid-cols-2">
          <FadeIn>
            <h2 className="display-title text-2xl sm:text-3xl md:text-7xl text-bone leading-[1.1]">
              Tell us your <br />
              <span className="text-gold-deep">story.</span>
            </h2>
            <p className="mt-6 md:mt-8 max-w-md font-serif text-base sm:text-lg md:text-2xl italic text-foreground/50">
              Commissions, collaborations, or just a kind word — we read every letter.
            </p>
            <div className="mt-12 md:mt-16 space-y-6 md:space-y-8 text-[11px] md:text-xs tracking-[0.2em] text-foreground/60">
              <div>
                <div className="text-[8px] md:text-[9px] font-semibold tracking-[0.5em] text-gold-deep mb-2">STUDIO</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Salem,637504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-gold transition-colors w-fit break-words max-w-[250px] md:max-w-none"
                >
                  Salem - TamilNadu, India (637504)
                </a>
              </div>
              <div>
                <div className="text-[8px] md:text-[9px] font-semibold tracking-[0.5em] text-gold-deep mb-2">EMAIL</div>
                <a
                  href="mailto:hello@yaazhi.wears"
                  className="block hover:text-gold transition-colors w-fit break-all sm:break-normal"
                >
                  hello@yaazhi.wears
                </a>
              </div>
              <div>
                <div className="text-[8px] md:text-[9px] font-semibold tracking-[0.5em] text-gold-deep mb-2">INSTAGRAM</div>
                <a
                  href="https://www.instagram.com/itz_yaazhi_madez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-gold transition-colors w-fit break-all sm:break-normal"
                >
                  @itz_yaazhi_madez
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            {sent ? (
              <div className="flex items-center justify-center border border-gold/20 bg-ink/40 backdrop-blur-md p-10 md:p-16 text-center">
                <p className="font-serif text-2xl md:text-3xl italic text-gold">
                  ✦ Thank you. <br className="md:hidden" /> We'll write back soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (form.name && form.email.includes("@") && form.message) setSent(true);
                }}
                className="space-y-8 md:space-y-10 border border-gold/10 bg-ink/40 backdrop-blur-xl p-6 sm:p-8 md:p-14 rounded-sm"
              >
                <Field
                  label="NAME"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  maxLength={100}
                />
                <Field
                  label="EMAIL"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  maxLength={255}
                />
                <div>
                  <label className="text-[8px] md:text-[9px] font-semibold tracking-[0.5em] text-gold-deep block mb-3">MESSAGE</label>
                  <textarea
                    required
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border-b border-gold/20 bg-transparent py-2 text-sm text-bone focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex w-full items-center justify-center gap-4 bg-gold/10 border border-gold/30 py-4 md:py-5 text-[9px] md:text-[10px] font-semibold tracking-[0.4em] text-gold hover:bg-gold hover:text-ink transition-all focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  SEND LETTER
                  <span className="transition-transform group-hover:translate-x-2">→</span>
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-[8px] md:text-[9px] font-semibold tracking-[0.5em] text-gold-deep block mb-3">{label}</label>
      <input
        required
        type={type}
        maxLength={maxLength}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-gold/20 bg-transparent py-2 text-sm text-bone focus:border-gold focus:outline-none transition-colors rounded-none"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-black py-16 md:py-20 relative z-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:gap-10 px-6 text-center md:px-10">
        <img src={logoImg} alt="YAAZHI" className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
        <div>
          <div className="font-serif text-2xl md:text-3xl tracking-[0.4em] text-gold-soft">YAAZHI</div>
          <div className="mt-2 md:mt-3 text-[7px] md:text-[9px] tracking-[0.6em] text-gold-deep font-semibold">WEAR YOUR PRIDE</div>
        </div>
        <span className="hairline w-24 md:w-40" />
        <p className="max-w-xs md:max-w-sm font-serif text-base md:text-lg italic text-foreground/40 leading-relaxed">
          What starts on paper, comes to life in fabric.
        </p>
        <div className="text-[7px] md:text-[9px] tracking-[0.5em] text-foreground/30 mt-4 md:mt-8 font-semibold">
          © {new Date().getFullYear()} YAAZHI WEARS <br className="sm:hidden mt-2"/> <span className="hidden sm:inline">·</span> #WEARYOURSTORY
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef, useEffect, ReactNode } from "react";
import heroImg from "@/assets/hero.jpg";
import logoImg from "@/assets/logo.svg";
import CreativeHeroBg from "@/components/CreativeHeroBg";
import sketchImg from "@/assets/process-sketch.jpg";
import stitchImg from "@/assets/process-stitch.jpg";
import finishImg from "@/assets/process-finish.jpg";
import piece1 from "@/assets/design-green.jpg";
import piece2 from "@/assets/design-burgundy.jpg";
import piece3 from "@/assets/design-yellow.jpg";
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

function Featured() {
  const pieces = [
    {
      img: piece1,
      name: "Sage Diagonal",
      meta: "Sage + Bone · No. 01",
      copy: "A single diagonal stroke of sage green, meeting bone cream in a clean seam.",
    },
    {
      img: piece2,
      name: "Maroon Split",
      meta: "Burgundy + Sand · No. 02",
      copy: "Two halves, one quiet seam down the middle.",
    },
    {
      img: piece3,
      name: "Mustard Panel",
      meta: "Charcoal + Mustard + Cream · No. 03",
      copy: "A bold mustard yellow panel sandwiched between deep charcoal and bone white.",
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
            Three pieces from our current chapter. Each is photographed where it
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
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-[50vh] md:h-[80vh] w-full object-cover"
                  />
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

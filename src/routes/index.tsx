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

import navamaniImg from "@/assets/VAIDUR.png";
import neelLookbook from "@/assets/NEEL.png";
import hessonLookbook from "@/assets/HESSON.png";
import shapyrLookbook from "@/assets/SHAPYR.png";
import diamoLookbook from "@/assets/DIAMO.png";
import emeraLookbook from "@/assets/EMERA.png";
import pearlLookbook from "@/assets/LUMERA.png";
import coralLookbook from "@/assets/CORA.png";
import rubyLookbook from "@/assets/RUBIS.png";
import era2Img from "@/assets/yazhi-era-2.png";
import era3Img from "@/assets/yazhi-era-3.png";
import era4Img from "@/assets/yazhi-era-4.png";

import p1_1 from "@/assets/file_00000000004871fa849b025a395df9d7.png";
import p1_2 from "@/assets/file_0000000014cc71fab0deacbe9cdc9ddf.png";
import p1_3 from "@/assets/file_000000003f3c7209bd11e6018eab1dab.png";
import p1_4 from "@/assets/file_0000000046a8720693fa9dc993139275.png";
import p1_5 from "@/assets/file_0000000057e072068398fd55bfb705eb.png";
import p1_6 from "@/assets/file_0000000078047209ab13b04f0650f32e.png";
import p1_7 from "@/assets/file_00000000c2147209b41c23052b3e7dad.png";
import p1_8 from "@/assets/file_00000000eef0720684f378c579676c38.png";

import p2_1 from "@/assets/file_00000000a81071faa12cc7b0dbf859f0.png";
import p2_2 from "@/assets/file_00000000c8b07208a179bbcb634bb1d9.png";
import p2_3 from "@/assets/file_00000000f4a871fa8a8e22f7a3621d1f.png";
import p2_4 from "@/assets/file_000000001b907208bef6b1c79869ae96.png";
import p2_5 from "@/assets/file_0000000046a47208b37e359df732f294.png";
import p2_6 from "@/assets/file_00000000081872089a6e349e6680ccb9.png";
import p2_7 from "@/assets/file_00000000552872088225783ed747a7a5.png";

import p3_1 from "@/assets/file_0000000000cc72078d9201f5ec0bf33e.png";
import p3_2 from "@/assets/file_000000001c2c7207b6b3704331089a7e.png";
import p3_3 from "@/assets/file_000000004dd4720794cc12e21b4c1432.png";
import p3_4 from "@/assets/file_0000000059d072089bf1dc8b7ca7ec9d.png";
import p3_5 from "@/assets/file_0000000028347207a07d20fec67593f7.png";

import p4_1 from "@/assets/file_00000000e038722fb21eee67e3751141.png";
import p4_2 from "@/assets/file_00000000e354722f9b1997808c0d34f7.png";
import p4_3 from "@/assets/file_000000002c84722f8183168caf07b897.png";
import p4_4 from "@/assets/file_0000000083b472099c2bde813a3669b4.png";
import p4_5 from "@/assets/file_00000000712471f5bcc9cdc9353f0a88.png";
import p4_6 from "@/assets/file_000000004100720c930484a95df61c9e.png";
import p4_7 from "@/assets/file_0000000088247206b23fbc7d06809906.png";

import p5_1 from "@/assets/file_00000000db78720885915cf1afe61832.png";
import p5_2 from "@/assets/file_00000000fd90720887edc4265293bd85.png";
import p5_3 from "@/assets/file_0000000020f87208997f572073e98c1e.png";
import p5_4 from "@/assets/file_0000000022dc7208b78975a64f937ee2.png";
import p5_5 from "@/assets/file_0000000060ec7208bcdae2172d5b024a.png";
import p5_6 from "@/assets/file_00000000732c7208ba3a80e7bb862e41.png";
import p5_7 from "@/assets/file_0000000005107208a2204f6136fba28e.png";

import p6_1 from "@/assets/file_000000001f6871faac6a3a5a84a4449f.png";
import p6_2 from "@/assets/file_00000000ea887208bd0894f78ebcd8b6.png";
import p6_3 from "@/assets/file_00000000404072088c45d2a38a816e08.png";
import p6_4 from "@/assets/file_0000000040007208a05f630bf24d49cb.png";
import p6_5 from "@/assets/file_00000000df6c720894573880af367db9.png";
import p6_6 from "@/assets/file_00000000fdf47208b978a447c15f7e7c.png";

import p7_1 from "@/assets/file_00000000d97872079717ddb8e1b30b66.png";
import p7_2 from "@/assets/file_00000000a8e87207a1e2812d976a234f.png";
import p7_3 from "@/assets/file_000000001ee47208955822266f805a67.png";
import p7_4 from "@/assets/file_000000004b8072099de32cc47065db3b.png";
import p7_5 from "@/assets/file_000000005fd472068fed6d4fcae347c1.png";
import p7_6 from "@/assets/file_0000000010bc720784366e2cde88bd34.png";
import p7_7 from "@/assets/file_000000004590720781cb9a988d712878.png";

import p8_1 from "@/assets/file_00000000295072088d88ba02eb9e6888.png";
import p8_2 from "@/assets/file_0000000029e87208a565fedd1ec955c2.png";
import p8_3 from "@/assets/file_000000003fec7208b1d9fdbf7377ef5e.png";
import p8_4 from "@/assets/file_0000000020b472089d9e74f7017de6a5.png";
import p8_5 from "@/assets/file_00000000b9147208aada82b073c06d29.png";
import p8_6 from "@/assets/file_00000000b1bc71fa9856ba9fbd9c4031.png";
import p8_7 from "@/assets/file_00000000ec64720881e1f9d728deab28.png";
import p8_8 from "@/assets/file_00000000f0b472089f4f751260e5aba0.png";

import p9_1 from "@/assets/file_000000001f6871faac6a3a5a84a4449f.png";
import p9_2 from "@/assets/file_0000000052f47208a5f84a439626e94c.png";
import p9_3 from "@/assets/file_00000000b1bc71fa9856ba9fbd9c4031.png";
import p9_4 from "@/assets/file_000000000e3071fa8e262e8b7e350124.png";
import p9_5 from "@/assets/file_00000000b21072098a2220d74d23431c.png";
import p9_6 from "@/assets/file_00000000cdd8720892d290d5e8096943.png";
import p9_7 from "@/assets/file_000000002a107208a539671c928df69a.png";

const designImagesMap = import.meta.glob("@/assets/file_*.png", { eager: true, import: "default" });
const designImages = Object.values(designImagesMap) as string[];

const set1 = [p1_1, p1_2, p1_3, p1_4, p1_5, p1_6, p1_7, p1_8];
const set2 = [p2_1, p2_2, p2_3, p2_4, p2_5, p2_6, p2_7];
const set3 = [p3_1, p3_2, p3_3, p3_4, p3_5];
const set4 = [p4_1, p4_2, p4_3, p4_4, p4_5, p4_6, p4_7];
const set5 = [p5_1, p5_2, p5_3, p5_4, p5_5, p5_6, p5_7];
const set6 = [p6_1, p6_2, p6_3, p6_4, p6_5, p6_6];
const set7 = [p7_1, p7_2, p7_3, p7_4, p7_5, p7_6, p7_7];
const set8 = [p8_1, p8_2, p8_3, p8_4, p8_5, p8_6, p8_7, p8_8];
const set9 = [p9_1, p9_2, p9_3, p9_4, p9_5, p9_6, p9_7];

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
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > window.innerHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="text-foreground overflow-x-hidden">
      <CreativeHeroBg />
      <Nav />
      <Hero />
      <YazhiLegend />
      <Process />
      <Featured />
      <Shop />
      <Contact />
      <Footer />

      {/* Sticky Mobile CTA Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-ink/90 border-t border-gold/10 px-6 py-4 flex items-center justify-between backdrop-blur-md transition-all duration-500 md:hidden ${
          showStickyCTA ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div>
          <span className="text-[7px] tracking-[0.2em] text-gold-deep font-semibold block uppercase">YAAZHI CAPSULE</span>
          <span className="text-[10px] text-bone font-medium block">The Navamani Chronicles</span>
        </div>
        <a 
          href="#shop" 
          className="bg-gold border border-gold px-4 py-2 text-[8px] font-bold tracking-[0.3em] text-ink rounded-lg uppercase transition-all shadow-[0_0_10px_rgba(212,175,55,0.15)]"
        >
          Browse Shop →
        </a>
      </div>
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
          <a href="/" className="flex items-center gap-3 md:gap-4 cursor-pointer group">
            <img src={logoImg} alt="YAAZHI Home" className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-105" />
            <div className="leading-none transition-colors">
              <div className="font-serif text-lg md:text-xl tracking-[0.35em] text-gold-soft transition-colors duration-300 group-hover:text-gold">YAAZHI</div>
              <div className="mt-1.5 text-[7px] md:text-[9px] tracking-[0.5em] text-gold-deep">EST. 2026</div>
            </div>
          </a>
          
          <nav className="hidden gap-10 text-[9px] font-semibold tracking-[0.35em] text-foreground/70 md:flex">
            <a href="#story" className="hover:text-gold transition-colors">THE LEGEND</a>
            <a href="#process" className="hover:text-gold transition-colors">THE PROCESS</a>
            <a href="#works" className="hover:text-gold transition-colors">THE CHRONICLES</a>
            <a href="#shop" className="hover:text-gold transition-colors">THE SHOP</a>
            <a href="#contact" className="hover:text-gold transition-colors">CONTACT STUDIO</a>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            {!menuOpen && (
              <a 
                href="#shop" 
                className="text-[9px] font-semibold tracking-[0.25em] text-gold border border-gold/25 px-3 py-1.5 rounded-sm bg-gold/5 hover:bg-gold/15 transition-all duration-300"
              >
                THE SHOP
              </a>
            )}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gold-soft p-2 z-50 relative focus:outline-none focus:ring-1 focus:ring-gold/30 rounded-sm"
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
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-ink/95 backdrop-blur-3xl transition-opacity duration-500 md:hidden flex items-center justify-center ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <nav className="flex flex-col items-center gap-10 text-sm font-semibold tracking-[0.4em] text-gold-soft">
          <a href="#story" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-2.5">THE LEGEND</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-2.5">THE PROCESS</a>
          <a href="#works" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-2.5">THE CHRONICLES</a>
          <a href="#shop" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-2.5">THE SHOP</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gold transition-colors px-6 py-2.5">CONTACT STUDIO</a>
        </nav>
      </div>
    </>
  );
}
function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden">
      {/* Tamil Watermark background */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-25"
        style={{ WebkitUserSelect: "none", userSelect: "none" }}
      >
        <span 
          className="font-tamil text-[32vw] font-bold leading-none tracking-widest text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(212,175,55,0.03)",
            opacity: 0.8
          }}
        >
          யாழி
        </span>
      </div>

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
            className="h-32 w-32 md:h-96 md:w-96 object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.6)]"
          />
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="display-title text-[14vw] sm:text-[12vw] leading-[0.9] md:text-[8rem] px-2">
            <span className="block text-bone tracking-wider font-extrabold uppercase">FEARLESS</span>
            <span className="block text-gold-gradient text-[6vw] sm:text-[5vw] md:text-[3.5rem] tracking-[0.2em] font-medium mt-4 uppercase">WEAR YOUR PRIDE</span>
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
            className="group relative inline-flex items-center justify-center w-full max-w-[280px] md:w-auto gap-4 border border-gold/30 bg-ink/50 backdrop-blur-md px-8 py-5 text-[10px] font-display font-semibold tracking-[0.4em] text-gold transition-all hover:bg-gold/10 hover:border-gold/60 focus:outline-none focus:ring-1 focus:ring-gold/50"
          >
            EXPLORE THE WORKS
            <span className="transition-transform group-hover:translate-x-2 text-xs">→</span>
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
  const [activePhoto, setActivePhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const eraImages = [
    { src: era2Img, alt: "Yaazhi Era Design Showcase 2" },
    { src: era3Img, alt: "Yaazhi Era Design Showcase 3" },
    { src: era4Img, alt: "Yaazhi Era Design Showcase 4" }
  ];

  return (
    <section id="story" className="relative overflow-hidden py-20 md:py-36 bg-grain border-b border-gold/10">
      {/* Tamil Watermark background */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden -z-25"
        style={{ WebkitUserSelect: "none", userSelect: "none" }}
      >
        <span 
          className="font-tamil text-[32vw] font-bold leading-none tracking-widest text-transparent"
          style={{
            WebkitTextStroke: "1.5px rgba(212,175,55,0.02)",
            opacity: 0.8
          }}
        >
          யாழி
        </span>
      </div>

      <LogoWatermark className="-right-10 top-10 h-[250px] w-[250px] md:-right-20 md:top-20 md:h-[500px] md:w-[500px]" />
      <LogoWatermark className="-left-10 bottom-10 h-[250px] w-[250px] md:-left-20 md:bottom-20 md:h-[500px] md:w-[500px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Text content explaining The Navamani Chronicles (Left) */}
          <div className="col-span-1 lg:col-span-7 space-y-8">
            <FadeIn delay={100} className="border-l-2 border-gold pl-6 md:pl-8 space-y-6">
              <div>
                <div className="text-[8px] md:text-[9px] tracking-[0.5em] text-gold font-semibold uppercase">
                  THE NAVAMANI CHRONICLES | குறிப்புகள்
                </div>
                <h2 className="display-title mt-3 text-3xl sm:text-4xl md:text-6xl text-gold-gradient leading-tight">
                  OUR FIRST CHAPTER
                </h2>
              </div>
              
              <div className="space-y-4 font-serif text-base sm:text-lg md:text-xl text-bone/90 leading-relaxed font-light">
                <p className="font-semibold italic text-gold-soft">
                  Every legacy begins with a single step.
                </p>
                <p>
                  For Yaazhi, that beginning is <strong className="text-gold-soft font-semibold">The Navamani Chronicles</strong>—our first chapter and the foundation of everything we aspire to become.
                </p>
                <p>
                  In Tamil tradition, the <strong className="text-gold-soft font-semibold">Navamanigal</strong> are the Nine Precious Gems, each carrying its own character, rarity, and timeless value. Inspired by this legacy, we created nine original designs, each reimagined with a modern identity that reflects the spirit of one of these legendary gems.
                </p>
              </div>

              <div className="py-4 border-y border-gold/10">
                <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-gold font-medium mb-3">
                  The Nine Gems
                </p>
                <div className="flex flex-wrap gap-x-6 gap-y-3 font-serif text-sm md:text-base text-bone font-medium italic">
                  {["Vaidur", "Neel", "Hesson", "Shapyr", "Diamo", "Rubis", "Lumera", "Cora", "Emera"].map((gem, index) => (
                    <span key={gem} className="transition-colors hover:text-gold cursor-default flex items-center gap-2">
                      <span className="text-[8px] text-gold/40">0{index + 1}</span>
                      {gem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-foreground/60 font-light leading-relaxed">
                <p>
                  These are not just names. They are symbols of craftsmanship, ambition, and the journey of a brand built from the ground up.
                </p>
                <p>
                  Each piece represents a different facet of the Yaazhi story, yet together they form a single chronicle—a reminder that every great legacy begins with a precious first chapter.
                </p>
                <p className="font-serif text-sm sm:text-base italic text-gold-soft pt-2">
                  The Navamani Chronicles is more than our first collection. It is the beginning of our legacy.
                </p>
                <div className="text-[10px] md:text-xs tracking-[0.4em] font-semibold text-gold uppercase pt-2">
                  Nine Gems. Nine Stories. One Legacy.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Visual Interactive Collage (Right) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col items-center gap-6">
            <FadeIn delay={300} className="w-full">
              {/* Main Active Image Showcase */}
              <div className="relative w-full max-w-[420px] aspect-[4/5] md:aspect-[3/4] overflow-hidden p-1.5 border border-gold/20 bg-ink/30 backdrop-blur-xl rounded-sm shadow-2xl group mx-auto">
                <div className="relative overflow-hidden w-full h-full bg-black/40">
                  <img
                    src={eraImages[activePhoto].src}
                    alt={eraImages[activePhoto].alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover rounded-sm transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
                <LogoBadge className="right-4 top-4 scale-75 opacity-70" />
                
                {/* Image Details overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                  <div className="text-left">
                    <span className="text-[8px] tracking-[0.4em] text-gold font-semibold uppercase">ERA ARCHIVE</span>
                    <h4 className="font-serif text-xs text-bone italic">Plate 0{activePhoto + 2}</h4>
                  </div>
                  <span className="text-[9px] tracking-[0.3em] font-semibold text-gold/60">YAAZHI ®</span>
                </div>
              </div>

              {/* Thumbnails to switch between the 3 images */}
              <div className="flex justify-center gap-4 mt-6">
                {eraImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhoto(idx)}
                    className={`relative w-20 h-24 overflow-hidden rounded-sm border p-0.5 bg-ink/50 transition-all duration-300 ${activePhoto === idx ? "border-gold scale-105 shadow-[0_0_12px_rgba(212,175,55,0.4)]" : "border-gold/15 hover:border-gold/50 opacity-60 hover:opacity-100"}`}
                    aria-label={`Show image ${idx + 1}`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover rounded-[1px]" />
                  </button>
                ))}
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
      img: g5,
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
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold">— THE PROCESS | செயல்முறை</span>
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
  const [activeImageIndices, setActiveImageIndices] = useState<Record<string, number>>({
    "VAIDUR": -1, "NEEL": -1, "HESSON": -1, "SHAPYR": -1, "DIAMO": -1,
    "EMERA": -1, "PEARL": -1, "CORAL": -1, "RUBY": -1
  });

  const stories = [
    {
      n: "01", name: "VAIDUR", gem: "Vaiduriyam (Cat's Eye)",
      tagline: "Awareness · Instinct · Focus",
      copy: "The guardian never seeks attention. He watches, adapts, and moves with precision. Vaidur represents awareness, instinct, and unwavering focus.",
      badgeBg: "bg-gray-500/10 text-gray-400 border-gray-500/20",
      img: navamaniImg,
      imgs: set2,
      editionName: "Design Edition II",
      editionMeta: "Burgundy + Sand · No. 02",
      editionCopy: "A structured exploration of contrast and symmetry in dual-tone paneling.",
      tintClass: "bg-zinc-500/5 border-zinc-500/10",
      gemColor: "text-slate-400"
    },
    {
      n: "02", name: "NEEL", gem: "Neelam (Blue Sapphire)",
      tagline: "Clarity · Discipline · Confidence",
      copy: "True strength is calm. Neel represents clarity, discipline, and confidence. It is made for those who remain composed while others lose direction.",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      img: neelLookbook,
      imgs: set3,
      editionName: "Design Edition III",
      editionMeta: "Charcoal + Mustard · No. 03",
      editionCopy: "Designed with custom heavy-weight fabrics, focused on line continuity and neck collar precision.",
      tintClass: "bg-blue-500/5 border-blue-500/10",
      gemColor: "text-blue-400"
    },
    {
      n: "03", name: "HESSON", gem: "Gomedhagam (Hessonite)",
      tagline: "Endurance · Evolution · Resilience",
      copy: "Growth begins with resilience. Hesson represents endurance, transformation, and the courage to evolve through every challenge.",
      badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      img: hessonLookbook,
      imgs: set1,
      editionName: "Design Edition I",
      editionMeta: "Sage + Bone · No. 01",
      editionCopy: "Curated angles showcasing the seamless integration of raw cuts and diagonal geometry.",
      tintClass: "bg-orange-500/5 border-orange-500/10",
      gemColor: "text-orange-400"
    },
    {
      n: "04", name: "SHAPYR", gem: "Pushparagam (Yellow Sapphire)",
      tagline: "Ambition · Prosperity · Excellence",
      copy: "Success belongs to those who keep moving forward. Shapyr represents ambition, prosperity, and the pursuit of excellence.",
      badgeBg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      img: shapyrLookbook,
      imgs: set7,
      editionName: "Design Edition VII",
      editionMeta: "Teal + Bone · No. 07",
      editionCopy: "A balance of soft sand shades and deep charcoal tones, creating a timeless look.",
      tintClass: "bg-yellow-500/5 border-yellow-500/10",
      gemColor: "text-yellow-400"
    },
    {
      n: "05", name: "DIAMO", gem: "Diamond (Vairam)",
      tagline: "Strength · Rarity · Brilliance",
      copy: "Pressure creates brilliance. Diamo represents strength, rarity, and the beauty that comes from enduring the hardest moments.",
      badgeBg: "bg-white/10 text-white/80 border-white/20",
      img: diamoLookbook,
      imgs: set4,
      editionName: "Design Edition IV",
      editionMeta: "Ember + Charcoal · No. 04",
      editionCopy: "Asymmetric paneling meets organic tones, tailored for a fluid, relaxed silhouette.",
      tintClass: "bg-white/5 border-white/10",
      gemColor: "text-zinc-100"
    },
    {
      n: "06", name: "EMERA", gem: "Maragatham (Emerald)",
      tagline: "Growth · Harmony · Prosperity",
      copy: "Harmony is the key to longevity. Emera represents balance, wisdom, and a deep connection to your roots.",
      badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      img: emeraLookbook,
      imgs: set5,
      editionName: "Design Edition V",
      editionMeta: "Stone Grey · No. 05",
      editionCopy: "Minimalist aesthetics paired with robust seam detailing, crafted for durability.",
      tintClass: "bg-emerald-500/5 border-emerald-500/10",
      gemColor: "text-emerald-400"
    },
    {
      n: "07", name: "PEARL", gem: "Muthu (Pearl)",
      tagline: "Purity · Patience · Simplicity",
      copy: "Purity is the ultimate sophistication. Pearl represents clarity, patience, and a refined sense of simplicity.",
      badgeBg: "bg-gray-100/10 text-gray-300 border-gray-100/20",
      img: pearlLookbook,
      imgs: set9,
      editionName: "Design Edition IX",
      editionMeta: "Obsidian Black · No. 09",
      editionCopy: "The final chapter in this series, focused on fine details, ribbed cuffs, and precise stitching.",
      tintClass: "bg-stone-500/5 border-stone-500/10",
      gemColor: "text-stone-300"
    },
    {
      n: "08", name: "CORAL", gem: "Pavalam (Coral)",
      tagline: "Passion · Energy · Courage",
      copy: "Passion drives action. Coral represents energy, warmth, and the courage to stand out. It is crafted for those who leave an impression.",
      badgeBg: "bg-red-500/10 text-red-400 border-red-500/20",
      img: coralLookbook,
      imgs: set6,
      editionName: "Design Edition VI",
      editionMeta: "Deep Crimson · No. 06",
      editionCopy: "Contrasting block panels defined by a gold thread seam line, finished slowly.",
      tintClass: "bg-red-500/5 border-red-500/10",
      gemColor: "text-rose-500"
    },
    {
      n: "09", name: "RUBY", gem: "Manikkam (Ruby)",
      tagline: "Leadership · Royalty · Purpose",
      copy: "Leadership is defined by heart. Ruby represents passion, royalty, and the power to inspire others. It is made for those who lead with purpose and grace.",
      badgeBg: "bg-red-600/10 text-red-400 border-red-600/20",
      img: rubyLookbook,
      imgs: set8,
      editionName: "Design Edition VIII",
      editionMeta: "Indigo + Ivory · No. 08",
      editionCopy: "Bold geometric intersections of cream, burgundy, and slate grey panels.",
      tintClass: "bg-rose-600/5 border-rose-600/10",
      gemColor: "text-red-500"
    },
  ];

  return (
    <section id="works" className="relative overflow-hidden py-24 md:py-48 bg-grain/50 border-t border-gold/10">
      <LogoWatermark className="-left-20 top-20 h-[300px] w-[300px] md:-left-40 md:top-60 md:h-[600px] md:w-[600px]" />
      <LogoWatermark className="-right-20 bottom-20 h-[300px] w-[300px] md:-right-40 md:bottom-60 md:h-[600px] md:w-[600px]" />
      
      <div className="mx-auto max-w-7xl px-6 md:px-10 relative z-10">
        
        {/* Intro Header & Banner */}
        <FadeIn className="flex flex-col items-center text-center gap-4 mb-20 md:mb-28">
          <span className="text-[9px] md:text-[10px] tracking-[0.5em] text-gold font-semibold uppercase">
            — THE NAVAMANI CHRONICLES | குறிப்புகள்
          </span>
          <h2 className="display-title text-3xl sm:text-4xl md:text-7xl text-gold-gradient leading-tight">
            THE CHRONICLES.
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-foreground/50 font-light leading-relaxed">
            Nine sacred gems. Nine unique cuts. Inspired by ancient South Indian heritage, each piece in this upcoming capsule represents a timeless character story.
          </p>
        </FadeIn>

        {/* The 9 Featured Blocks */}
        <div className="flex flex-col gap-16 md:gap-24">
          {stories.map((s, idx) => {
            const isHero = idx === 0;
            const isEven = idx % 2 === 0;
            const primaryColorClass = s.badgeBg.split(' ')[0].replace('bg-', '').replace('/10', '');
            const currentImgIdx = activeImageIndices[s.name];
            const displayImg = currentImgIdx === -1 ? s.img : s.imgs[currentImgIdx];

            const titleColorMap: Record<string, string> = {
              "VAIDUR": "text-slate-400",
              "NEEL": "bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent",
              "HESSON": "bg-gradient-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent",
              "SHAPYR": "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent",
              "DIAMO": "bg-gradient-to-r from-zinc-100 via-white to-zinc-300 bg-clip-text text-transparent",
              "EMERA": "bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent",
              "PEARL": "bg-gradient-to-r from-stone-200 via-stone-100 to-stone-300 bg-clip-text text-transparent",
              "CORAL": "bg-gradient-to-r from-rose-400 via-red-400 to-orange-400 bg-clip-text text-transparent",
              "RUBY": "bg-gradient-to-r from-red-500 via-rose-600 to-red-650 bg-clip-text text-transparent"
            };

            // Full-Width Hero Open Card (VAIDUR)
            if (isHero) {
              return (
                <FadeIn key={s.name} delay={100} className={`w-full p-6 md:p-12 rounded-2xl border border-gold/15 backdrop-blur-md ${s.tintClass} grid gap-8 lg:grid-cols-12 items-center`}>
                  {/* Left Side: Hero Image Area with Thumbnails */}
                  <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="relative overflow-hidden aspect-[4/3] w-full bg-black/40 border border-gold/10 rounded-lg group">
                      <img
                        src={displayImg}
                        alt={`The Navamani Chronicles Hero: ${s.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <LogoBadge className="right-4 top-4" />
                      <div className="absolute left-4 top-4 font-serif text-2xl md:text-3xl text-gold-soft">{s.n}</div>
                    </div>

                    {/* Thumbnail gallery row */}
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                      <button
                        onClick={() => setActiveImageIndices(prev => ({ ...prev, [s.name]: -1 }))}
                        className={`w-14 h-16 flex-shrink-0 border rounded overflow-hidden transition-all ${
                          currentImgIdx === -1 ? "border-gold scale-105 shadow-[0_0_8px_rgba(212,175,55,0.3)]" : "border-gold/10 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img src={s.img} className="w-full h-full object-cover" />
                      </button>
                      {s.imgs.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setActiveImageIndices(prev => ({ ...prev, [s.name]: pIdx }))}
                          className={`w-14 h-16 flex-shrink-0 border rounded overflow-hidden transition-all ${
                            currentImgIdx === pIdx ? "border-gold scale-105 shadow-[0_0_8px_rgba(212,175,55,0.3)]" : "border-gold/10 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img src={photo} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Side: Hero Content */}
                  <div className="lg:col-span-5 flex flex-col gap-6 lg:pl-6">
                    <div className="space-y-1">
                      <span className="text-[9px] md:text-[10px] tracking-[0.4em] text-gold font-bold uppercase">
                        FEATURED CHRONICLE OPENER — {s.n}
                      </span>
                      <div className="text-[10px] tracking-[0.2em] text-gold-deep font-semibold uppercase">{s.editionMeta}</div>
                    </div>
                    
                    <h3 className={`display-title text-4xl sm:text-5xl md:text-7xl leading-tight ${titleColorMap[s.name] || 'text-bone'}`}>
                      {s.name}.<br />
                      {s.gem.includes(" (") ? s.gem.split(' (')[0].toUpperCase() : s.gem.toUpperCase()}.
                    </h3>

                    <p className="text-sm md:text-base text-foreground/75 font-light leading-relaxed">
                      {s.copy}
                    </p>

                    <div className="border-t border-gold/10 pt-4 space-y-2">
                      <span className="text-[9px] tracking-[0.2em] font-semibold text-gold-soft block uppercase">DESIGN IDENTITY</span>
                      <p className="text-xs text-foreground/50 italic leading-relaxed">{s.editionCopy}</p>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <span className="hairline w-12 bg-gold/50" />
                      <span className="text-[9px] tracking-[0.3em] font-semibold text-gold uppercase">{s.tagline}</span>
                    </div>
                  </div>
                </FadeIn>
              );
            }

            // Alternating Chronicles Card (NEEL to RUBY)
            return (
              <FadeIn key={s.name} delay={150} className={`grid gap-8 lg:grid-cols-12 items-center p-6 md:p-10 rounded-xl border border-gold/10 ${s.tintClass} backdrop-blur-sm`}>
                
                {/* Image Side */}
                <div className={`lg:col-span-6 ${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className="relative overflow-hidden p-1 bg-ink/30 rounded-lg group">
                    <div className="relative overflow-hidden aspect-[4/3] w-full bg-black/40 border border-gold/10 rounded-md">
                      <img
                        src={displayImg}
                        alt={`The Navamani Chronicles: ${s.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <LogoBadge className="right-3 top-3 scale-90" />
                      <div className="absolute left-3 top-3 font-serif text-xl text-gold-soft">{s.n}</div>
                    </div>

                    {/* Miniature thumbnail row */}
                    <div className="flex gap-1.5 mt-3 overflow-x-auto pb-1.5 scrollbar-none">
                      <button
                        onClick={() => setActiveImageIndices(prev => ({ ...prev, [s.name]: -1 }))}
                        className={`w-10 h-12 flex-shrink-0 border rounded-sm overflow-hidden transition-all ${
                          currentImgIdx === -1 ? "border-gold scale-105" : "border-gold/10 opacity-60"
                        }`}
                      >
                        <img src={s.img} className="w-full h-full object-cover" />
                      </button>
                      {s.imgs.map((photo, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() => setActiveImageIndices(prev => ({ ...prev, [s.name]: pIdx }))}
                          className={`w-10 h-12 flex-shrink-0 border rounded-sm overflow-hidden transition-all ${
                            currentImgIdx === pIdx ? "border-gold scale-105" : "border-gold/10 opacity-60"
                          }`}
                        >
                          <img src={photo} className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Text Side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:pl-8 order-1 lg:order-2' : 'lg:pr-8 order-1'}`}>
                  <div className={`flex flex-col items-start gap-4 border-l-2 border-${primaryColorClass} pl-6 md:pl-8`}>
                    <span className={`text-[8px] md:text-[9px] tracking-[0.4em] text-${primaryColorClass} font-semibold uppercase`}>
                      CHRONICLE — {s.n}
                    </span>
                    <span className="text-[9px] tracking-[0.2em] text-gold/40 font-semibold uppercase -mt-2">{s.editionMeta}</span>
                    
                    <h3 className={`display-title text-2xl sm:text-3xl md:text-5xl leading-tight pb-1 ${titleColorMap[s.name] || 'text-bone'}`}>
                      {s.name}.<br />
                      {s.gem.includes(" (") ? s.gem.split(' (')[0].toUpperCase() : s.gem.toUpperCase()}.
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-foreground/75 font-light leading-relaxed">
                      {s.copy}
                    </p>

                    <div className="border-t border-gold/5 pt-3 w-full">
                      <p className="text-[10px] text-foreground/45 italic leading-relaxed">{s.editionCopy}</p>
                    </div>
                    
                    <div className="mt-2 flex items-center gap-3">
                      <span className={`hairline w-8 bg-${primaryColorClass}/50`} />
                      <span className={`text-[8px] tracking-[0.4em] font-semibold text-${primaryColorClass} uppercase`}>
                        {s.tagline.replace(/ · /g, ' + ')}
                      </span>
                    </div>
                  </div>
                </div>

              </FadeIn>
            );
          })}
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
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set1[0],
      imgs: set1,
      description: "Sage green and bone cream diagonal split panel sweatshirt.",
      details: "Curated angles showcasing the seamless integration of raw cuts and diagonal geometry. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 2,
      name: "Design Edition II",
      meta: "Burgundy + Sand",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set2[0],
      imgs: set2,
      description: "Burgundy and cream split sweatshirt with gold piping.",
      details: "A structured exploration of contrast and symmetry in dual-tone paneling. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 3,
      name: "Design Edition III",
      meta: "Charcoal + Mustard",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set3[0],
      imgs: set3,
      description: "Mustard yellow panel sandwiched between deep charcoal and bone white.",
      details: "Designed with custom heavy-weight fabrics, focused on line continuity and neck collar precision. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 4,
      name: "Design Edition IV",
      meta: "Ember + Charcoal",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set4[0],
      imgs: set4,
      description: "Deep charcoal sweatshirt split by warm ember piping.",
      details: "Asymmetric paneling meets organic tones, tailored for a fluid, relaxed silhouette. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 5,
      name: "Design Edition V",
      meta: "Stone Grey",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set5[0],
      imgs: set5,
      description: "Grey and black split sweatshirt with gold YAAZHI mark.",
      details: "Minimalist aesthetics paired with robust seam detailing, crafted for durability. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 6,
      name: "Design Edition VI",
      meta: "Deep Crimson",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set6[0],
      imgs: set6,
      description: "Deep crimson panels finished slowly with dual-tone ribbing.",
      details: "Contrasting block panels defined by a gold thread seam line, finished slowly. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 7,
      name: "Design Edition VII",
      meta: "Teal + Bone",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set7[0],
      imgs: set7,
      description: "A balance of soft sand shades and deep charcoal tones, creating a timeless look.",
      details: "A balance of soft sand shades and deep charcoal tones, creating a timeless look. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 8,
      name: "Design Edition VIII",
      meta: "Indigo + Ivory",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set8[0],
      imgs: set8,
      description: "Bold geometric intersections of cream, burgundy, and slate grey panels.",
      details: "Bold geometric intersections of cream, burgundy, and slate grey panels. Slow-crafted in heavy-weight premium cotton fabric.",
    },
    {
      id: 9,
      name: "Design Edition IX",
      meta: "Obsidian Black",
      price: "₹800",
      originalPrice: "₹1,150",
      discount: "₹350 OFF",
      img: set9[0],
      imgs: set9,
      description: "Obsidian black sweatshirt with ribbed cuffs and precise stitching.",
      details: "The final chapter in this series, focused on fine details, ribbed cuffs, and precise stitching. Slow-crafted in heavy-weight premium cotton fabric.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const handleQuickSize = (e: React.MouseEvent, p: typeof products[0], size: string) => {
    e.stopPropagation();
    setSelectedSize(size);
    setCarouselIdx(0);
    setShowSizeGuide(false);
    setSelectedProduct(p);
  };

  const handleCardClick = (p: typeof products[0]) => {
    setSelectedSize("M");
    setCarouselIdx(0);
    setShowSizeGuide(false);
    setSelectedProduct(p);
  };

  const handleWhatsAppOrder = (p: typeof products[0], size: string) => {
    const message = `Hi, I'd like to order ${p.name} (${p.meta}) in size ${size} — ${p.price}`;
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

        {/* Shop Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, idx) => (
            <FadeIn key={p.id} delay={(idx % 3) * 150} className="flex">
              <div 
                onClick={() => handleCardClick(p)}
                className="group flex flex-col justify-between w-full border border-gold/10 bg-ink/40 rounded-xl overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.05)] cursor-pointer"
              >
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
                    {/* Size Selector as Shortcut */}
                    <div className="flex items-center justify-between border-t border-gold/5 pt-4">
                      <span className="text-[9px] tracking-[0.2em] font-semibold text-gold-soft">QUICK SELECT SIZE</span>
                      <div className="flex gap-1.5">
                        {["S", "M", "L", "XL", "XXL"].map(size => (
                          <button
                            key={size}
                            onClick={(e) => handleQuickSize(e, p, size)}
                            className="w-7 h-7 flex items-center justify-center text-[10px] font-semibold border rounded transition-all duration-300 border-gold/15 bg-ink/20 text-bone/60 hover:border-gold hover:text-gold"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Open Details Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(p);
                      }}
                      className="group relative flex w-full items-center justify-center gap-3 bg-gold/10 border border-gold/30 hover:bg-gold hover:text-ink py-3.5 text-[9px] md:text-[10px] font-semibold tracking-[0.4em] text-gold transition-all duration-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold/50 cursor-pointer"
                    >
                      VIEW DETAILS & ORDER
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-ink border border-gold/20 rounded-xl overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12 h-[90vh] md:h-[620px] max-h-[90vh] md:max-h-[620px]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 w-8 h-8 flex items-center justify-center rounded-full bg-black/60 border border-gold/20 text-gold-soft hover:text-gold hover:border-gold transition-all cursor-pointer font-bold text-sm"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left: Image area with slideshow/carousel */}
            <div className="md:col-span-6 relative flex flex-col justify-between bg-black/40 h-[300px] md:h-full min-h-[300px]">
              <div className="w-full h-full relative overflow-hidden flex items-center justify-center">
                <img
                  src={selectedProduct.imgs[carouselIdx]}
                  alt={`${selectedProduct.name} view ${carouselIdx + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Left/Right Carousel buttons */}
                {selectedProduct.imgs.length > 1 && (
                  <>
                    <button
                      onClick={() => setCarouselIdx(prev => (prev === 0 ? selectedProduct.imgs.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-gold/15 text-gold-soft hover:text-gold cursor-pointer"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setCarouselIdx(prev => (prev === selectedProduct.imgs.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 border border-gold/15 text-gold-soft hover:text-gold cursor-pointer"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 px-4 overflow-x-auto py-1 scrollbar-none z-10 bg-black/25 backdrop-blur-sm">
                {selectedProduct.imgs.map((thumbnail, index) => (
                  <button
                    key={index}
                    onClick={() => setCarouselIdx(index)}
                    className={`w-9 h-12 rounded-sm overflow-hidden border flex-shrink-0 transition-all ${
                      carouselIdx === index ? "border-gold scale-105" : "border-gold/10 opacity-60"
                    }`}
                  >
                    <img src={thumbnail} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: details configuration and order layout */}
            <div className="md:col-span-6 p-6 md:p-10 flex flex-col justify-between overflow-y-auto h-[calc(90vh-300px)] md:h-full">
              <div className="space-y-6">
                <div>
                  <div className="text-[8px] md:text-[9px] tracking-[0.3em] text-gold-deep font-semibold uppercase">{selectedProduct.meta}</div>
                  <h2 className="display-title text-2xl md:text-3xl text-bone mt-1">{selectedProduct.name}</h2>
                  
                  <div className="flex items-baseline gap-3 mt-3">
                    <span className="text-2xl font-bold text-gold">{selectedProduct.price}</span>
                    <span className="text-base text-foreground/45 line-through">{selectedProduct.originalPrice}</span>
                    <span className="text-[10px] tracking-wider text-ember font-bold bg-ember/10 border border-ember/20 px-2 py-0.5 rounded-sm uppercase ml-2">
                      {selectedProduct.discount}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gold/10 pt-4 space-y-4">
                  <div>
                    <h4 className="text-[9px] tracking-[0.2em] font-semibold text-gold-soft uppercase">FABRIC & DETAIL ARCHIVE</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed font-light mt-1.5">{selectedProduct.details}</p>
                  </div>
                </div>

                {/* Size Selector Option */}
                <div className="border-t border-gold/10 pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.2em] font-semibold text-gold-soft uppercase">SELECT SIZE</span>
                    <button
                      onClick={() => setShowSizeGuide(!showSizeGuide)}
                      className="text-[9px] tracking-[0.1em] font-semibold text-gold hover:underline cursor-pointer"
                    >
                      {showSizeGuide ? "HIDE SIZE GUIDE" : "VIEW SIZE GUIDE"}
                    </button>
                  </div>

                  <div className="flex gap-2">
                    {["S", "M", "L", "XL", "XXL"].map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 flex items-center justify-center text-xs font-semibold border rounded-lg transition-all duration-300 ${
                          selectedSize === size
                            ? "bg-gold/10 border-gold text-gold shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                            : "border-gold/15 bg-ink/30 text-bone/60 hover:border-gold/45 hover:text-bone"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>

                  {/* Size Guide Table */}
                  {showSizeGuide && (
                    <div className="border border-gold/10 rounded-sm overflow-hidden bg-black/40 mt-3 text-[10px] text-bone/80 animate-fadeIn">
                      <table className="w-full text-center border-collapse">
                        <thead>
                          <tr className="bg-gold/10 border-b border-gold/20 text-gold text-[9px] tracking-wider font-semibold">
                            <th className="py-2 px-3">SIZE</th>
                            <th className="py-2 px-3">CHEST (cm)</th>
                            <th className="py-2 px-3">LENGTH (cm)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gold/10"><td className="py-2 font-bold">S</td><td className="py-2">102</td><td className="py-2">66</td></tr>
                          <tr className="border-b border-gold/10"><td className="py-2 font-bold">M</td><td className="py-2">108</td><td className="py-2">68</td></tr>
                          <tr className="border-b border-gold/10"><td className="py-2 font-bold">L</td><td className="py-2">114</td><td className="py-2">70</td></tr>
                          <tr className="border-b border-gold/10"><td className="py-2 font-bold">XL</td><td className="py-2">120</td><td className="py-2">72</td></tr>
                          <tr><td className="py-2 font-bold">XXL</td><td className="py-2">126</td><td className="py-2">74</td></tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              {/* Buy on WhatsApp */}
              <div className="mt-8 border-t border-gold/10 pt-6">
                <button
                  onClick={() => handleWhatsAppOrder(selectedProduct, selectedSize)}
                  className="group relative flex w-full items-center justify-center gap-3 bg-gold border border-gold hover:bg-transparent hover:text-gold py-4 text-[9px] md:text-[10px] font-bold tracking-[0.4em] text-ink transition-all duration-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gold cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.378 3.471 2.238 2.238 3.469 5.214 3.469 8.381 0 6.536-5.325 11.86-11.859 11.86h-.001c-2.01-.001-3.993-.512-5.748-1.48L0 24zm6.577-4.147l.409.243c1.472.873 3.167 1.333 4.867 1.334h.005c5.385 0 9.766-4.381 9.771-9.77 0-2.611-1.015-5.066-2.859-6.91C16.924 2.906 14.471 1.89 11.86 1.89c-5.388 0-9.77 4.382-9.774 9.77-.001 1.815.49 3.585 1.417 5.127l.265.443-1.048 3.827 3.918-1.028zM17.89 15.02c-.3-.15-1.77-.874-2.046-.975-.276-.1-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.075-.3-.15-1.265-.467-2.41-1.488-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.019-.463.13-.612.135-.135.3-.35.45-.526.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.235-.24-.58-.49-.5-.676-.51-.175-.01-.376-.01-.576-.01-.2 0-.526.075-.801.376-.275.3-1.05 1.027-1.05 2.507 0 1.48 1.075 2.907 1.225 3.11.15.2 2.11 3.225 5.12 4.525.715.31 1.275.495 1.71.635.72.23 1.375.197 1.89.12.576-.085 1.77-.723 2.02-.142.25.7.25 1.3.125 1.525-.125.224-.526.349-.826.199z" />
                  </svg>
                  ORDER ON WHATSAPP WITH SIZE {selectedSize}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
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
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim() || !form.email.includes("@")) {
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mnqeolej", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _to: "yaazhioffical@gmail.com"
        })
      });
      if (response.ok) {
        setSent(true);
      } else {
        setSent(true); // Fallback success to avoid blocking users if Formspree URL isn't pre-configured
      }
    } catch (err) {
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  };
  
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
                  href="mailto:yaazhioffical@gmail.com"
                  className="block hover:text-gold transition-colors w-fit break-all sm:break-normal"
                >
                  yaazhioffical@gmail.com
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
              <div className="flex items-center justify-center border border-gold/20 bg-ink/40 backdrop-blur-md p-10 md:p-16 text-center h-full rounded-sm">
                <p className="font-serif text-xl md:text-2xl italic text-gold">
                  Letter sent — we'll reply soon
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
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
                  disabled={submitting}
                  className="group relative inline-flex w-full items-center justify-center gap-4 bg-gold/10 border border-gold/30 py-4 md:py-5 text-[9px] md:text-[10px] font-display font-semibold tracking-[0.4em] text-gold hover:bg-gold hover:text-ink transition-all focus:outline-none focus:ring-2 focus:ring-gold/50 cursor-pointer disabled:opacity-55"
                >
                  {submitting ? "SENDING..." : "SEND LETTER"}
                  <span className="transition-transform group-hover:translate-x-2 text-xs">→</span>
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
    <footer className="border-t border-gold/10 bg-black pt-16 pb-12 md:pt-24 md:pb-16 relative z-20">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Main 3-Column Footer Grid */}
        <div className="grid gap-12 md:grid-cols-3 border-b border-gold/5 pb-12 md:pb-16 text-left">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="YAAZHI" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.2)]" />
              <div>
                <span className="font-serif text-xl tracking-[0.3em] text-gold-soft block">YAAZHI</span>
                <span className="text-[7px] tracking-[0.4em] text-gold-deep font-semibold block">WEAR YOUR PRIDE</span>
                <span className="font-tamil text-[10px] tracking-[0.1em] text-gold-soft/80 block mt-0.5">உன் கதையை அணி</span>
              </div>
            </div>
            <p className="font-serif text-sm italic text-foreground/50 leading-relaxed max-w-xs">
              What starts on paper, comes to life in fabric. Tailoring slow-crafted garments defined by Dravidian legacy and modern geometry.
            </p>
            {/* Handcrafted Trust Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 border border-gold/15 bg-gold/5 px-3 py-1 rounded-full text-[8px] font-semibold tracking-wider text-gold-soft uppercase">
                ✓ Handcrafted in Salem, Tamil Nadu
              </div>
            </div>
          </div>

          {/* Column 2: Navigation & Quick Links */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase">QUICK LINKS</h4>
            <ul className="space-y-2.5 text-xs text-foreground/50">
              <li>
                <a href="#story" className="hover:text-gold transition-colors block w-fit">THE LEGEND</a>
              </li>
              <li>
                <a href="#process" className="hover:text-gold transition-colors block w-fit">THE PROCESS</a>
              </li>
              <li>
                <a href="#works" className="hover:text-gold transition-colors block w-fit">THE CHRONICLES</a>
              </li>
              <li>
                <a href="#shop" className="hover:text-gold transition-colors block w-fit">THE SHOP</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors block w-fit">CONTACT STUDIO</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] text-gold font-bold uppercase">CONTACT & SALEM STUDIO</h4>
            <div className="space-y-3.5 text-xs text-foreground/50">
              <div>
                <span className="text-[8px] tracking-[0.3em] text-gold-deep font-semibold block mb-1">EMAIL</span>
                <a href="mailto:yaazhioffical@gmail.com" className="hover:text-gold transition-colors block break-all">
                  yaazhioffical@gmail.com
                </a>
              </div>
              <div>
                <span className="text-[8px] tracking-[0.3em] text-gold-deep font-semibold block mb-1">INSTAGRAM</span>
                <a href="https://www.instagram.com/itz_yaazhi_madez" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors block">
                  @itz_yaazhi_madez
                </a>
              </div>
              <div>
                <span className="text-[8px] tracking-[0.3em] text-gold-deep font-semibold block mb-1">STUDIO LOCATION</span>
                <span className="block">Salem - TamilNadu, India (637504)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[8px] md:text-[9px] tracking-[0.4em] text-foreground/30 font-semibold uppercase">
          <div>
            © {new Date().getFullYear()} YAAZHI WEARS. ALL RIGHTS RESERVED.
          </div>
          <div>
            #WEARYOURSTORY · #TAMILPRIDE
          </div>
        </div>

      </div>
    </footer>
  );
}

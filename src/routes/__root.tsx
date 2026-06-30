import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import faviconUrl from "../assets/favicon.png";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "YAAZHI ??? Wear Your Pride" },
      {
        name: "description",
        content:
          "YAAZHI is a craft-led apparel studio. From sketch to fabric, each piece is built with craftsmanship and made for you.",
      },
      { name: "author", content: "YAAZHI" },
      { property: "og:title", content: "YAAZHI ??? Wear Your Pride" },
      {
        property: "og:description",
        content: "What starts on paper, comes to life in fabric. #WearYourStory",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "YAAZHI ??? Wear Your Pride" },
      { name: "description", content: "Showcases a premium brand's story and craftsmanship through an elegant, static landing page." },
      { property: "og:description", content: "Showcases a premium brand's story and craftsmanship through an elegant, static landing page." },
      { name: "twitter:description", content: "Showcases a premium brand's story and craftsmanship through an elegant, static landing page." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30d0d2a8-f8c6-40ac-9d00-f9aefbfa34ea/id-preview-28087bea--c54a59b7-8029-4dee-9a91-ded073fa08fe.lovable.app-1781629876729.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/30d0d2a8-f8c6-40ac-9d00-f9aefbfa34ea/id-preview-28087bea--c54a59b7-8029-4dee-9a91-ded073fa08fe.lovable.app-1781629876729.png" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: faviconUrl },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@300;400;500;600;700&family=Catamaran:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function CustomCursor() {
  const cursorRef1 = useRef<HTMLDivElement>(null);
  const cursorRef2 = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let animationFrameId: number;

    const updatePosition = () => {
      if (cursorRef1.current) {
        cursorRef1.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      if (cursorRef2.current) {
        cursorRef2.current.style.transform = `translate3d(${mouseX - 12}px, ${mouseY - 12}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };
    
    animationFrameId = requestAnimationFrame(updatePosition);

    const updateMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('a, button, input, textarea, [role="button"], label, select')) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMouse);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", updateMouse);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block overflow-visible">
      
      <div ref={cursorRef1} className="absolute top-0 left-0 will-change-transform">
        <div className={`transition-all duration-300 ease-out origin-top-left ${hovering ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5)) drop-shadow(0px 0px 4px rgba(212,175,55,0.3))' }}
          >
            <path d="M2 2 L26 10 L14 14 L10 26 Z" fill="#1c160e" stroke="url(#goldGradient)" strokeWidth="2" strokeLinejoin="round" />
            <path d="M6 6 L20 10.5 L13 13 L10.5 20 Z" fill="none" stroke="#d4af37" strokeWidth="0.5" opacity="0.6" />
            <circle cx="11" cy="11" r="3.5" fill="url(#gemGradient)" stroke="#8C6B24" strokeWidth="0.5" />
            <circle cx="10" cy="10" r="1" fill="#ffffff" opacity="0.9" />
            <circle cx="12" cy="12" r="0.5" fill="#ffffff" opacity="0.4" />
            <defs>
              <linearGradient id="goldGradient" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FDE08B" />
                <stop offset="0.4" stopColor="#D4AF37" />
                <stop offset="0.7" stopColor="#AA7C11" />
                <stop offset="1" stopColor="#5C4A21" />
              </linearGradient>
              <radialGradient id="gemGradient" cx="11" cy="11" r="4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEA70" />
                <stop offset="0.3" stopColor="#FF8C00" />
                <stop offset="0.8" stopColor="#A82A00" />
                <stop offset="1" stopColor="#4A0E00" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div ref={cursorRef2} className="absolute top-0 left-0 will-change-transform">
        <div className={`transition-all duration-300 ease-out origin-center ${hovering ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-45'}`}>
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0px 3px 6px rgba(0,0,0,0.6)) drop-shadow(0px 0px 8px rgba(212,175,55,0.8))' }}
          >
            <path d="M 2 16 Q 16 2 30 16 Q 16 30 2 16 Z" fill="#1c160e" stroke="url(#eyeGoldGradient)" strokeWidth="1.5" />
            <circle cx="16" cy="16" r="6" fill="url(#eyeGemGradient)" stroke="#D4AF37" strokeWidth="0.5" />
            <ellipse cx="16" cy="16" rx="1.5" ry="4.5" fill="#1c160e" />
            <circle cx="14.5" cy="14.5" r="1.5" fill="#ffffff" opacity="0.9" />
            <defs>
              <linearGradient id="eyeGoldGradient" x1="2" y1="16" x2="30" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D4AF37" />
                <stop offset="0.5" stopColor="#FDE08B" />
                <stop offset="1" stopColor="#D4AF37" />
              </linearGradient>
              <radialGradient id="eyeGemGradient" cx="16" cy="16" r="6" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFEA70" />
                <stop offset="0.4" stopColor="#FF8C00" />
                <stop offset="0.8" stopColor="#A82A00" />
                <stop offset="1" stopColor="#4A0E00" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>

    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CustomCursor />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

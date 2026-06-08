import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import brascinLogo from "@/assets/brascin-logo.png";

const navItems = [
  { label: "Soluções", to: "/solucoes" },
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/", hash: "sobre" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-primary-foreground/20 shadow-sm"
          : "bg-primary",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" aria-label="Brascin — início">
          <img
            src={brascinLogo}
            alt="Brascin"
            className="h-6 w-auto transition-all"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="rounded-md px-3 py-2 text-sm font-medium text-primary-foreground/90 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground"
              activeProps={{ className: "text-primary-foreground bg-primary-foreground/20" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="contato"
            className="ml-2 inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-2 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary-foreground/90 hover:shadow-md"
          >
            Fale com a Brascin
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-primary-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-primary-foreground/20 bg-primary/95 backdrop-blur-md md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/15 hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="contato"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-primary-foreground px-4 py-3 text-base font-semibold text-primary"
            >
              Fale com a Brascin
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

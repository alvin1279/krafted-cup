import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="w-full bg-slate-950 min-h-[10dvh]
    bg-brand-grad-t
    "
    >
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-amber-700 font-bold text-lg shrink-0">logo</div>

        <h1 className="uppercase flex-1 text-center text-amber-700 font-bold text-2xl sm:text-4xl md:text-6xl whitespace-nowrap px-4">
          <a href="/">The Krafted Cup</a>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-6 shrink-0">
          <a
            href="/products"
            className="text-sm sm:text-xl font-medium text-amber-700 hover:text-amber-500 transition-colors"
          >
            Products
          </a>
          <a
            href="/contact-us"
            className="text-sm sm:text-xl font-medium text-amber-700 hover:text-amber-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 shrink-0"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-amber-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-40 pb-4" : "max-h-0"}`}
      >
        <nav className="flex flex-col items-center gap-4">
          <a
            href="/products"
            className="text-sm font-medium text-amber-700 hover:text-amber-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </a>
          <a
            href="/contact-us"
            className="text-sm font-medium text-amber-700 hover:text-amber-500 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

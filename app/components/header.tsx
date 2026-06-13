export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-slate-950">
      <div className="text-amber-700 font-bold text-lg">logo</div>

      <h1 className="text-amber-700 font-bold text-base sm:text-xl absolute left-1/2 -translate-x-1/2">
        The Krafter Cup
      </h1>

      <nav className="flex items-center gap-4 sm:gap-6">
        <a
          href="#"
          className="text-sm font-medium text-amber-700 hover:text-amber-500 transition-colors"
          target="_self"
          rel="noopener noreferrer"
        >
          Products
        </a>
        <a
          href="#"
          className="text-sm font-medium text-amber-700 hover:text-amber-500
        transition-colors"
          target="_self"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}

import { useEffect, useRef, useState } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Menu from "~/components/menu";

export default function Products() {
  const searchButton = useRef<HTMLButtonElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    setQuery("");
    setTimeout(() => setIsSearching(false), 150); // mimics active flash
    // your search logic here
  };

  useEffect(() => {
    searchInput.current?.focus();
  }, []);

  return (
    <>
      <Header />
      <section
        className="menu-section h-[80dvh] flex flex-col gap-1 
  bg-[url(https://picsum.photos/1000/500)] bg-cover bg-fixed"
      >
        <div
          className="menu-header shrink-0
    bg-amber-grad-t pl-3 md:pl-9 pb-3
    flex flex-col gap-1"
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">
            Search Products
          </h1>
          <div className="filter-section">
            <div className="search-bar relative w-fit">
              <input
                ref={searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="bg-gray-100 rounded-full
    min-w-1xl w-2xs sm:w-2xl
    pl-2.5 pr-25
    overflow-y-hidden whitespace-nowrap overflow-x-scroll"
              />
              <button
                ref={searchButton}
                onClick={handleSearch}
                className={`absolute right-0
    text-white text-shadow-xs text-shadow-amber-950
    bg-gray-600 pl-5 pr-5
    select-none rounded-r-full
    transition-transform
    ${isSearching ? "translate-x-0.5 scale-y-110 font-bold" : ""}`}
              >
                Search
              </button>
            </div>
            <div className="pre-filters mt-3 ml-5">
              <p
                className="bg-brand-grad-b text-amber-700
          pl-5 pr-5 w-fit rounded-full capitalize"
              >
                top
              </p>
            </div>
          </div>
        </div>

        <section className="flex-1 overflow-hidden p-2.5 pt-1.5 ">
          <Menu />
        </section>
      </section>
      <Footer />
    </>
  );
}

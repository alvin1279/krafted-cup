import { useEffect, useRef, useState } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import Menu from "~/components/menu";

const MENU_ITEMS = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  itemName: `Item ${i + 1}`,
  sourceUrl:
    i % 2 === 0 || i % 5 === 0
      ? `https://picsum.photos/seed/${i}/200/200`
      : undefined,
}));

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
        className="menu-section
        flex flex-col  gap-1 
        h-[80dvh] 
        bg-[url(https://picsum.photos/1000/500)] bg-cover bg-fixed"
      >
        <div
          className="menu-header 
          md:min-h-1/5
          flex flex-col
          gap-1
          md:flex-row-reverse
          md:justify-between
          md:items-center md:gap-6 
          md:pl-9 md:pr-9 md:pb-3 
          shrink-0
          bg-amber-grad-t pl-3 
          "
        >
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">
            Search Products
          </h1>
          <div
            className="filter-section
            h-full
            flex flex-col 
            justify-center
          "
          >
            <div className="search-bar relative w-fit">
              <input
                ref={searchInput}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                className="search-bar
                bg-gray-100 rounded-full
                w-2xs 
                sm:w-xs
                md:w-100
                lg:w-3xl
                pl-2.5 pr-25
                overflow-y-hidden whitespace-nowrap overflow-x-scroll"
              />
              <button
                ref={searchButton}
                onClick={handleSearch}
                className={`absolute right-0
                  bg-gray-600 pl-5 pr-5
                  text-white text-shadow-xs text-shadow-amber-950
                  select-none rounded-r-full
                  transition-transform
                  ${isSearching ? "translate-x-0.5 scale-y-110 font-bold" : ""}`}
              >
                Search
              </button>
            </div>
            <div className="pre-filters mt-3 ml-5">
              <button
                className="bg-brand-grad-b text-amber-700
              pl-5 pr-5 w-fit rounded-full capitalize"
              >
                top
              </button>
            </div>
          </div>
        </div>

        <section className="flex-1 overflow-hidden p-2.5 pt-1.5 ">
          <Menu menu_items={MENU_ITEMS}/>
        </section>
      </section>
      <Footer />
    </>
  );
}

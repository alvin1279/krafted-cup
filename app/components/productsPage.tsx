import { useMemo, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Menu from "./menu";
import { SearchBar } from "./searchBar";
import { MENU_ITEMS, searchMenuItems } from "./menuItems";

const BG_URL = "https://picsum.photos/1920/1080";

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const filteredItems = useMemo(
    () => searchMenuItems(MENU_ITEMS, query),
    [query],
  );
  return (
    <>
      <Header />
      <div className="pl-5 pr-5 pb-10 shrink-0 bg-amber-grad-t">
        <SearchBar onValueChange={setQuery} />
      </div>
      <div className="bg-amber-grad-t flex flex-col h-max-50 overflow-y-scroll">
        <div
          className="
            pl-5 pr-5
            pt-3 md:pt-6
            h-130
            md:h-120
            overflow-hidden
          menu-items-section
            bg-cover bg-fixed
           ring-6 ring-black
           overflow-y-scroll
           "
          style={{ backgroundImage: `url(${BG_URL})` }}
        >
          {filteredItems.length > 0 ? (
            <Menu menu_items={filteredItems} />
          ) : (
            <p
              className="text-center text-black/70 py-10
              text-3xl
            font-extrabold
            "
            >
              No items match "{query}".
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

import Footer from "~/components/footer";
import Header from "~/components/header";
import Menu from "~/components/menu";

export default function Products() {
  return (
    <>
      <Header />
      <section className="menu-section h-[80dvh] flex flex-col gap-1 
      bg-[url(https://picsum.photos/1000/500)] bg-cover bg-fixed
      ">
        <div className="menu-header min-h-20 sm:min-h-32 max-h-1/4
         bg-amber-700 
         pl-3
         md:pl-9 
         flex flex-col gap-1">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">
            Search Products
          </h1>

          <div className="filter-section">
            <div className="search-bar relative w-fit">
              <input
                className="bg-gray-100
                 rounded-full
                         min-w-1xl w-2xs sm:w-2xl 
                        pl-2.5  pr-25 
                         overflow-y-hidden 
                         whitespace-nowrap 
                         overflow-x-scroll"
                type="text"
              />
              <button
                className="
                absolute
                  right-0
                 bg-gray-600 
                 pl-5 pr-5 
                 select-none 
                 border-solid
                 active:translate-x-0.5
                 active:border-2 
               rounded-r-full
               "
              >
                Search
              </button>
            </div>

            <div className="pre-filters mt-3 mb-1 ml-5">
              <p
                className="bg-brand-grad-b text-amber-700
               pl-5 pr-5 w-fit 
               rounded-full capitalize"
              >
                top
              </p>
            </div>
          </div>
        </div>
        <section className="min-h-4/5 max-h-3/4 p-2.5 ">
          <Menu />
        </section>
      </section>
      <Footer />
    </>
  );
}

import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Products() {
  return (
    <>
      <Header />
      <section className="menu-section min-h-[80dvh]">
        <div className="menu-header min-h-1/5 max-h-1/4 bg-amber-600 pl-2 flex flex-col gap-1">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-medium">
            Products
          </h1>
          <div className="filter-section flex flex-col gap-2">
            <div className="search-bar flex flex-row">
              <input
                className="bg-gray-100 rounded-full
                         min-w-1xl w-2xs sm:w-2xl 
                        pl-2.5  pr-2.5 
                         overflow-y-hidden whitespace-nowrap overflow-x-scroll"
                type="text"
              />
              <p className="m-1.5 bg-gray-600 pl-5 pr-5">Search</p>
            </div>
            <div className="pre-filters mb-1 ">
              <p className="bg-brand-grad-b text-amber-700 pl-5 pr-5 w-fit rounded-full capitalize">
                top
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

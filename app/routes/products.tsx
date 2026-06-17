import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Products(){
    return(
        <>
        <Header />
        <section className="menu-section min-h-[80dvh]">
            <div className="menu-header min-h-1/5 max-h-1/4 bg-amber-600">
                <h1 className=" text-8xl">Products</h1>
                <div className="filter-section">
                    <div className="search-bar">
                        search
                    </div>
                    <div className="pre-filters">
                        top
                    </div>

                </div>

            </div>

        </section>
        <Footer />
        </>
    )
}
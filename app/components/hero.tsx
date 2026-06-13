import "./hero.css";
import OfferCards from "./offerCards";

const OFFERS = [
  { id: 1, sourceUrl: "https://picsum.photos/300/400" },
  { id: 2, sourceUrl: "https://picsum.photos/400/400" },
  { id: 3, sourceUrl: "https://picsum.photos/400/400" },
  { id: 3, sourceUrl: "https://picsum.photos/400/400" },
];

export default function Hero() {
  return (
    <section className="hero-background w-full mx-auto text-center flex justify-center items-center bg-amber-950/50 min-h-dvh md:h-dvh">
      <div className="offer-container py-8 md:py-0 md:h-2/3 flex flex-col justify-center items-center w-11/12">
        <h1 className="offer-heading self-start w-48 rounded-full text-4xl text-amber-700 bg-slate-950/80 pt-2 pb-2">
          OFFERS
        </h1>
        <div
          className="offer-boxes w-full flex flex-col gap-6 
          md:flex-row md:justify-left
         mt-5 md:overflow-x-auto md:overflow-y-hidden hover:text-shadow-lg hover:text-shadow-amber-950
         "
        >
          {OFFERS.map((source, _) => (
            <div key={source.id} className="w-full md:w-auto md:shrink-0">
              <OfferCards sourceUrl={source.sourceUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import OfferCards from "./offerCards";
import ServiceCards from "./serviceCards";

const OFFERS = [
  { id: 1, sourceUrl: "https://picsum.photos/300/400" },
  { id: 2, sourceUrl: "https://picsum.photos/400/400" },
  { id: 3, sourceUrl: "https://picsum.photos/400/400" },
  { id: 4, sourceUrl: "https://picsum.photos/400/400" },
];
const SERVICES = [
  { id: "11Td_Logo", sourceUrl: "/TD-Logo.svg" },
  { id: "BitCoinLogo", sourceUrl: "/Bitcoin.svg.png" },
  { id: "propaneLog", sourceUrl: "/propane.png" },
  { id: "vapeLogo", sourceUrl: "https://picsum.photos/200/300" },
  { id: "OLGlogo", sourceUrl: "/OLG.png" },
];
const BG_URL = "https://picsum.photos/1920/1080";

export default function Hero() {
  return (
    <section
      className="hero-background w-full mx-auto text-center flex flex-col justify-center items-center
    
     bg-amber-950/50 lg:min-h-[70dvh]
       bg-cover bg-fixed
     
     "
      style={{ backgroundImage: `url(${BG_URL})` }}
    >
      <div className="offer-container py-7 md:py-3 flex flex-col justify-center items-center w-11/12">
        <h1
          className="offer-heading self-start w-48 rounded-full text-4xl text-amber-700 bg-slate-950/80 pt-2 pb-2 
          bg-brand-grad-b
        "
        >
          OFFERS
        </h1>
        <div
          className="offer-boxes w-full flex flex-col items-center gap-6
          md:flex-row md:items-stretch md:justify-start
          mt-5 md:overflow-x-auto md:overflow-y-hidden"
        >
          {OFFERS.map((source) => (
            <div key={source.id} className="w-full md:w-auto md:shrink-0">
              <OfferCards sourceUrl={source.sourceUrl} />
            </div>
          ))}
        </div>
      </div>
      <div className="service-container py-8 md:py-0 flex flex-col justify-center items-center w-11/12">
        <h1
          className="self-start w-48 rounded-full text-4xl text-amber-700 bg-slate-950/80 pt-2 pb-2
          bg-brand-grad-b
        "
        >
          Services
        </h1>
        <div
          className="service-boxes w-full flex flex-row items-center gap-4
           md:items-stretch md:justify-start
          mt-5 mb-7 overflow-x-auto"
        >
          {SERVICES.map((service) => (
            <div key={service.id} className="shrink-0 w-[25dvw] md:w-auto">
              <ServiceCards imgurl={service.sourceUrl} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

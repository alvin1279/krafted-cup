import { Card } from "~/components/ui/card";

interface OfferCardsProps {
  sourceUrl: string;
  offer?: string;
}

export default function OfferCards({ sourceUrl, offer }: OfferCardsProps) {
  return (
    <Card
      className="mx-auto w-full max-w-xs sm:w-56 lg:w-64 overflow-hidden p-0 gap-0 
      text-amber-700
    hover:text-shadow-2xs hover:text-shadow-amber-400 hover:text-amber-600
    hover:translate-0.5
    "
    >
      <div className="relative w-full aspect-video bg-amber-700 text-white">
        <img
          loading="lazy"
          src={sourceUrl}
          alt="Event cover"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Mobile: gradient + text overlaid on image */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 to-transparent sm:hidden" />
        <p className="absolute bottom-3 left-4 right-4 text-sm font-semibold text-white sm:hidden">
          {offer ?? "Offer deal"}
        </p>
      </div>

      {/* Desktop: text in solid bar below image */}
      <div
        className="hidden sm:block bg-black px-4 py-3 bg-brand-grad-b
      
      "
      >
        <p className="text-lg font-semibold" >
          {offer ?? "Offer deal"}
        </p>
      </div>
    </Card>
  );
}

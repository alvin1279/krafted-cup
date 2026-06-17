// MenuItem.tsx
interface MenuItemProps {
  sourceUrl?: string;
  itemName?: string;
}

export default function MenuItem({ sourceUrl, itemName }: MenuItemProps) {
  return (
    <div className="aspect-square w-30  md:w-34  
           bg-amber-700/80
      bg-[radial-gradient(circle,var(--color-amber-900)_1.2px,transparent_1.2px)] 
      bg-size-[15px_15px]
    flex flex-col justify-end rounded-2xl">
      <div className="image-content max-h-2/3 overflow-hidden">
        {sourceUrl ? (
          <img src={sourceUrl} alt="" className="rounded-t-2xl" />
        ) : (
          <div
            className="w-full h-full rounded-t-2xl"
          />
        )}
      </div>
      <div
        className="text-data z-10
        h-1/3
       text-amber-700 bg-brand-grad-t 
        text-center select-none
        p-1.5
        rounded-b-2xl"
      >
        <p
          className=" h-full whitespace-nowrap
           
        overflow-y-hidden overflow-x-scroll scrollbar-none md:scrollbar-thin"
        >
          {itemName ?? "Name not available"}
        </p>
      </div>
    </div>
  );
}

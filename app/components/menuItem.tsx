// MenuItem.tsx
interface MenuItemProps {
  sourceUrl?: string;
  itemName?: string;
}

export default function MenuItem({ sourceUrl, itemName }: MenuItemProps) {
  return (
    <div className="aspect-square w-34 bg-amber-700 flex flex-col justify-end rounded-2xl">
      <div className="image-content max-h-2/3 overflow-hidden">
        {sourceUrl ? <img src={sourceUrl} alt="" /> : null}
      </div>
      <div
        className="text-data 
        h-1/3
       text-amber-700 bg-brand-grad-t 
        text-center select-none
        p-1.5
        rounded-b-2xl"
      >
        <p className=" h-full whitespace-nowrap overflow-y-hidden overflow-x-scroll ">
          {itemName ?? "Name not available"}
        </p>
      </div>
    </div>
  );
}

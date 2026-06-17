// MenuItem.tsx
interface MenuItemProps {
  sourceUrl?: string;
  itemName?: string;
}

export default function MenuItem({ sourceUrl, itemName }: MenuItemProps) {
  return (
    <div className="aspect-square w-30 bg-amber-500 flex flex-col justify-end">
      <div className="image-content max-h-2/3 overflow-hidden">
        {sourceUrl ? <img src={sourceUrl} alt="" /> : null}
      </div>
      <div className="text-data h-1/3 overflow-y-hidden overflow-x-scroll text-amber-700 bg-brand-grad-t text-center select-none">
        <p className="whitespace-nowrap">{itemName ?? "Name not available"}</p>
      </div>
    </div>
  );
}
    
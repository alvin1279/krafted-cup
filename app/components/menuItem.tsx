interface MenuItemProps {
  sourceUrl?: string;
  itemName?: string;
}

export default function MenuItem(source: MenuItemProps) {
  return (
    <div className="aspect-square size-30 bg-amber-500 flex flex-col justify-end">
      <div className="image-content max-h-2/3 overflow-hidden">
        {source.sourceUrl ? <img src={source.sourceUrl} alt="" /> : null}
      </div>
      <div className="text-data h-1/3 overflow-y-hidden overflow-x-scroll  text-amber-700 bg-brand-grad-t text-center select-none">
        <p className="whitespace-nowrap">{source.itemName ?? "Name not available for now temp placeholder"}</p>
      </div>
    </div>
  );
}

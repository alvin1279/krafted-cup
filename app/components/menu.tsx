import MenuItem from "./menuItem";

const MENU_ITEMS = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  itemName: `Item ${i + 1}`,
  sourceUrl:
    i % 3 === 0 ? `https://picsum.photos/seed/${i}/200/200` : undefined,
}));

export default function Menu() {
  return (
    <div className="flex justify-center w-full h-full">
      <section
        className="w-full h-full overflow-y-scroll grid 
        grid-cols-3 gap-4 lg:gap-6 
        md:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]"
      >
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            itemName={item.itemName}
            sourceUrl={item.sourceUrl}
          />
        ))}
      </section>
    </div>
  );
}

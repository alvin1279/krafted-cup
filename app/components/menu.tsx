import MenuItem from "./menuItem";

interface MenuItemProps {
  id: number;
  sourceUrl?: string;
  itemName: string;
}

interface MenuProps {
  menu_items: MenuItemProps[];
}

export default function Menu({ menu_items }: MenuProps) {
  return (
    <div
      className="flex justify-center w-full h-fit
    "
    >
      <section
        className="w-full h-fit grid 
        grid-cols-3 gap-4 lg:gap-6 
        md:grid-cols-[repeat(auto-fill,minmax(10rem,1fr))]
        "
      >
        {menu_items.map((item) => (
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

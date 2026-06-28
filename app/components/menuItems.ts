const CATEGORIES = [
    "Mugs",
    "Travel Cups",
    "Espresso Cups",
    "Tumblers",
    "Accessories",
] as const;

export interface MenuItemData {
    id: number;
    itemName: string;
    sourceUrl?: string;
    price: number;
    category: (typeof CATEGORIES)[number];
    description: string;
    rating: number; // 3.0 - 5.0
    inStock: boolean;
    tags: string[];
}

export const MENU_ITEMS: MenuItemData[] = Array.from({ length: 75 }, (_, i) => {
    const category = CATEGORIES[i % CATEGORIES.length];
    return {
        id: i,
        itemName: `Item ${i + 1}`,
        sourceUrl:
            i % 3 === 0 || i % 5 === 0 || i % 7 === 0 || i % 11 === 0
                ? `https://picsum.photos/seed/${i}/200/200`
                : undefined,
        price: Number((7.99 + (i % 12) * 1.75).toFixed(2)),
        category,
        description: `Hand-glazed ${category.toLowerCase()}, crafted in small batches.`,
        rating: Number((3 + ((i * 7) % 21) / 10).toFixed(1)),
        inStock: i % 9 !== 0,
        tags: [
            category.toLowerCase().replace(/\s+/g, "-"),
            i % 2 === 0 ? "best-seller" : "new-arrival",
            ...(i % 4 === 0 ? ["limited-edition"] : []),
        ],
    };
});

export function searchMenuItems(
    items: MenuItemData[],
    query: string,
): MenuItemData[] {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items
        .map((item) => {
            let score = 0;
            if (item.itemName.toLowerCase().includes(q)) score += 3;
            if (item.category.toLowerCase().includes(q)) score += 2;
            if (item.tags.some((t) => t.toLowerCase().includes(q))) score += 2;
            if (item.description.toLowerCase().includes(q)) score += 1;
            return { item, score };
        })
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score)
        .map(({ item }) => item);
}
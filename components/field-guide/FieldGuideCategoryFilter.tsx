import Link from "next/link";

type FieldGuideCategoryFilterProps = {
  categories: string[];
  activeCategory?: string;
};

export function FieldGuideCategoryFilter({
  categories,
  activeCategory,
}: FieldGuideCategoryFilterProps) {
  return (
    <nav aria-label="Filter by category" className="mb-6 flex flex-wrap gap-3 text-sm">
      <Link
        href="/books/field-guide"
        className={!activeCategory ? "font-bold underline" : "hover:underline"}
        aria-current={!activeCategory ? "page" : undefined}
      >
        All
      </Link>
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <Link
            key={category}
            href={`/books/field-guide?category=${encodeURIComponent(category)}`}
            className={isActive ? "font-bold underline" : "hover:underline"}
            aria-current={isActive ? "page" : undefined}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}


import { Product } from "@/types";
import ProductCard from "./ProductCard";

export default function ProductSection({
  id,
  title,
  subtitle,
  products,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  products: Product[];
}) {
  const iconColor = title.includes("দাম বেড়েছে")
    ? "text-red-500"
    : title.includes("দাম কমেছে")
      ? "text-green-500"
      : "";

  const icon = title.includes("দাম বেড়েছে")
    ? "▲"
    : title.includes("দাম কমেছে")
      ? "▼"
      : "";

  const cleanTitle = title
    .replace("🔺", "")
    .replace("🔻", "")
    .trim();

  return (
    <section id={id} className="container mx-auto scroll-mt-4 px-4 pt-10">
      <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900">
        {icon && <span className={iconColor}>{icon}</span>}
        {cleanTitle}
      </h2>

      {subtitle && (
        <p className="mt-1 text-sm text-base-content/60">{subtitle}</p>
      )}

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}


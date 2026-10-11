import { formatPrice, formatUnit, getChangeBadge } from "@/lib/utils";
import LoadingLink from "./LoadingLink";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  const badge = getChangeBadge(product.change);

  return (
    <LoadingLink
      href={`/product/${product.slug}`}
      label={`${product.nameBn} লোড হচ্ছে...`}
      className=" rounded-2xl border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className=" gap-2 px-6 py-2 space-y-2 rounded-2xl">
       <div className="flex gap-2">
         <div className="text-xl">{product.image}</div>

        <h3 className="leading-tight">{product.nameBn}</h3>
       </div>
        <p className="text-sm text-base-content/60">
          {formatUnit(product.unit)}
        </p>

        <div className=" flex items-end justify-between gap-2">
          <div>
            <p className="text-sm text-base-content/60">আজকের দাম</p>
            <p className="">
              {formatPrice(product.today)} টাকা
            </p>
          </div>
          <span
            className={`rounded-full px-2 py-1 text-xs font-semibold ${badge.color}`}
          >
            {badge.label}
          </span>
        </div>
      </div>
    </LoadingLink>
  );
}
"use client";

import { useMemo, useState } from "react";

import ProductCard from "./ProductCard";
import { parseBengaliNumber } from "@/lib/utils";
import { Product } from "@/types";

type SortKey = "default" | "asc" | "desc";

export default function CategorySort({ products }: { products: Product[] }) {
const [sort, setSort] = useState<SortKey>("default");

const sorted = useMemo(() => {
const list = [...products];


if (sort === "asc")
  list.sort(
    (a, b) => parseBengaliNumber(a.today) - parseBengaliNumber(b.today),
  );

if (sort === "desc")
  list.sort(
    (a, b) => parseBengaliNumber(b.today) - parseBengaliNumber(a.today),
  );

return list;


}, [products, sort]);

return (
<>
{/* Sort Section */} <div className="mt-4 border border-slate-200 rounded-xl container py-4 bg-white  flex w-full items-center justify-end gap-2 px-4 sm:px-6 lg:px-8"> <label htmlFor="sort" className="shrink-0 text-sm ">
সাজান: </label>


    <select
      id="sort"
      value={sort}
      onChange={(e) => setSort(e.target.value as SortKey)}
      className="select border border-slate-200 w-[170px] outline-0  select-sm  sm:select-md"
    >
      <option value="default">ডিফল্ট</option>
      <option value="asc">দাম: কম থেকে বেশি</option>
      <option value="desc">দাম: বেশি থেকে কম</option>
    </select>
   
  </div>
 <p className="text-xl py-2 my-2 "> মোট {products.length.toLocaleString('bn-BD')}টি পণ্য দেখানো হচ্ছে</p>
  {/* Full Width Product Grid */}
  <div className="mt-2 grid  grid-cols-1 gap-4  sm:grid-cols-2  lg:grid-cols-3 ">
    {sorted.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
</>


);
}

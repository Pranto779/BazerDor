import Link from "next/link";
import { notFound } from "next/navigation";

import CategorySort from "../../../components/Sort";
import { getCategories, getProducts } from "@/lib/api";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const categories = await getCategories();
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const products = await getProducts(slug);

  return (
    <div className="container mx-auto px-3 py-5 sm:px-4 sm:py-8">
      <div className="container mx-auto flex items-center gap-3 space-y-0 rounded-xl border border-slate-200 bg-white px-3 py-4 sm:gap-4 sm:px-5 sm:py-5">
        <h1 className="shrink-0 text-3xl font-bold sm:text-4xl">
          {category.icon}
        </h1>

        <div className="min-w-0">
          <p className="break-words text-lg font-bold sm:text-xl">
            {category.nameBn}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:text-sm">
            {products.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও
            পরিবর্তন
          </p>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="px-3 py-12 text-center sm:py-16">
          <p className="text-base sm:text-lg">
            এই ক্যাটাগরিতে কোনো পণ্য নেই।
          </p>

          <Link href="/" className="btn btn-primary mt-4">
            হোম পেজে ফিরে যান
          </Link>
        </div>
      ) : (
        <div className="mt-4 sm:mt-6">
          <CategorySort products={products} />
        </div>
      )}
    </div>
  );
}


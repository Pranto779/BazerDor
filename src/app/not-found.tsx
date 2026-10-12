import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-gradient-to-b from-green-50 via-white to-emerald-50 px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Vegetable Illustration */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="animate-bounce text-5xl [animation-delay:200ms]">
            🥕
          </span>

          <span className="text-7xl">🥦</span>

          <span className="animate-bounce text-5xl [animation-delay:500ms]">
            🍅
          </span>
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-extrabold tracking-tight text-green-700 sm:text-9xl">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-7 text-gray-600 sm:text-base">
          মনে হচ্ছে এই পেজটি বাজারের সবজির ঝুড়িতে হারিয়ে গেছে!
          চলুন, আবার হোম পেজে ফিরে যাই।
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-md shadow-green-600/20 transition duration-200 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <span>🏡</span>
          হোম পেজে ফিরে যান
        </Link>

        {/* Footer */}
        <div className="mt-10 flex items-center justify-center gap-2 text-sm text-green-700/70">
          <span>🌱</span>
          <span>তাজা বাজারদরের ঠিকানা — BazarDor</span>
          <span>🌱</span>
        </div>
      </div>
    </main>
  );
}
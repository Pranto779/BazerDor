"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProfileForm from "@/components/ProfileForm";
import { IoReturnDownBack } from "react-icons/io5";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
const router = useRouter();
const { data: session, isPending } = authClient.useSession();
const [loading, setLoading] = useState(false);

async function handleSignOut() {
if (loading) return;


setLoading(true);

try {
  const { error } = await authClient.signOut();

  if (error) {
    toast.error("সাইন আউট করা যায়নি! আবার চেষ্টা করুন।");
    setLoading(false);
    return;
  }

  toast.success("সাইন আউট সফল হয়েছে!");
  window.location.replace("/");
} catch (error) {
  console.error("Sign out error:", error);
  toast.error("সাইন আউট করতে সমস্যা হয়েছে!");
  setLoading(false);
}


}

if (isPending) {
return ( <div className="flex min-h-screen items-center justify-center bg-[#f6f8f4]"> <p className="text-gray-500">লোড হচ্ছে...</p> </div>
);
}

if (!session) {
router.replace("/signin?redirect=/profile&reason=login");


return (
  <div className="flex min-h-screen items-center justify-center bg-[#f6f8f4]">
    <p className="text-gray-500">সাইন ইন পেজে নেওয়া হচ্ছে...</p>
  </div>
);


}

return ( <div className="min-h-screen bg-[#f6f8f4] px-4 py-10"> <div className="mx-auto max-w-4xl">
{/* Page Title */} <div className="mb-8"> <h1 className="text-3xl font-bold text-gray-900">
আমার প্রোফাইল </h1>


      <p className="mt-2 text-gray-500">
        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
      </p>
    </div>

    {/* Profile Information */}
    <div className="mb-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-3xl font-bold text-white">
            {session.user.name?.charAt(0).toUpperCase() || "U"}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {session.user.name}
            </h2>

            <p className="break-all text-gray-500">
              {session.user.email}
            </p>
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          type="button"
          onClick={handleSignOut}
          disabled={loading}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 border border-red-500 transition hover:bg-red-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <IoReturnDownBack size={20} />

          {loading ? "সাইন আউট হচ্ছে..." : "সাইন আউট"}
        </button>
      </div>
    </div>

    {/* Profile Update Form */}
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-semibold text-gray-900">
        তথ্য 
      </h3>

      <ProfileForm currentName={session.user.name} />
    </div>
  </div>
</div>

);
}

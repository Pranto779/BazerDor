
"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

type SignOutButtonProps = {
  icon: ReactNode;
};

export default function SignOutButton({
  icon,
}: SignOutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleSignOut() {
    if (loading) return;

    setLoading(true);

    try {
      const { error } = await authClient.signOut();

      if (error) {
        toast.error("লগআউট করা যায়নি! আবার চেষ্টা করুন।", {
          id: "signout-error",
          duration: 3000,
        });

        setLoading(false);
        return;
      }

      toast.success("সফলভাবে লগআউট হয়েছে!", {
        id: "signout-success",
        duration: 2000,
      });

      router.replace("/");
      router.refresh();
    } catch {
      toast.error("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।", {
        id: "signout-error",
        duration: 3000,
      });

      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      disabled={loading}
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-300 border-t-red-600" />
      ) : (
        icon
      )}

      {loading ? "লগআউট হচ্ছে..." : "সাইন আউট"}
    </button>
  );
}


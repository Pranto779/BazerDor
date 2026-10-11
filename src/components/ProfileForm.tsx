"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";


export default function ProfileForm({ currentName }: { currentName: string }) {
  const router = useRouter();
  const [name, setName] = useState(currentName);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("নাম খালি রাখা যাবে না");
      return;
    }
    setLoading(true);
    const { error } = await authClient.updateUser({ name: name.trim() });
    setLoading(false);

    if (error) {
      toast.error(error.message || "আপডেট ব্যর্থ হয়েছে");
      return;
    }
    toast.success("তথ্য আপডেট হয়েছে");
    router.push("/profile");
    router.refresh();
  }

  return (
    <div className="mx-auto w-full px-4 py-2">
      
        <h1 className="text-xl font-semibold">নাম </h1>
        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="নাম"
            className="input rounded-xl input-bordered w-full"
          />
          <button
            disabled={loading}
            className="btn btn-success w-full rounded-xl bg-green-600 text-white"
          >
            {loading ? "অপেক্ষা করুন..." : "তথ্য আপডেট করুন"}
          </button>
        </form>
      </div>

  );
}
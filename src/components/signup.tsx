"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLoginButtons from "./Buttons";
import { authClient } from "@/lib/auth-client";
export default function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toastStyle = {
    borderRadius: "14px",
    background: "#ffffff",
    color: "#374151",
    padding: "14px 16px",
    fontSize: "13px",
    fontWeight: 500,
    boxShadow: "0 10px 35px rgba(0,0,0,0.08)",
  };
  function showError(message: string) {
    toast.error(message, {
      duration: 3500,
      style: { ...toastStyle, border: "1px solid #FEE2E2" },
    });
  }
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const confirm = String(form.get("confirm") ?? "");
    if (!name || !email || !password || !confirm) {
      showError("সবগুলো ঘর পূরণ করুন");
      return;
    }
    if (password.length < 8) {
      showError("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }
    if (password !== confirm) {
      showError("দুটি পাসওয়ার্ড মিলছে না");
      return;
    }
    setLoading(true);
    try {
      const { error } = await authClient.signUp.email({
        name,
        email,
        password,
      });
      if (error) {
        showError("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।");
        return;
      }
      toast.success("অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!", {
        id: "signup-success",
        duration: 2000,
        style: {
          ...toastStyle,
          color: "#065F46",
          border: "1px solid #A7F3D0",
          fontWeight: 600,
        },
        iconTheme: { primary: "#059669", secondary: "#ffffff" },
      });
     setTimeout(() => {
  window.location.replace("/");
}, 700);
    } catch {
      showError("একটি সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  }
  const inputClass =
    "mt-1.5 w-full rounded-lg border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100";
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-[#F8F9FA] px-4 py-12">
      {" "}
      <div className="w-full max-w-md">
        {" "}
        {/* Header */}{" "}
        <div className="mb-6 text-center">
          {" "}
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {" "}
            অ্যাকাউন্ট তৈরি করুন{" "}
          </h1>{" "}
          <p className="mt-2 text-xs text-gray-500">
            {" "}
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।{" "}
          </p>{" "}
        </div>{" "}
        {/* Card Form */}{" "}
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
          {" "}
          <form onSubmit={handleSubmit} className="space-y-4">
            {" "}
            <div>
              {" "}
              <label className="block text-xs font-semibold text-gray-700">
                {" "}
                নাম{" "}
              </label>{" "}
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="আপনার নাম লিখুন"
                className={inputClass}
                disabled={loading}
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-xs font-semibold text-gray-700">
                {" "}
                ইমেইল{" "}
              </label>{" "}
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="আপনার ইমেইল লিখুন"
                className={inputClass}
                disabled={loading}
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-xs font-semibold text-gray-700">
                {" "}
                পাসওয়ার্ড{" "}
              </label>{" "}
              <div className="relative">
                {" "}
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  className={`${inputClass} pr-16`}
                  disabled={loading}
                />{" "}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
                >
                  {" "}
                  {showPassword ? "লুকান" : "দেখুন"}{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div>
              {" "}
              <label className="block text-xs font-semibold text-gray-700">
                {" "}
                পাসওয়ার্ড নিশ্চিত করুন{" "}
              </label>{" "}
              <div className="relative">
                {" "}
                <input
                  name="confirm"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="পাসওয়ার্ড আবার লিখুন"
                  className={`${inputClass} pr-16`}
                  disabled={loading}
                />{" "}
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-gray-700"
                >
                  {" "}
                  {showConfirmPassword ? "লুকান" : "দেখুন"}{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-[#00966D] py-3 text-sm font-semibold text-white transition hover:bg-[#00805d] focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
            >
              {" "}
              {loading ? (
                <>
                  {" "}
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />{" "}
                  অ্যাকাউন্ট তৈরি হচ্ছে...{" "}
                </>
              ) : (
                "অ্যাকাউন্ট তৈরি করুন"
              )}{" "}
            </button>{" "}
          </form>{" "}
          {/* Divider */}{" "}
          <div className="my-5 flex items-center gap-3">
            {" "}
            <div className="h-px flex-1 bg-gray-200" />{" "}
            <span className="text-xs text-gray-400">অথবা</span>{" "}
            <div className="h-px flex-1 bg-gray-200" />{" "}
          </div>{" "}
          {/* Social Logins */} <SocialLoginButtons />{" "}
          {/* Redirect to SignIn */}{" "}
          <p className="mt-6 text-center text-xs text-gray-500">
            {" "}
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-medium text-[#00966D] hover:underline"
            >
              {" "}
              সাইন ইন করুন{" "}
            </Link>{" "}
          </p>{" "}
        </div>{" "}
        {/* Back to Home */}{" "}
        <p className="mt-6 text-center text-xs text-gray-500">
          {" "}
          <Link href="/" className="transition hover:text-gray-800">
            {" "}
            ← হোম পেজে ফিরে যান{" "}
          </Link>{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
}
